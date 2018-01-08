import { Router } from 'express';
import Lending from './handlers/lending';
import Authentication from './handlers/authentication';
import User from './handlers/user';
import Contact from './handlers/contact';

const routes = Router();
const lending = new Lending();
const auth = new Authentication();
const user = new User();
const contact = new Contact();

//Lending endpoints
routes.route('/lending').post(lending.createNewCompleteLending);

//Authentication endpoints
routes.route('/login').post(auth.login);

//User endpoints
routes.route('/user/validate/:hash').get(user.validateUser);
routes.route('/user/reset-password').post(user.resetPassword);

//Contact endpoints
routes.route('/contact').post(contact.saveNewContactMail);

export default routes;
