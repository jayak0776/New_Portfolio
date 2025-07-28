const express = require("express");
const cors = require("cors");

require("dotenv").config();

//db
const connectDB = require("./config/db");
connectDB(); // then connect

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:5173", // for local dev
];

// Middlewares
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));
app.use(express.json());


// Routes
const routes = require("./routes/routes");
app.use("/api", routes);

// Root
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
