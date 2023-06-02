import BarangAnakAsuhanRoutes from './routes/BarangAnakAsuhanRoutes.js';

let routes = [
  {
    method: 'GET',
    path: '/',
    handler: () => {
      return 'Rest API untuk web administrasi yayasan';
    },
  },
];

// Setiap penambahan routes perlu ditambahkan
routes = routes.concat(BarangAnakAsuhanRoutes);

export default routes;