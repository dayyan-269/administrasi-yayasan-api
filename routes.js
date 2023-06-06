import AuthRoutes from './routes/AuthRoutes.js';
import BarangAnakAsuhanRoutes from './routes/BarangAnakAsuhanRoutes.js';
import JenisKetunaanRoutes from './routes/JenisKetunaanRoutes.js';

let routes = [
  {
    method: 'GET',
    path: '/',
    handler: () => {
      return {
        title: 'Rest API untuk web administrasi yayasan',
      };
    },
    options: {
      auth: false,
    },
  },
];

// Setiap penambahan routes perlu ditambahkan
routes = routes.concat(AuthRoutes, BarangAnakAsuhanRoutes, JenisKetunaanRoutes);

export default routes;
