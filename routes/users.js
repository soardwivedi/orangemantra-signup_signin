const express = require('express');
const { login, register, profile } = require('../controller/user');
const auth = require('../middleware/auth');
const {
  ProfileSchema,
  LoginSchema,
  SignUpSchema
} = require('../validation/user');
const router = express.Router();
router.post('/auth/register', SignUpSchema, register);
router.post('/auth/login', LoginSchema, login);
router.get('/user/profile', ProfileSchema, auth, profile);

module.exports = router;
