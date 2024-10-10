# User Signup and Login API

This project provides a simple user signup and login flow using **Node.js**, **Express.js**, **MongoDB**, and **Joi** for schema validation with **Celebrate** for request validation middleware.

## Features

- User Registration (Signup)
- User Login (Authentication)
- user Profile (Provides User Profile Information)
- Input validation using `Joi` and `Celebrate`
- Secure password storage using `bcrypt`
- JWT token generation for session management
- MongoDB for user data storage

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend server.
- **Express.js**: Web framework for routing and middleware.
- **MongoDB**: NoSQL database for user data storage.
- **Joi**: Library for schema validation of user inputs.
- **Celebrate**: Validation middleware for Express using Joi schemas.
- **bcrypt**: For password hashing.
- **jsonwebtoken**: For creating and verifying JWT tokens.

## Prerequisites

If you have nvm installed in your environment then simply run "nvm use" or else you use node version 20.16.0

## Installation

1. Clone the repository:

   git clone git@github.com:soardwivedi/orangemantra-signup_signin.git

#.env.example
.env.example file has the sensitive information example, change those as per your machine.

###

To run the project on development environment run command "npm run dev"

###

To run the project on production environment run command "npm start"

### api end points for this project are following.

/auth/register
/auth/login
/user/profile

###

To get the user profile data you have to send the token in headers under the "authorization" key.
