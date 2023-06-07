import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';

const updateKebutuhanMedis = async (request, h) => {
  const kebutuhanId = request.params.kebutuhanId;

  const updatedKebutuhan = {
    nama: request.payload.nama,
    deskripsi: request.payload.deskripsi,
  };

  const updateKebutuhan = await supabaseClient
    .from('kebutuhan_medis')
    .update(updatedKebutuhan)
    .eq('id', kebutuhanId);

  if (updateKebutuhan.error) {
    throw new Boom.internal(updateKebutuhan.error);
  }

  return h
    .response({
      message: 'update success',
      data: updatedKebutuhan.data,
    })
    .code(201);
};

export default updateKebutuhanMedis;
