import * as Boom from "@hapi/boom";

import supabaseClient from "../../../utils/supabaseClient.js";

const updateJenisPenyakit = async (request, h) => {
  const jenisPenyakitId = request.params.jenisPenyakitId;

  const updatedJenisPenyakit = {
    nama: request.payload.nama,
  };

  const result = await supabaseClient
    .from("jenis_penyakit")
    .update(updatedJenisPenyakit)
    .eq("id", jenisPenyakitId);

  if (result.error) {
    throw Boom.internal(updateJenisPenyakit);
  }

  return h
    .response({
      message: "update success",
      data: updateJenisPenyakit.data,
    })
    .code(201);
};

export default updateJenisPenyakit;
