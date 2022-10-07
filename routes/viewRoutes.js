const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

////////////////////////////////////////////////////////////////////////////////////////
// Using this so that we do not get access to the page when press back button

const controllCacheHeader = (req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.removeHeader('Cross-Origin-Resource-Policy');
  res.removeHeader('Cross-Origin-Embedder-Policy');
  next();
};

router.get(
  '/',
  bookingController.createBookingCheckout,
  authController.isLoggedIn,
  controllCacheHeader,
  viewsController.getOverview
);
router.get(
  '/tour/:slug',
  authController.isLoggedIn,
  controllCacheHeader,
  viewsController.getTour
);
router.get(
  '/login',
  authController.isLoggedIn,
  controllCacheHeader,
  viewsController.getLoginForm
);
router.get(
  '/me',
  authController.protect,
  controllCacheHeader,
  viewsController.getAccount
);
router.get(
  '/signup',
  authController.isLoggedIn,
  controllCacheHeader,
  viewsController.getSignupForm
);
router.get(
  '/my-tours',
  authController.protect,
  controllCacheHeader,
  viewsController.getMyTours
);

//////////////////////////////////////////////////////////////////////////////////

// Original start

// router.get('/', authController.isLoggedIn, viewsController.getOverview);
// router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
// router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
// router.get('/me', authController.protect, viewsController.getAccount);

// // just for reference
// // router.post(
// //   '/submit-user-data',
// //   authController.protect,
// //   viewsController.updateUserData
// // );

// Original end

module.exports = router;
