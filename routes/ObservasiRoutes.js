import createObservasi from "../handlers/Observasi/create.js";
import listObservasi from "../handlers/Observasi/list.js";
import findObservasiById from "../handlers/Observasi/findById.js";
import deleteObservasi from "../handlers/Observasi/delete.js";
import findObservasiByNama from "../handlers/Observasi/findByNama.js";
import updateObservasi from "../handlers/Observasi/update.js";

import validateobservasiId from "../extensions/validateObservasiId.js";

import ObservasiSchema from "../Schemas/ObservasiSchema.js"

const ObservasiRoutes = [
  {
    method: 'GET',
    path: '/observasi',
    handler: listObservasi,
  },
  {
    method: 'POST',
    path: '/observasi',
    handler: createObservasi,
    options: {
      validate: {
        payload: ObservasiSchema,
      },
    },
  },
  {
    method: 'GET',
    path: '/observasi/{observasiId}',
    handler: findObservasiById,
    options: {
      ext: {
        onPreHandler: { method: validateobservasiId }
        
    },
  },
},
{
  method: 'DELETE',
  path: '/observasi/{observasiId}',
  handler: deleteObservasi,
  options: {
    ext: {
      onPreHandler: { method: validateobservasiId },
    },
  },
},
{
  method: 'GET',
  path:'/observasi/search/{nama?}',
  handler: findObservasiByNama,
},
{
  method: 'PUT',
  path: '/observasi/{observasiId}',
  handler: updateObservasi,
  options: {
    validate: {
      payload: ObservasiSchema,
    },
    ext: {
      onPreHandler: { method: validateobservasiId },
    },
  },
},
];
export default ObservasiRoutes;
