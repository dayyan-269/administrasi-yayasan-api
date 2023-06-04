// Handlers
import listBarangAnakAsuhan from '../handlers/Master/BarangAnakAsuhan/list.js';
import findBarangAnakAsuhan from '../handlers/Master/BarangAnakAsuhan/find.js';
import createBarangAnakAsuhan from '../handlers/Master/BarangAnakAsuhan/create.js';
import updateBarangAnakAsuhan from '../handlers/Master/BarangAnakAsuhan/update.js';
import deleteBarangAnakAsuhan from '../handlers/Master/BarangAnakAsuhan/delete.js';

// Schemas
import BarangAnakAsuhanSchema from '../Schemas/BarangAnakAsuhanSchema.js';

// Extensions
import validateBarangAnakAsuhanId from '../extensions/validateBarangAnakAsuhanId.js';
import findBarangAnakAsuhanByNama from '../handlers/Master/BarangAnakAsuhan/findByNama.js';

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
    options: {
      ext: {
        onPreHandler: { method: validateBarangAnakAsuhanId },
      },
    },
  },
  {
    method: 'GET',
    path: '/barang-anak/search/{nama?}',
    handler: findBarangAnakAsuhanByNama,
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
      ext: {
        onPreHandler: { method: validateBarangAnakAsuhanId },
      },
    },
  },
  {
    method: 'DELETE',
    path: '/barang-anak/{barangId}',
    handler: deleteBarangAnakAsuhan,
    options: {
      ext: {
        onPreHandler: { method: validateBarangAnakAsuhanId },
      },
    },
  },
];

export default BarangAnakAsuhanRoutes;
