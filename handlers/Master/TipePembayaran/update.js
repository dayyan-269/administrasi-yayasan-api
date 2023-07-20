import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';

const updateTipePembayaran = async (request, h) => {
  const pembayaranId = request.params.pembayaranId;

  const tipePembayaran = {
    nama: request.payload.nama,
  };

  const result = await supabaseClient
    .from('tipe_pembayaran')
    .update(tipePembayaran)
    .eq('id', pembayaranId);

  if (result.error) {
    throw new Boom.internal(result.error);
  }

  return h
    .response({
      message: 'update success',
      data: tipePembayaran.data,
    })
    .code(201);
};

export default updateTipePembayaran;
