import * as Boom from "@hapi/boom";

import supabaseClient from "../../../utils/supabaseClient.js";

const findJenisPenyakitById = async (request, h) => {
  const jenisPenyakitId = request.params.jenisPenyakitId;

  const result = await supabaseClient
    .from("jenis_penyakit")
    .select()
    .eq("id", jenisPenyakitId)
    .limit(1)
    .single();

  if (result.error) {
    throw new Boom.internal(result.error.message);
  }

  return h
    .response({
      message: "find success",
      data: result.data,
    })
    .code(200);
};

export default findJenisPenyakitById;
