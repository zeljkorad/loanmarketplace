/**
 * Created by amihajlovski on 19.6.2017.
 */

import mongoose from 'mongoose';
import * as validatorLibrary from 'validator';

let ContactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate: {
      validator: function(value){
        return validatorLibrary.isEmail(value);
      },
      message: '{VALUE} is not a valid email!'
    }
  }
});

ContactSchema.statics.saveContactMail = function(contactMail){
  let deffer = Q.defer();
  let Contact = mongoose.model('Contact', ContactSchema);
  let newContact = new Contact({
    name: contactMail.name,
    phone: contactMail.phone,
    message: contactMail.message,
    email: contactMail.email,
    created: moment.utc(new Date).format()
  });
  newContact.save((err, createdContact) => {
    if (err) {
      return deffer.reject(err);
    }
    deffer.resolve(createdContact);
  });
  return deffer.promise;
};

module.exports = mongoose.model('Contact', ContactSchema);
