const express = require("express");
const { processPayment, sendStripeApiKey } = require("../controller/paymentController");
const { isAuthentictedUser } = require("../middleWare/auth");
require("dotenv").config({ path: "../config/config.env" })
const router  = express.Router();



router.route("/payment/process").post(isAuthentictedUser , processPayment);
console.log(process.env.STRIPE_API_KEY);
router.route("/stripeapikey").get(sendStripeApiKey);

module.exports = router