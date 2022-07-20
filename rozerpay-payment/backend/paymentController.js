require("dotenv").config();
const uniquID = require("uniqid");
const path = require("path");

const Razorpay = require("razorpay");
var instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.SECRET_KEY,
});

exports.createOrder = (req, res) => {
  var options = {
    amount: 50000, // amount in the smallest currency unit
    currency: "INR",
    receipt: uniquID(),
  };
  instance.orders.create(options, function (err, order) {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    }
    res.json(order);
  });
};

exports.paymentCallback = (req, res) => { };

exports.getLogo = (req, res) => {
  res.sendFile(path.join(___dirname, "pay.jpg"));
};
