const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
// const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.use(viewsController.alerts);

router.get(
  '/',
  // bookingController.createBookingCheckout,
  authController.isLoggedIn,
  authController.controllCacheHeader,
  viewsController.getOverview
);
router.get(
  '/tour/:slug',
  authController.isLoggedIn,
  authController.controllCacheHeader,
  viewsController.getTour
);
router.get(
  '/login',
  authController.isLoggedIn,
  authController.controllCacheHeader,
  viewsController.getLoginForm
);
router.get(
  '/me',
  authController.protect,
  authController.controllCacheHeader,
  viewsController.getAccount
);
router.get(
  '/signup',
  authController.isLoggedIn,
  authController.controllCacheHeader,
  viewsController.getSignupForm
);
router.get(
  '/my-tours',
  authController.protect,
  authController.controllCacheHeader,
  viewsController.getMyTours
);
router.get(
  '/forgotPassword',
  authController.isLoggedIn,
  authController.controllCacheHeader,
  viewsController.getForgotPassword
);
router.get(
  '/resetPassword/:token',
  authController.isLoggedIn,
  authController.controllCacheHeader,
  viewsController.getResetPassword
);

//////////////////////////////////////////////////////////////////////////////////

// // just for reference
// // router.post(
// //   '/submit-user-data',
// //   authController.protect,
// //   viewsController.updateUserData
// // );

module.exports = router;
