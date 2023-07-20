import * as Boom from '@hapi/boom';

import supabaseClient from '../utils/supabaseClient.js';

const validateTipePembayaranId = async (request, h) => {
  const { pembayaranId } = request.params;

  const result = await supabaseClient
    .from('tipe_pembayaran')
    .select('*', { count: 'exact', head: true })
    .eq('id', pembayaranId);

  if (result.error) {
    return new Boom.internal(result.error);
  }

  if (result.count === 0) {
    return new Boom.notFound('tipe pembayaran tidak ditemukan');
  }

  return h.continue;
};

export default validateTipePembayaranId;
