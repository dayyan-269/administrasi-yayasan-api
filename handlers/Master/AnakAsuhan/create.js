import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';

const createAnakAsuhan = async (request, h) => {
  const data = {
    nama: request.payload.nama,
    tanggal_lahir: request.payload.tanggal_lahir,
    tempat_lahir: request.payload.tempat_lahir,
    asal: request.payload.asal,
    tinggi_badan: request.payload.tinggi_badan,
    berat_badan: request.payload.berat_badan,
    tanggal_masuk: request.payload.tanggal_masuk,
    tanggal_keluar: request.payload.tanggal_keluar,
    jenis_ketunaan_id: request.payload.jenis_ketunaan_id,
    tipe_pembayaran: request.payload.tipe_pembayaran_id,
  };

  const result = await supabaseClient.from('anak_asuhan').insert(data);

  console.log(data, result.error);
  if (result.error) {
    throw new Boom.badData(result.error);
  }

  return h.response({ message: 'new item created' }).code(201);
};

export default createAnakAsuhan;
