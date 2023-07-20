import createAnakAsuhan from '../handlers/Master/AnakAsuhan/create.js';
import listAnakAsuhan from '../handlers/Master/AnakAsuhan/list.js';
import findAnakAsuhan from '../handlers/Master/AnakAsuhan/findById.js';
import updateAnakAsuhan from '../handlers/Master/AnakAsuhan/update.js';
import deleteAnakAsuhan from '../handlers/Master/AnakAsuhan/delete.js';

import validateAnakAsuhanId from '../extensions/validateAnakAsuhanId.js';

import AnakAsuhanSchema from '../schemas/AnakAsuhanSchema.js';

const AnakAsuhanRoutes = [
  {
    method: 'GET',
    path: '/anak-asuhan',
    handler: listAnakAsuhan,
  },
  {
    method: 'POST',
    path: '/anak-asuhan',
    handler: createAnakAsuhan,
    options: {
      validate: {
        payload: AnakAsuhanSchema,
      },
    },
  },
  {
    method: 'GET',
    path: '/anak-asuhan/{anakAsuhanId}',
    handler: findAnakAsuhan,
    options: {
      ext: {
        onPreHandler: {
          method: validateAnakAsuhanId,
        },
      },
    },
  },
  {
    method: 'PUT',
    path: '/anak-asuhan/{anakAsuhanId}',
    handler: updateAnakAsuhan,
    options: {
      validate: {
        payload: AnakAsuhanSchema,
      },
      ext: {
        onPreHandler: {
          method: validateAnakAsuhanId,
        },
      },
    },
  },
  {
    method: 'DELETE',
    path: '/anak-asuhan/{anakAsuhanId}',
    handler: deleteAnakAsuhan,
    options: {
      ext: {
        onPreHandler: {
          method: validateAnakAsuhanId,
        },
      },
    },
  },
];

export default AnakAsuhanRoutes;
