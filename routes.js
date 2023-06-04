import AuthRoutes from './routes/AuthRoutes.js';
import BarangAnakAsuhanRoutes from './routes/BarangAnakAsuhanRoutes.js';

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
routes = routes.concat(BarangAnakAsuhanRoutes, AuthRoutes);

export default routes;
