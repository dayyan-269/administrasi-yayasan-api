// Handlers
import createJenisPenyakit from "../handlers/Master/JenisPenyakit/create.js";
import deleteJenisPenyakit from "../handlers/Master/JenisPenyakit/delete.js";
import listJenisPenyakit from "../handlers/Master/JenisPenyakit/list.js";

// Schemas
import JenisPenyakitSchema from "../schemas/JenisPenyakitSchema.js";

// Extensions
import validateJenisPenyakitId from "../extensions/validateJenisPenyakitId.js";
import findJenisPenyakitbyNama from "../handlers/Master/JenisPenyakit/findbyNama.js";
import findJenisPenyakitById from "../handlers/Master/JenisPenyakit/findById.js";
import updateJenisPenyakit from "../handlers/Master/JenisPenyakit/update.js";

const JenisPenyakitRoutes = [
  {
    method: "POST",
    path: "/jenis-penyakit",
    handler: createJenisPenyakit,
    options: {
      validate: {
        payload: JenisPenyakitSchema,
      },
    },
  },
  {
    method: "DELETE",
    path: "/jenis-penyakit/{jenisPenyakitId}",
    handler: deleteJenisPenyakit,
    options: {
      ext: {
        onPreHandler: { method: validateJenisPenyakitId },
      },
    },
  },
  {
    method: "GET",
    path: "/jenis-penyakit",
    handler: listJenisPenyakit,
  },
  {
    method: "GET",
    path: "/jenis-penyakit/search/{nama?}",
    handler: findJenisPenyakitbyNama,
  },
  {
    method: "GET",
    path: "/jenis-penyakit/{jenisPenyakitId}",
    handler: findJenisPenyakitById,
    options: {
      ext: {
        onPreHandler: { method: validateJenisPenyakitId },
      },
    },
  },
  {
    method: "PUT",
    path: "/jenis-penyakit/{jenisPenyakitId}",
    handler: updateJenisPenyakit,
    options: {
      validate: {
        payload: JenisPenyakitSchema,
      },
      ext: {
        onPreHandler: { method: validateJenisPenyakitId },
      },
    },
  },
];

export default JenisPenyakitRoutes;
