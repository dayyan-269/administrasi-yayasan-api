// Handlers
import listInventoris from '../handlers/Inventoris/list.js';
import findInventorisById from '../handlers/Inventoris/findById.js';
import createInventoris from '../handlers/Inventoris/create.js';
import findInventorisByNama from '../handlers/Inventoris/findByNama.js';
import updateInventoris from '../handlers/Inventoris/update.js';
import deleteInventoris from '../handlers/Inventoris/delete.js';

// Schemas
import InventorisSchema from '../schemas/InventorisSchema.js';

// Extensions
import validateInventorisId from '../extensions/validateInventorisId.js';

const InventorisRoutes = [
  {
    method: 'GET',
    path: '/inventoris',
    handler: listInventoris,
  },
  {
    method: 'GET',
    path: '/inventoris/{inventorisId}',
    handler: findInventorisById,
    options: {
      ext: {
        onPreHandler: { method: validateInventorisId },
      },
    },
  },
  {
    method: 'GET',
    path: '/inventoris/search/{nama?}',
    handler: findInventorisByNama,
  },
  {
    method: 'POST',
    path: '/inventoris',
    handler: createInventoris,
    options: {
      validate: {
        payload: InventorisSchema,
      },
    },
  },
  {
    method: 'PUT',
    path: '/inventoris/{inventorisId}',
    handler: updateInventoris,
    options: {
      validate: {
        payload: InventorisSchema,
      },
      ext: {
        onPreHandler: { method: validateInventorisId },
      },
    },
  },
  {
    method: 'DELETE',
    path: '/inventoris/{inventorisId}',
    handler: deleteInventoris,
    options: {
      ext: {
        onPreHandler: { method: validateInventorisId },
      },
    },
  },
];

export default InventorisRoutes;
