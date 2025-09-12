import express from "express";

const app = express();
app.use(express.json());

let products = [{ id: 1, name: "Football" }];

// Health endpoint (Kubernetes will use this later)
app.get("/health", (req, res) => res.json({ start: "ok" }));

// List products
app.get("/products", (req, res) => res.json(products));

// Add product
app.post("/products", (req, res) => {
    const newProduct = { id: products.length + 1, ...req.body };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));