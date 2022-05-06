const express = require("express");
const { route } = require("express/lib/application");
const res = require("express/lib/response");
const router = express.Router();

router.route("/").get((req, res) => {
    res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
});

module.exports = router;