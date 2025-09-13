const express = require("express");
const app = express();

app.use(express.json());

let products = [];

// Routes
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const product = req.body;
  products.push(product);
  res.status(201).json(product);
});

// Export for testing
if (require.main === module) {
  app.listen(3000, () => {
    console.log("App running on http://localhost:3000");
  });
}

module.exports = app;
