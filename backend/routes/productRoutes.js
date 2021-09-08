const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require('../controller/productControllers');

//@desc GET all products from DB
//@route GET /api/products
//@access Public
// router.get('/', (req, res) => {});
router.get('/', getAllProducts);

//@desc GET a product by id from DB
//@route GET /api/products/:id
//@access Public
// router.get('/:id', (req, res) => {});
router.get('/:id', getProductById);

module.exports = router;
