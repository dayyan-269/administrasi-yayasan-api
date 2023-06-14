import * as Boom from '@hapi/boom';

import supabaseClient from '../utils/supabaseClient.js';

const validateJenisKetunaanId = async (request, h) => {
  let { jenisId } = request.params;

  const result = await supabaseClient
    .from('jenis_ketunaan')
    .select('*', { count: 'exact', head: true })
    .eq('id', jenisId);

  if (result.error) {
    return Boom.internal(validateJenisKetunaanId.error);
  }

  if (result.count === 0) {
    return Boom.notFound('jenis ketunaan tidak ditemukan');
  }

  return h.continue;
};

export default validateJenisKetunaanId;
