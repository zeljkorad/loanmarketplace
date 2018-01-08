/**
 * Created by amihajlovski on 19.6.2017.
 */

import mongoose from 'mongoose';
import validator from 'validator';
import * as mailer from '../utilities/mailer';

class Contact {
  constructor() {
    this.contactModel = mongoose.model('User');
    this.saveNewContactMail = this.saveNewContactMail.bind(this);
  }

  saveNewContactMail(req, res) {
    if (
      !req.body.name ||
      !req.body.phone ||
      !req.body.message ||
      !validator.isEmail(req.body.email)
    )
      return res.status(403).send('Invalid params!');
    this.contactModel.saveContactMail(req.body).then(
      function(contactObj) {
        mailer.contactMail(req.body);
        res.json(contactObj);
      },
      function(error) {
        res.status(400).send('Contact mail not saved!');
      },
    );
  }
}

export default Contact;
