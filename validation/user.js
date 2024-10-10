const { celebrate, Joi, Segments } = require('celebrate');

const ProfileSchema = celebrate({
  [Segments.HEADERS]: Joi.object()
    .keys({
      Authorization: Joi.string().required()
    })
    .options({ abortEarly: false })
});

const LoginSchema = celebrate({
  [Segments.BODY]: Joi.object()
    .keys({
      username: Joi.string().required(),
      password: Joi.string().required()
    })
    .options({ abortEarly: false })
});

const SignUpSchema = celebrate({
  [Segments.BODY]: Joi.object()
    .keys({
      first_name: Joi.string().min(36).max(36).required(),
      last_name: Joi.string(),
      email: Joi.string().email().required(),
      username: Joi.string().required(),
      password: Joi.string().required()
    })
    .options({ abortEarly: false })
});

module.exports = {
  SignUpSchema,
  LoginSchema,
  ProfileSchema
};
