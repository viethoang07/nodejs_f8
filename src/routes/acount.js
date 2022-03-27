const express = require("express");
const router = express.Router();

const acountController = require("../app/controllers/AcountController");

router.post("/createRegister", acountController.create);
router.post("/login", acountController.login);

router.get("/register", acountController.register);
router.get("/", acountController.index);

module.exports = router;
