// handlers
import listKebutuhanMedis from '../handlers/Master/KebutuhanMedis/list.js';
import findKebutuhanMedisById from '../handlers/Master/KebutuhanMedis/findById.js';
import createKebutuhanMedis from '../handlers/Master/KebutuhanMedis/create.js';
import updateKebutuhanMedis from '../handlers/Master/KebutuhanMedis/update.js';
import deleteKebutuhanMedis from '../handlers/Master/KebutuhanMedis/delete.js';

// Schemas
import KebutuhanMedisSchema from '../Schemas/KebutuhanMedisSchema.js';

// Extension
import validateKebutuhanMedisId from '../extensions/validateKebutuhanMedisId.js';
import findKebutuhanMedisByNama from '../handlers/Master/KebutuhanMedis/findByNama.js';

const KebutuhanMedisRoutes = [
  {
    method: 'GET',
    path: '/kebutuhan-medis',
    handler: listKebutuhanMedis,
  },
  {
    method: 'GET',
    path: '/kebutuhan-medis/{kebutuhanId}',
    handler: findKebutuhanMedisById,
    options: {
      ext: {
        onPreHandler: { method: validateKebutuhanMedisId },
      },
    },
  },
  {
    method: 'GET',
    path: '/kebutuhan-medis/search/{nama?}',
    handler: findKebutuhanMedisByNama,
  },
  {
    method: 'POST',
    path: '/kebutuhan-medis',
    handler: createKebutuhanMedis,
    options: {
      validate: {
        payload: KebutuhanMedisSchema,
      },
    },
  },
  {
    method: 'PUT',
    path: '/kebutuhan-medis/{kebutuhanId}',
    handler: updateKebutuhanMedis,
    options: {
      validate: {
        payload: KebutuhanMedisSchema,
      },
      ext: {
        onPreHandler: { method: validateKebutuhanMedisId },
      },
    },
  },
  {
    method: 'DELETE',
    path: '/kebutuhan-medis/{kebutuhanId}',
    handler: deleteKebutuhanMedis,
    options: {
      ext: {
        onPreHandler: { method: validateKebutuhanMedisId },
      },
    },
  },
];

export default KebutuhanMedisRoutes;
