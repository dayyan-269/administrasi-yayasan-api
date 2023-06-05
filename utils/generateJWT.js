import * as dotenv from 'dotenv';
import JWT from 'jsonwebtoken';

import getJWTFormat from './getJWTFormat.js';

dotenv.config();

const generateJWT = async () => {
  const secret = process.env.SECRET || 'some_shared_secret';
  const token = getJWTFormat();

  const jwt = JWT.sign(token, secret);

  return jwt;
};

export default generateJWT;
