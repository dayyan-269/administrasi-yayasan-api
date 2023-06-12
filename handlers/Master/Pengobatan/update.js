import * as Boom from '@hapi/boom';
import supabaseClient from '../../../utils/supabaseClient.js';

const updatePengobatan = async (request, h) => {
  const pengobatanId = request.params.pengobatanId;

  const updatedPengobatan = {
    ...validateId.data,
    nama: request.payload.nama,
    deskripsi: request.payload?.deskripsi,
  };

  const updatePengobatan = await supabaseClient
    .from('pengobatan')
    .update(updatedPengobatan)
    .eq('id', pengobatanId);

  if (updatePengobatan.error) {
    throw Boom.internal(updatePengobatan);
  }

  return h
    .response({
      message: 'update success',
      data: updatePengobatan.data,
    })
    .code(201);
};

export default updatePengobatan;
