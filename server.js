
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hotel Website Backend is running successfully!");
});

app.get("/api/hotels", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Grand Hotel",
      location: "Hyderabad",
      pricePerNight: 2500
    },
    {
      id: 2,
      name: "Comfort Stay",
      location: "Hyderabad",
      pricePerNight: 1800
    }
  ]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
