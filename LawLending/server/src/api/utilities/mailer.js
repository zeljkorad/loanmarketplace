/**
 * Created by amihajlovski on 28.1.2017.
 */

let fs = require('fs');
let _ = require('lodash');
let path = require('path');
let nodemailer = require('nodemailer');
let smtpTransport = require('nodemailer-smtp-transport');

let smtp = function() {
  return nodemailer.createTransport(
    smtpTransport({
      service: 'gmail',
      auth: {
        user: process.env.LAWLENDING_MAIL_USER,
        pass: process.env.LAWLENDING_MAIL_PASS,
      },
    }),
  );
};

let transport = smtp();

transport.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email service ready');
  }
});

_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

transport.use(
  'compile',
  (function lodashTemplate() {
    function render(mail, cb) {
      if (mail.data.template) {
        let fileName = path.join(
          __dirname,
          '../../../views/',
          mail.data.template + '.html',
        );
        fs.readFile(fileName, 'utf8', (err, htmlString) => {
          if (err) {
            return console.log('error', err);
          }
          mail.data.html = _.template(htmlString)(mail.data.context);
          cb();
        });
      } else {
        mail.data.html = _.template(mail.data.templateHTML)(mail.data.context);
        cb();
      }
    }

    return (mail, cb) => {
      render(mail, cb);
    };
  })(),
);

let send = mail => {
  mail.from = process.env.LAWLENDING_MAIL_USER;
  transport.sendMail(mail, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + mail.to);
  });
};

let validationMail = function(user) {
  let data = {};
  data.user = user;
  data.url = process.env.BASE_URL;
  data.validationUrl =
    process.env.BASE_URL +
    'validate-user/' +
    encodeURIComponent(user.validationHash);
  let mail = {
    to: user.email,
    subject: 'Activate your account',
    template: 'validation',
    context: data,
  };
  send(mail);
};

let resetPasswordMail = function(user, resetPasswordHash) {
  let data = {};
  data.user = user;
  data.url = process.env.BASE_URL;
  data.resetPasswordHash =
    process.env.BASE_URL +
    'reset-password/' +
    encodeURIComponent(resetPasswordHash);
  let mail = {
    to: user.email,
    subject: 'Reset your password',
    template: 'reset-password',
    context: data,
  };
  send(mail);
};

let contactMail = function(contactData) {
  let mail = {
    to: process.env.CONTACT_EMAIL,
    subject: 'You received mail from contact form',
    template: 'contact',
    context: contactData,
  };
  send(mail);
};

module.exports = {
  send: send,
  sendValidationMail: validationMail,
  sendResetPasswordMail: resetPasswordMail,
  contactMail: contactMail
};
