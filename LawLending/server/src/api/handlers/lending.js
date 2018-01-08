/**
 * Created by amihajlovski on 11.6.2017.
 */

import * as userModel from '../models/user';
import * as lendingModel from '../models/lending';
import { USER_ROLES } from '../../config/constants';
import * as mailer from '../utilities/mailer';

class Lending {
  /**
   *
   * [POST] - api/lending
   *
   * fields:
   *  - state:                string
   *  - money:                number
   *  - accidentDate:         date
   *  - contactImmediately:   boolean
   *  - attorney:             string
   *  - lender:               object
   *      - firstName:        string
   *      - lastName:         string
   *      - role:             string
   *      - email:            string
   *      - phone:            string
   *
   * @param req
   * @param res
   */
  createNewCompleteLending(req, res) {
    if (req.body.lender) {
      let lender = req.body.lender;
      userModel
        .register(lender)
        .then((lenderUser) => {
          mailer.sendValidationMail(lenderUser);
          lendingModel
            .saveLending(req.body, lenderUser._id)
            .then((lending) => {
              res.json(lending);
            })
            .catch((error) => {
              res.status(400).send(error);
            })
        })
        .catch((error) => {
          res.status(400).send(error);
        });
    } else
      res.status(400).send('missing fields');
  }
}

export default Lending;
