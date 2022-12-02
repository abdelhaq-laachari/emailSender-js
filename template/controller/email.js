const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const { promisify } = require("util");
const fs = require("fs");
const readFile = promisify(fs.readFile);
const authEmail = process.env.EMAIL;
const authPassword = process.env.PASS;
const templatePath = process.env.templatePath;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: authEmail,
    pass: authPassword,
  },
});

exports.sendMails = async (email, fullName) => {
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
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
  });
};
