import * as Boom from '@hapi/boom';

import supabaseClient from '../../utils/supabaseClient.js';

const updateObservasi = async (request, h) => {
  const observasiId = request.params.observasiId;
  const { anak_asuhan_id, jenis_perilaku, tanggal, penanganan } =
    request.payload;

  const updatedObservasi = {
    anak_asuhan_id,
    jenis_perilaku,
    tanggal,
    penanganan,
  };

  const updateObservasi = await supabaseClient
    .from('observasi')
    .update(updatedObservasi)
    .eq('id', observasiId);
    console.log(updateObservasi);
  if (updatedObservasi.error) {
    throw Boom.internal(updateObservasi);
  }

  return h
    .response({
      message: 'update success',
      data: updateObservasi.data,
    })
    .code(201);
};

export default updateObservasi;
