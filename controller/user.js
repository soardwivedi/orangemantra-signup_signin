const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/User');

// Register a new user
exports.register = async (req, res) => {
  const { username, password, first_name, last_name, email } = req.body;

  try {
    const isUser = await User.findOne({ $or: [{ email }, { username }] });

    if (isUser) {
      let message = 'User already registered with the given username';
      if (isUser.email === email)
        message = 'User already registered with the given email';

      return res.json({
        message
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
      first_name,
      last_name,
      email
    });
    await user.save();
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: '6h'
      }
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user profile
exports.profile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    return res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// abhinesh@orangemantra.in
