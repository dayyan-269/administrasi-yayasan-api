// Handlers
import listPengobatan from '../handlers/Pengobatan/list.js';
import findPengobatanById from '../handlers/Pengobatan/findById.js';
import createPengobatan from '../handlers/Pengobatan/create.js';
import updatePengobatan from '../handlers/Pengobatan/update.js';
import deletePengobatan from '../handlers/Pengobatan/delete.js';

// Schemas
import PengobatanSchema from '../schemas/PengobatanSchema.js';

// Exstensions
import validatePengobatanId from '../extensions/validatePengobatanId.js';
import findPengobatanByNama from '../handlers/Pengobatan/findByNama.js';

const PengobatanRoutes = [
  {
    method: 'GET',
    path: '/pengobatan',
    handler: listPengobatan,
  },
  {
    method: 'GET',
    path: '/pengobatan/{pengobatanId}',
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
