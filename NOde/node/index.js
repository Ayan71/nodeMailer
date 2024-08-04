//1 import nodemailer
const nodemailer = require("nodemailer");

//2 configure email and send it

async function sendMail() {
  //Create on email tranporter.
  //SMPT simple mail tranfer protocol
  const tranporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ayanshk888@gmail.com",
      pass: "abhjgjqhcgsmcgnsfchfcgsgcfgkugs,jhc",
    },
  });
  //2 configue email content
  const mailOptions = {
    form: "ayanshk888@gmail.com",
    to: "shaikhjiii333@gmail.com",
    subject: "Welcome to nodejs",
    text: "this is first mail i create",
  };

  //2 send the email
  try {
    const result = await tranporter.sendMail(mailOptions);
    console.log("Email send Successfullt");
  } catch (error) {
    console.log("EMail send failer with error", error);
  }
}
sendMail();
