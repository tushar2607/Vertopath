const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All required fields must be filled" });
  }

  const sql =
    "INSERT INTO contacts(name, email, phone, message) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, phone, message], (error, results) => {
    if (error) {
      console.error("Database error:", error);
      return res
        .status(500)
        .json({ success: false, message: "Database error occurred" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Message received successfully!" });
  });
});
module.exports = router;
