/**
 * Created by amihajlovski on 13.6.2017.
 */

import mongoose from 'mongoose';
import validator from 'validator';
import md5 from 'md5';
import * as mailer from '../utilities/mailer';

class User {

  constructor(){
    this.userModel = mongoose.model('User');
    this.validateUser = this.validateUser.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
  }

  /**
   * [GET] - api/user/validate-user/:hash
   *
   * @param req
   * @param res
   */
  validateUser(req, res){
    if (!req.params.hash) {
      return res.status(406).send('WRONG VALIDATION HASH');
    }
    let userModel = this.userModel;
    userModel
      .findOne()
      .where('validationHash').equals(req.params.hash)
      .exec()
      .then(function (user) {
        if (user) {
          userModel.update(
            {_id: user._id},
            {
              $set: {
                validationHash: null,
                status: 'ACTIVE'
              }
            },
            {upsert: true},
            function (err) {
              if (err) {
                return res.status(404).send('Error saving user after validation.');
              }
              res.json(user);
            });
        } else {
          res.status(404).send('User not found');
        }
      }, function (error) {
        res.status(404).send('SERVER ERROR');
      });
  }

  /**
   * [POST] - api/user/reset-password
   *
   * fields:
   *  - email: string
   *
   * @param req
   * @param res
   */
  resetPassword(req, res) {
    if (!req.body.email || !validator.isEmail(req.body.email))
      return res.status(404).send('WRONG EMAIL');
    let userModel = this.userModel;
    userModel
      .findOne({
        email: req.body.email
      })
      .exec()
      .then(function (user) {
        if(!user)
          return res.status(404).send('WRONG EMAIL');
        let resetPasswordHash = md5(Date.now());
        userModel.update(
          {_id: user._id},
          {
            $set: {
              resetPasswordHash: resetPasswordHash
            }
          },
          {upsert: true},
          function (err) {
            if (err)
              return res.status(406).send('UNKNOWN SERVER ERROR');
            mailer.sendResetPasswordMail(user, resetPasswordHash);
            return res.status(200).send();
          });
      })
  }
}

export default User;
