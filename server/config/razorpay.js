const Razorpay = require("razorpay");

exports.instance =
	process.env.RAZORPAY_KEY && process.env.RAZORPAY_SECRET
		? new Razorpay({
				key_id: process.env.RAZORPAY_KEY,
				key_secret: process.env.RAZORPAY_SECRET,
		  })
		: null;
