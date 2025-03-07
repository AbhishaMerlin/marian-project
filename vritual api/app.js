const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express App
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Import the Product model
const Product = require('./model/product');

// MongoDB Connection
async function main() {
    try {
        await mongoose.connect("mongodb+srv://abhishamerlinsm:abhi@cluster1.kibmw.mongodb.net/Arts", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB connected");
    } catch (error) {
        console.error("Error connecting to DB:", error);
    }
}
main();

// Routes
app.get('/', (req, res) => {
    res.send("From the server");
});
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (error) {
        console.error("Error retrieving products:", error);
        res.status(500).send("Error retrieving products.");
    }
});

// Start the Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
