const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const { promisify } = require("util");
const fs = require("fs");
const readFile = promisify(fs.readFile);
const templatePath = "../Email-template/template/view/email.hbs";

const sendMail = async (email, fullName, authEmail, authPassword) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: authEmail,
      pass: authPassword,
    },
  });

  let html = await readFile(templatePath, "utf8");
  let template = handlebars.compile(html);
  let data = {
    username: fullName,
  };
  let htmlToSend = template(data);
  let mailOptions = {
    from: authEmail,
    to: email,
    subject: "NamX Auto",
    html: htmlToSend,
  };
  transporter.sendMail(mailOptions);
};

module.exports = sendMail;