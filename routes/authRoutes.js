const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ name, email, passwordHash: hashedPassword, role });
    await user.save();
    
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || !await bcrypt.compare(password, user.passwordHash)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { userId: user._id, role: user.role }, 
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '7d' }
    );
    
    res.json({ token, role: user.role, name: user.name });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    
    const newUser = new User({ name, email, passwordHash: password, role });
    await newUser.save();
   
    const token = jwt.sign(
      { userId: newUser._id, role: newUser.role }, 
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    res.json({ 
      message: 'Registration successful', 
      user: { name, email, role }, 
      token 
    });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
});

module.exports = router;
