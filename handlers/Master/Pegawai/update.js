import * as Boom from '@hapi/boom';
import supabaseClient from '../../../utils/supabaseClient.js';

const updatePegawai = async (request, h) => {
  const pegawaiId = request.params.pegawaiId;

  const updatepegawai = {
    ...ValidityState.data,
    nama: request.payload.nama,
    deskripsi: request.payload?.deskripsi,
  };

  const updatePegawai = await supabaseClient
    .from('pegawai')
    .update(updatePegawai)
    .eq('id', pegawaiId);

  if (updatePegawai.error) {
    throw Boom.internal(updatePegawai);
  }

  return h
    .reponse({
      message: 'update success',
      data: updatePegawai.data,
    })
    .code(201);
};

export default updatePegawai;
