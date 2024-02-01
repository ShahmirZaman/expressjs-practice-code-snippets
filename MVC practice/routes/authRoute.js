import express from 'express'
import { forgetPasswordController, loginController, logoutController, signUpController } from '../controllers/authController.js';
const authRoute = express.Router();

authRoute.route('/signup').post(signUpController)
authRoute.route('/login').post(loginController)
authRoute.route('/logout').post(logoutController)
authRoute.route('/forgetPassword').put(forgetPasswordController)

export { authRoute }
