// Handlers
import listPengobatan from '../handlers/Master/Pengobatan/list.js';
import findPengobatanById from '../handlers/Master/Pengobatan/findById.js';
import createPengobatan from '../handlers/Master/Pengobatan/create.js';
import updatePengobatan from '../handlers/Master/Pengobatan/update.js';
import deletePengobatan from '../handlers/Master/Pengobatan/delete.js';

// Schemas
import PengobatanSchema from '../schemas/PengobatanSchema.js';

// Exstensions
import validatePengobatanId from '../extensions/validatePengobatanId.js';
import findPengobatanByNama from '../handlers/Master/Pengobatan/findByNama.js';

const PengobatanRoutes = [
  {
    method: 'GET',
    path: '/pengobatan',
    handler: listPengobatan,
  },
  {
    method: 'GET',
    path: '/Pengobatan/{pengobatanId}',
    handler: findPengobatanById,
    options: {
      ext: {
        onPreHandler: { method: validatePengobatanId },
      },
    },
  },
  {
    method: 'GET',
    path: '/pengobatan/search/{nama?}',
    handler: findPengobatanByNama,
  },
  {
    method: 'POST',
    path: '/pengobatan',
    handler: createPengobatan,
    options: {
      validate: {
        payload: PengobatanSchema,
      },
    },
  },
  {
    method: 'PUT',
    path: '/pengobatan/{pengobatanId}',
    handler: updatePengobatan,
    options: {
      validate: {
        payload: PengobatanSchema,
      },
      ext: {
        onPreHandler: { method: validatePengobatanId },
      },
    },
  },
  {
    method: 'DELETE',
    path: '/pengobatan/{pengobatanId}',
    handler: deletePengobatan,
    options: {
      ext: {
        onPreHandler: { method: validatePengobatanId },
      },
    },
  },
];

export default PengobatanRoutes;
