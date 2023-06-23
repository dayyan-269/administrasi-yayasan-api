import * as Hapi from '@hapi/hapi';
import * as Jwt from '@hapi/jwt';
import * as dotenv from 'dotenv';

import JWTPlugin from './plugins/JWTPlugin.js';
import routes from './routes.js';

dotenv.config();

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 10000,
    host: process.env.HOST || 'localhost',
    routes: {
      cors: true,
    },
  });

  await server.register(Jwt);

  server.auth.strategy('jwt_auth', 'jwt', JWTPlugin);
  //server.auth.default('jwt_auth');

  server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
