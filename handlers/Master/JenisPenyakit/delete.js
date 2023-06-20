import supabaseClient from "../../../utils/supabaseClient.js";
import * as Boom from "@hapi/boom";

const deleteJenisPenyakit = async (request, h) => {
  const jenisPenyakitId = request.params.jenisPenyakitId;

  const deleteJenisPenyakit = await supabaseClient
    .from("jenis_penyakit")
    .delete()
    .eq("id", jenisPenyakitId);

  if (deleteJenisPenyakit.error) {
    throw Boom.internal(deleteJenisPenyakit.error);
  }

  return h.response({ message: "jenis penyakit berhasil dihapus" }).code(200);
};

export default deleteJenisPenyakit;
