import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';

const createAnakAsuhan = async (request, h) => {
  const data = {
    nama: request.payload.nama,
    tanggal_lahir: request.payload.tanggalLahir,
    tempat_lahir: request.payload.tempatLahir,
    daerah_asal: request.payload.daerahAsal,
    tinggi_badan: request.payload.tinggiBadan,
    berat_badan: request.payload.beratBadan,
    tanggal_masuk: request.payload.tanggalMasuk,
    tanggal_keluar: request.payload.tanggalKeluar,
    jenis_ketunaan: request.payload.jenisKetunaan,
    tipe_pembayaran_id: request.payload.tipePembayaran,
  };

  const result = await supabaseClient.from('anak_asuhan').insert(data);

  if (result.error) {
    console.log(result.error);
    throw new Boom.badData(result.error);
  }

  return h.response({ message: 'new item created' }).code(201);
};

export default createAnakAsuhan;
