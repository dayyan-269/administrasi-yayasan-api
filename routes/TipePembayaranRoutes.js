import createTipePembayaran from '../handlers/Master/TipePembayaran/create.js';
import listTipePembayaran from '../handlers/Master/TipePembayaran/list.js';
import findTipePembayaran from '../handlers/Master/TipePembayaran/findById.js';
import updateTipePembayaran from '../handlers/Master/TipePembayaran/update.js';
import deleteTipePembayaran from '../handlers/Master/TipePembayaran/delete.js';

import validateTipePembayaranId from '../extensions/validateTipePembayaranId.js';

import TipePembayaran from '../schemas/TipePembayaranSchema.js';

const TipePembayaranRoutes = [
  {
    method: 'GET',
    path: '/tipe-pembayaran',
    handler: listTipePembayaran,
  },
  {
    method: 'POST',
    path: '/tipe-pembayaran',
    handler: createTipePembayaran,
    options: {
      validate: {
        payload: TipePembayaran,
      },
    },
  },
  {
    method: 'GET',
    path: '/tipe-pembayaran/{pembayaranId}',
    handler: findTipePembayaran,
    options: {
      ext: {
        onPreHandler: {
          method: validateTipePembayaranId,
        },
      },
    },
  },
  {
    method: 'PUT',
    path: '/tipe-pembayaran/{pembayaranId}',
    handler: updateTipePembayaran,
    options: {
      validate: {
        payload: TipePembayaran,
      },
      ext: {
        onPreHandler: {
          method: validateTipePembayaranId,
        },
      },
    },
  },
  {
    method: 'DELETE',
    path: '/tipe-pembayaran/{pembayaranId}',
    handler: deleteTipePembayaran,
    options: {
      ext: {
        onPreHandler: {
          method: validateTipePembayaranId,
        },
      },
    },
  },
];

export default TipePembayaranRoutes;
