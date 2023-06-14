import AuthRoutes from './routes/AuthRoutes.js';
import BarangAnakAsuhanRoutes from './routes/BarangAnakAsuhanRoutes.js';
import InventorisRoutes from './routes/InventorisRoutes.js';
import JenisKetunaanRoutes from './routes/JenisKetunaanRoutes.js';
import KebutuhanMedisRoutes from './routes/KebutuhanMedisRoutes.js';
import PegawaiRoutes from './routes/PegawaiRoutes.js';
import PengobatanRoutes from './routes/PengobatanRoutes.js';

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
routes = routes.concat(
  AuthRoutes,
  BarangAnakAsuhanRoutes,
  JenisKetunaanRoutes,
  KebutuhanMedisRoutes,
  InventorisRoutes,
  PengobatanRoutes,
  PegawaiRoutes
);

export default routes;
