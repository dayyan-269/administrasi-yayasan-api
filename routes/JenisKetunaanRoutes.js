//Handler
import listJenisKetunaan from '../handlers/Master/JenisKetunaan/list.js';
import createJenisKetunaan from '../handlers/Master/JenisKetunaan/create.js';
import deleteJenisKetunaan from '../handlers/Master/JenisKetunaan/delete.js';
import updateJenisKetunaan from '../handlers/Master/JenisKetunaan/update.js';

//Schema
import JenisKetunaanSchema from '../schemas/JenisKetunaanSchema.js';

//Extensions
import validateJenisKetunaanId from '../extensions/validateJenisKetunaanId.js';
import findJenisKetunaanById from '../handlers/Master/JenisKetunaan/findById.js';
import findJenisKetunaanByNama from '../handlers/Master/JenisKetunaan/findByNama.js';

const JenisKetunaanRoutes = [
  {
    method: 'GET',
    path: '/jenis-ketunaan',
    handler: listJenisKetunaan,
  },
  {
    method: 'GET',
    path: '/jenis-ketunaan/{jenisId}',
    handler: findJenisKetunaanById,
    options: {
      ext: {
        onPreHandler: { method: validateJenisKetunaanId },
      },
    },
  },
  {
    method: 'GET',
    path: '/jenis-ketunaan/search/{nama?}',
    handler: findJenisKetunaanByNama,
  },
  {
    method: 'POST',
    path: '/jenis-ketunaan',
    handler: createJenisKetunaan,
    options: {
      validate: {
        payload: JenisKetunaanSchema,
      },
    },
  },
  {
    method: 'PUT',
    path: '/jenis-ketunaan/{jenisId}',
    handler: updateJenisKetunaan,
    options: {
      validate: {
        payload: JenisKetunaanSchema,
      },
      ext: {
        onPreHandler: { method: validateJenisKetunaanId },
      },
    },
  },
  {
    method: 'DELETE',
    path: '/jenis-ketunaan/{jenisId}',
    handler: deleteJenisKetunaan,
    options: {
      ext: {
        onPreHandler: { method: validateJenisKetunaanId },
      },
    },
  },
];

export default JenisKetunaanRoutes;
