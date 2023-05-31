import * as Hapi from '@hapi/hapi'
import * as dotenv from 'dotenv'

import routes from './routes.js'

dotenv.config()

const init = async () => {

    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost'
    });

    server.route(routes)

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();