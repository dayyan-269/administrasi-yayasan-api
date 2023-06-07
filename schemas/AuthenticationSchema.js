import Joi from 'joi';

const AuthenticationSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export default AuthenticationSchema;
