const express = require("express");

const app = express();

app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("Server Running Successfully");
});

// Welcome Route
app.get("/welcome", (req, res) => {
  res.send("Welcome to Express Learning");
});

// Student Route
app.get("/student", (req, res) => {
  res.json({
    name: "John",
    course: "MERN Stack",
    batch: 13
  });
});

// Search Route
app.get("/search", (req, res) => {
  res.json(req.query);
});

// Register Route
app.post("/register", (req, res) => {
  res.json(req.body);
});

// Product Route
app.post("/product", (req, res) => {
  res.json({
    id: req.query.id
  });
});

// Login Route
app.post("/login", (req, res) => {
  res.json({
    username: req.headers.username,
    password: req.headers.password
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});