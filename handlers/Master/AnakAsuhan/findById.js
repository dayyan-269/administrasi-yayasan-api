import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';

const findPembayaranById = async (request, h) => {
  const pembayaranId = request.params.pembayaranId;

  const findPembayaran = await supabaseClient
    .from('tipe_pembayaran')
    .select()
    .eq('id', pembayaranId)
    .limit(1)
    .single();

  if (findPembayaran.error) {
    throw new Boom.internal(findPembayaran.error);
  }

  return h
    .response({
      message: 'find success',
      data: findPembayaran.data,
    })
    .code(200);
};

export default findPembayaranById;
