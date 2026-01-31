const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

mongoose.connect("mongodb://mongo:27017/nk_cars");

const InquirySchema = new mongoose.Schema({
  email: String,
  phone: String,
  date: { type: Date, default: Date.now }
});

const Inquiry = mongoose.model("Inquiry", InquirySchema);

app.post("/submit-inquiry", async (req, res) => {
  try {
    await Inquiry.create(req.body);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.get("/admin", async (req, res) => {
  const data = await Inquiry.find();
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

