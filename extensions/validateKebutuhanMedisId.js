import * as Boom from '@hapi/boom';

import supabaseClient from '../utils/supabaseClient.js';

const validateKebutuhanMedisId = async (request, h) => {
  const { kebutuhanId } = request.params;

  const validateKebutuhanMedisId = await supabaseClient
    .from('kebutuhan_medis')
    .select('*', { count: 'exact', head: true })
    .eq('id', kebutuhanId);

  if (validateKebutuhanMedisId.error) {
    return new Boom.internal(validateKebutuhanMedisId.error);
  }

  if (validateKebutuhanMedisId.count === 0) {
    return new Boom.notFound('Kebutuhan medis tidak ditemukan');
  }

  return h.continue;
};

export default validateKebutuhanMedisId;
