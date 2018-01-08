/**
 * Created by amihajlovski on 10.6.2017.
 */

import mongoose from 'mongoose';
import moment from 'moment';
import md5 from 'md5';
import Q from 'q';
import { USER_ROLES, USER_STATUSES } from '../../config/constants';
import * as validatorLibrary from 'validator';

let UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: String,
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function(value) {
        return validatorLibrary.isEmail(value);
      },
      message: '{VALUE} is not a valid email!',
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/.test(value);
      },
      message:
        'Password must contain at least one letter, at least one number, and be longer than six characters.',
    },
  },
  validationHash: String,
  resetPasswordHash: String,
  status: {
    type: String,
    enum: [USER_STATUSES.AWAITING_VALIDATION, USER_STATUSES.INACTIVE, USER_STATUSES.ACTIVE],
    default: USER_STATUSES.AWAITING_VALIDATION,
  },
  role: {
    type: String,
    default: USER_ROLES.LENDER
  },
  created: Date,
});

UserSchema.statics.register = function(user) {
  let deffer = Q.defer();
  let User = mongoose.model('User', UserSchema);
  let newUser = new User({
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    email: user.email,
    password: md5(user.password),
    validationHash: md5(user.firstName + user.lastName),
    role: user.role,
    created: moment.utc(new Date()).format()
  });
  newUser.save((err, createdUser) => {
    if (err) {
      return deffer.reject(err);
    }
    deffer.resolve(createdUser);
  });
  return deffer.promise;
};

module.exports = mongoose.model('User', UserSchema);
