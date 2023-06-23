import * as Boom from '@hapi/boom';

import supabaseClient from '../../utils/supabaseClient.js';
import generateJWT from '../../utils/generateJWT.js';

const login = async (request, h) => {
  const credential = {
    email: request.payload.email,
    password: request.payload.password,
  };

  const loginUser = await supabaseClient.auth.signInWithPassword(credential);

  if (loginUser.error) {
    throw new Boom.badData(loginUser.error.message);
  }

  const jwt = await generateJWT();
  h.state('token', jwt);

  return h
    .response({
      message: 'login success',
      data: { jwt },
    })
    .code(201);
};

export default login;
