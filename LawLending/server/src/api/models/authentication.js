/**
 * Created by amihajlovski on 13.6.2017.
 */

import mongoose from 'mongoose';
import Q from 'q';
import guid from 'guid';
import moment from 'moment';

let AuthenticationSchema = mongoose.Schema({
  accessToken: {
    type: String,
    required: true,
    unique: true
  },
  expiration: {
    type: Date,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
});

AuthenticationSchema.statics.createAuthentication = function(user) {
  let deffer = Q.defer();
  let Auth = mongoose.model('Authentication', AuthenticationSchema);
  let authentication = new Auth({
    accessToken: guid.create(),
    user: user._id,
    expiration: moment().add(30, 'day')
  });
  authentication.save((err, auth) => {
    if (err) {
      return deffer.reject(err);
    }
    deffer.resolve(auth);
  });
  return deffer.promise;
};

module.exports = mongoose.model('Authentication', AuthenticationSchema);
