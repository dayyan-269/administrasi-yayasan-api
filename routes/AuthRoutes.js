import generateJWT from '../handlers/Auth/generateJWT.js';
import login from '../handlers/Auth/login.js';
import logout from '../handlers/Auth/logout.js';

const AuthRoutes = [
  {
    method: 'GET',
    path: '/auth/generate-token',
    handler: generateJWT,
    options: {
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/auth/login',
    handler: login,
    options: {
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/auth/logout',
    handler: logout,
    options: {
      auth: false,
    },
  },
];

export default AuthRoutes;
