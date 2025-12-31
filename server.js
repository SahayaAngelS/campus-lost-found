const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use(express.json());
const itemRoutes = require('./routes/itemRoutes');
app.use('/api/items', itemRoutes);
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);


mongoose
  .connect('mongodb+srv://Angel:angel%403101@cluster0.ldkie3r.mongodb.net/lostandfound?appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
// Cloudinary config
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: 'dafz3wlay',
  api_key: '285951475252471',     
  api_secret: '6a4hCWmKIohkFslCwC215yeMFug' 
});

require('dotenv').config(); 

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

app.get('/', (req, res) => {
  res.send('Lost and Found API running');
});






const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
