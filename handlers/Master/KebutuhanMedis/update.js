import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';
import { defaults } from 'joi';

const updateKebutuhanMedis = async (request, h) => {
  const kebutuhanId = request.params.kebutuhanId;

  const updateKebutuhan = {
    nama: request.payload.nama,
    deskripsi: request.payload.deskripsi,
  };

  const updatedKebutuhan = await supabaseClient
    .from('kebutuhan_medis')
    .update(updatedKebutuhan)
    .eq('id', kebutuhanId);

  if (updatedKebutuhan.error) {
    throw new Boom.internal(updatedKebutuhan);
  }

  return h
    .response({
      message: 'update success',
      data: updatedKebutuhan.data,
    })
    .code(201);
};

export default updateKebutuhanMedis;
