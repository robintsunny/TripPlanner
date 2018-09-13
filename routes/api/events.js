const express = require("express");
const router = express.Router();

router.get("/events", (req, res) => res.json({
    msg: "This is the events route"
}));

module.exports = router;