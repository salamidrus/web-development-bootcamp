const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

app.post("/email", async (req, res) => {
  try {
    // async..await is not allowed in global scope, must use a wrapper

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    console.log(testAccount);

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "seli@tommy.com", // sender address
      to: "idrussalam95@gmail.com", // list of receivers
      subject: "Seli with love", // Subject line
      text: "Tommy forever", // plain text body
      //   html: "<b>Hello world?</b>", // html body
    });

    console.log(info);

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (e) {
    console.log(e);
  }
});

app.listen(3000, () => console.log("Listening to port 3000!"));
