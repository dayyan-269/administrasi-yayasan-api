import generateJWT from '../handlers/Auth/generateJWT.js';

const AuthRoutes = [
  {
    method: 'GET',
    path: '/auth',
    handler: generateJWT,
    options: {
      auth: false,
    },
  },
];

export default AuthRoutes;
