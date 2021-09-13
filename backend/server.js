require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

connectDB();

app.use(express.json());
app.use(cors());
app.use('/api/products', productRoutes);
app.get('/', (req, res) => {
  res.send('Connected to MERN Shopping API');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
