/**
 * Created by amihajlovski on 10.6.2017.
 */

import mongoose from 'mongoose';
import moment from 'moment';
import Q from 'q';

let LenderSchema = mongoose.Schema({
  state: String,
  money: Number,
  attorney: String,
  initiator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  accidentDate: Date,
  contactImmediately: Boolean,
  created: Date
});

LenderSchema.statics.saveLending = function(lending, lenderId){
  let deffer = Q.defer();
  let Lending = mongoose.model('Lending', LenderSchema);
  let newLending = new Lending({
    state: lending.state,
    money: lending.money,
    attorney: lending.attorney,
    accidentDate: lending.accidentDate,
    contactImmediately: lending.contactImmediately,
    initiator: lenderId,
    created: moment.utc(new Date).format()
  });
  newLending.save((err, createdLending) => {
    if (err) {
      return deffer.reject(err);
    }
    deffer.resolve(createdLending);
  });
  return deffer.promise;
};

module.exports = mongoose.model('Lender', LenderSchema);
