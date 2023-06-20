import * as Boom from "@hapi/boom";
import supabaseClient from "../../../utils/supabaseClient.js";

const createJenisPenyakit = async (request, h) => {
  const data = {
    nama: request.payload.nama,
  };

  const result = await supabaseClient.from("jenis_penyakit").insert(data);

  if (result.error) {
    throw Boom.badData(result.error);
  }

  return h.response({ message: "new item created" }).code(201);
};

export default createJenisPenyakit;
