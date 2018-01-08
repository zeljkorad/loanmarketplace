/**
 * Created by amihajlovski on 13.6.2017.
 */

import md5 from 'md5';
import mongoose from 'mongoose';

class Authentication {
  constructor(){
    this.userModel = mongoose.model('User');
    this.authModel = mongoose.model('Authentication');
    this.login = this.login.bind(this);
  }

  /**
   * [POST] - api/user/login
   *
   * fields:
   *  - email       : string
   *  - password    : string
   *
   * @param req
   * @param res
   */
  login(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    if(!email || !password) {
      return res.status(401).send('USER NOT AUTHENTICATED');
    }
    let authModel = this.authModel;
    let userModel = this.userModel;
    userModel.findOne({
      email: email,
      password: md5(password)
    })
      .exec()
      .then(function (user) {
        if(user === null)
          return res.status(401).send('WRONG EMAIL OR PASSWORD');
        if(user.status !== 'ACTIVE')
          return res.status(401).send('USER NOT ACTIVATED');
        authModel
          .createAuthentication(user)
          .then((authenticationData) => {
            res.json({
              accessToken: authenticationData.accessToken,
              name: user.name
            });
          }, (error) => {
            res.status(401).send('USER NOT AUTHENTICATED');
          });
      }, function () {
        res.status(401).send('WRONG EMAIL OR PASSWORD');
      });
  }
}

export default Authentication;
