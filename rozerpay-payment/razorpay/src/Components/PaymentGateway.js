export default async function displayRazorpay() {
  const data = await fetch("http://localhost:1337/razorpay", {
    method: "POST",
  }).then((t) => t.json());

  console.log(data);

  const options = {
    key: "rzp_test_XmZRCQRG4zhL6B",
    currency: data.currency,
    amount: data.amount,
    name: "Sumit Narwal",
    description: "Wallet Transaction",
    image: "http://localhost:1337/logo",
    order_id: data.id,
    handler: function (response) {
      alert("PAYMENT ID ::" + response.razorpay_payment_id);
      alert("ORDER ID :: " + response.razorpay_order_id);
    },
    prefill: {
      name: "Divash Upadhyay",
      email: "sumitnarwal39@gmail.com",
      contact: "9560916993",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
