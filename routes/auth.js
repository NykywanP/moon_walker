const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');

passport

router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/signup', (req, res) => {
  console.log(req.body);

  db.user.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      name: req.body.name,
      password: req.body.password
    }
  })
  .then(([user, created]) => {
    if (created) {
      // if created, success and redirect back to home
      console.log(`${user.name} was created`);
      // Flash Message
      const successObject = {
        successRedirect: '/',
        successFlash: 'Account created and logging in...'
      }
      passport.authenticate('local', successObject)(req, res);
    } else {
      // Email already exists
      req.flash('error', 'Email already exists...')
      res.redirect('/auth/signup');
    }
  })
  .catch(err => {
    console.log('Error', err);
    req.flash('error', 'Either email or password is incorrect. Please try again.');
    res.redirect('/auth/signup');
  })
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  successFlash: 'Welcome back...',
  failureFlash: 'Either email or password is incorrect. Please try again.'
}));

router.get('/logout', (req, res) => {
  req.logOut();
  req.flash('success', 'Logging out... Come back soon.');
  res.redirect('/');
});

module.exports = router;

// axios.get('https://api.nasa.gov/planetary/apod?api_key=s5hyJjcC6cUDfAMVb11pe7uEOeCNXbn4TkCGkeS4')
// .then(response => {
//      console.log(response.data);
//
