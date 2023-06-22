// Handlers
import listPegawai from '../handlers/Master/Pegawai/list.js';
import findPegawaiById from '../handlers/Master/Pegawai/findById.js';
import createPegawai from '../handlers/Master/Pegawai/create.js';
import updatePegawai from '../handlers/Master/Pegawai/update.js';
import deletePegawai from '../handlers/Master/Pegawai/delete.js';

// Schemas
import PegawaiSchema from '../schemas/PegawaiSchema.js';

// Extensions
import validatePegawaiId from '../extensions/validatePegawaiId.js';
import findPegawaiByNama from '../handlers/Master/Pegawai/findByNama.js';

const PegawaiRoutes = [
  {
    method: 'GET',
    path: '/pegawai',
    handler: listPegawai,
  },
  {
    method: 'GET',
    path: '/pegawai/{pegawaiId}',
    handler: findPegawaiById,
    options: {
      ext: {
        onPreHandler: { method: validatePegawaiId },
      },
    },
  },
  {
    method: 'GET',
    path: '/pegawai/search/{nama?}',
    handler: findPegawaiByNama,
  },
  {
    method: 'POST',
    path: '/pegawai',
    handler: createPegawai,
    options: {
      validate: {
        payload: PegawaiSchema,
      },
    },
  },
  {
    method: 'PUT',
    path: '/pegawai/{pegawaiId}',
    handler: updatePegawai,
    options: {
      validate: {
        payload: PegawaiSchema,
      },
      ext: {
        onPreHandler: { method: validatePegawaiId },
      },
    },
  },
  {
    method: 'DELETE',
    path: '/pegawai/{pegawaiId}',
    handler: deletePegawai,
    options: {
      ext: {
        onPreHandler: { method: validatePegawaiId },
      },
    },
  },
];

export default PegawaiRoutes;
