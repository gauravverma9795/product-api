const Product = require('../models/product');

// POST /products - Create a new product
const createProduct = async (req, res) => {
    try {
        const { name, price, description, category } = req.body;
        const product = await Product.create({ name, price, description, category });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
    }
};

// GET /products - Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
};

// GET /products/:id - Get a single product by ID
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
};

// PUT /products/:id - Update a product
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, description, category } = req.body;
        const product = await Product.findByPk(id);
        if (product) {
            product.name = name;
            product.price = price;
            product.description = description;
            product.category = category;
            await product.save();
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error });
    }
};

// DELETE /products/:id - Delete a product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (product) {
            await product.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
