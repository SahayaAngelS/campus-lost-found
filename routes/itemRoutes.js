// server/routes/itemRoutes.js
const express = require('express');
const Item = require('../models/item');

const router = express.Router();

// CREATE item  (imageUrl sent from frontend)
router.post('/', async (req, res) => {
  try {
    const item = await Item.create({
      itemName: req.body.itemName,
      description: req.body.description,
      location: req.body.location,
      status: req.body.status,
      category: req.body.category,
      imageUrl: req.body.imageUrl, // Cloudinary URL from frontend
    });

    res.status(201).json(item);
  } catch (error) {
    console.error('Create item error:', error);
    res.status(500).json({ error: error.message });
  }
});
// ADD a claim to an item
router.post('/:id/claims', async (req, res) => {
  try {
    const { name, contact, message } = req.body;

    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { $push: { claims: { name, contact, message } } },
      { new: true }
    );

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// GET all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching items' });
  }
});

// UPDATE (edit) item
router.patch('/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE item (simple)
router.delete('/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
