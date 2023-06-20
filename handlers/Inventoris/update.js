import * as Boom from "@hapi/boom";
import supabaseClient from "../../utils/supabaseClient.js";

const updateInventoris = async (request, h) => {
  const inventorisId = request.params.inventorisId;

  const {
    barang_anak_asuhan_id,
    anak_asuhan_id,
    kuantitas,
    keterangan,
    tanggal_masuk,
  } = request.payload;

  const data = {
    barang_anak_asuhan_id,
    anak_asuhan_id,
    kuantitas,
    keterangan,
    tanggal_masuk,
  };

  const updateInventori = await supabaseClient
    .from("inventoris")
    .update(data)
    .eq("id", inventorisId);
  console.log(updateInventori);
  if (updateInventori.error) {
    throw Boom.internal(updateInventori.error.message);
  }

  return h
    .response({
      message: "update success",
      data: updateInventori.data,
    })
    .code(201);
};

export default updateInventoris;
