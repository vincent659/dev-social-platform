const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

/**
 * @route  GET api/auth
 * @desc   Test route
 * @access Public (Public route which we don't need token for)
 */

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/**
 * @route  POST api/auth
 * @desc   Authenticate user & get token
 * @access Public (Public route which we don't need token for)
 */

router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // to get the data in the request body we need to first initlaise the middleware
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      // check if user exists
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      // check if password is a match (ensure the msg to be the same, otherwise it will create a loop hole for people know if a person exists or not or usersname is wrong or pass is wrong.)
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: '5 days',
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
