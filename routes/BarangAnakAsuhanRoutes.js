import listBarangAnakAsuhan from '../handlers/Master/BarangAnakAsuhan/list.js';
import findBarangAnakAsuhan from '../handlers/Master/BarangAnakAsuhan/find.js';
import createBarangAnakAsuhan from '../handlers/Master/BarangAnakAsuhan/create.js';
import updateBarangAnakAsuhan from '../handlers/Master/BarangAnakAsuhan/update.js';
import deleteBarangAnakAsuhan from '../handlers/Master/BarangAnakAsuhan/delete.js';

import BarangAnakAsuhanSchema from '../validators/BarangAnakAsuhanSchema.js';

const BarangAnakAsuhanRoutes = [
  {
    method: 'GET',
    path: '/barang-anak',
    handler: listBarangAnakAsuhan,
  },
  {
    method: 'GET',
    path: '/barang-anak/{barangId}',
    handler: findBarangAnakAsuhan,
  },
  {
    method: 'POST',
    path: '/barang-anak',
    handler: createBarangAnakAsuhan,
    options: {
      validate: {
        payload: BarangAnakAsuhanSchema,
      },
    },
  },
  {
    method: 'PUT',
    path: '/barang-anak/{barangId}',
    handler: updateBarangAnakAsuhan,
    options: {
      validate: {
        payload: BarangAnakAsuhanSchema,
      },
    },
  },
  {
    method: 'DELETE',
    path: '/barang-anak/{barangId}',
    handler: deleteBarangAnakAsuhan,
  },
];

export default BarangAnakAsuhanRoutes;
