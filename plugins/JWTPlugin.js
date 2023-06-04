import * as dotenv from 'dotenv';

import getJWTFormat from '../utils/getJWTFormat.js';

dotenv.config();

const JWTPlugin = {
  keys: process.env.SECRET || 'some_shared_secret',
  verify: getJWTFormat(),
  validate: (artifacts, request, h) => {
    return {
      isValid: true,
      credential: {
        user: artifacts.decoded.payload.user,
      },
    };
  },
};

export default JWTPlugin;
