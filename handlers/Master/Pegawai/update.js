import * as Boom from '@hapi/boom';
import supabaseClient from '../../../utils/supabaseClient.js';

const updatePegawai = async (request, h) => {
  const pegawaiId = request.params.pegawaiId;
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

  const updatePegawai = await supabaseClient
    .from('pegawai')
    .update(data)
    .eq('id', pegawaiId);

  if (updatePegawai.error) {
    throw Boom.internal(updatePegawai);
  }

  return h
    .response({
      message: 'update success',
      data: updatePegawai.data,
    })
    .code(201);
};

export default updatePegawai;
