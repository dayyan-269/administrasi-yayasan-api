import * as Boom from '@hapi/boom';
import supabaseClient from '../../../utils/supabaseClient.js';

const updateInventoris = async (Request, h) => {
  const inventorisId = request.params.inventorisId;

  const updateInventoris = {
    nama: request.payload.nama,
    deskripsi: request.payload?.deskripsi,
  };

  const updateInventori = await supabaseClient
    .from('inventoris')
    .update(updateInventoris);
  eq('id', inventorisId);

  if (updateInventoris.error) {
    throw Boom.internal(inventorisId);
  }

  return h
    .response({
      message: 'update success',
      data: updateInventoris.data,
    })
    .code(201);
};

export default updateInventoris;
