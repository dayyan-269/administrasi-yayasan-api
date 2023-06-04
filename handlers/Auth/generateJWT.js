import * as dotenv from 'dotenv';
import * as Boom from '@hapi/boom';
import JWT from 'jsonwebtoken';

import getJWTFormat from '../../utils/getJWTFormat.js';

dotenv.config();

const generateJWT = async (request, h) => {
  const secret = process.env.SECRET || 'some_shared_secret';
  const token = getJWTFormat();

  const jwt = JWT.sign(token, secret);

  return h
    .response({
      message: 'jwt successfully generated',
      data: { jwt },
    })
    .code(200);
};

export default generateJWT;
