// Handlers
import listInventoris from '../handlers/Master/Inventoris/list.js';
import findInventorisById from '../handlers/Master/Inventoris/findById.js';
import createInventoris from '../handlers/Master/Inventoris/create.js';
import updateInventoris from '../handlers/Master/Inventoris/update.js';
import deleteInventoris from '../handlers/Master/Inventoris/delete.js';

// Schemas
import InventorisSchema from '../Schemas/InventorisSchema.js';

// Extensions
import validateInventorisId from '../extensions/validateInventorisId.js';
import findInventorisByNama from '../handlers/Master/Inventoris/findByNama.js';

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
    option: {
      ext: {
        onPreHandler: { method: validateInventorisId },
      },
    },
  },
  {
    method: 'POST',
    path: '/inventoris',
    handler: createInventoris,
    option: {
      validate: {
        payload: InventorisSchema,
      },
    },
  },
  {
    method: 'PUT',
    path: '/inventoris/{inventorisId}',
    handler: updateInventoris,
    option: {
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
    option: {
      ext: {
        onPreHandler: { method: validateInventorisId },
      },
    },
  },
];

export default InventorisRoutes;
