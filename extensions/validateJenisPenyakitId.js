import * as Boom from "@hapi/boom";

import supabaseClient from "../utils/supabaseClient.js";

const validateJenisPenyakitId = async (request, h) => {
  const { jenisPenyakitId } = request.params;

  const result = await supabaseClient
    .from("jenis_penyakit")
    .select("*", { count: "exact", head: true })
    .eq("id", jenisPenyakitId);

  if (result.error) {
    throw new Boom.internal(result.error);
  }
  if (result.count === 0) {
    throw new Boom.notFound("jenis penyakit tidak ditemukan");
  }

  return h.continue;
};

export default validateJenisPenyakitId;
