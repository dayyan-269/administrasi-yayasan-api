import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';

const createPegawai = async (request, h) => {
  const {
    nama,
    tempat_lahir,
    tanggal_lahir,
    agama,
    kewarganegaraan,
    tanggal_masuk,
    tanggal_keluar,
  } = request.payload;

  const data = {
    nama,
    tempat_lahir,
    tanggal_lahir,
    agama,
    kewarganegaraan,
    tanggal_masuk,
    tanggal_keluar,
  };

  const result = await supabaseClient.from('pegawai').insert(data);

  if (result.error) {
    throw Boom.badData(result.error);
  }

  return h.response({ message: 'new item created' }).code(201);
};

export default createPegawai;
