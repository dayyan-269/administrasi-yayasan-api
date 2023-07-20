import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';

const listTipePembayaran = async (request, h) => {
  const result = await supabaseClient.from('tipe_pembayaran').select();

  if (result.error) {
    throw Boom.internal(result.error);
  }

  return h
    .response({
      message: 'fetch success',
      data: result.data,
    })
    .code(200);
};

export default listTipePembayaran;
