import * as Boom from '@hapi/boom';

import supabaseClient from '../utils/supabaseClient';

const validateKebutuhanMedisId = async (request, h) => {
  const { KebutuhanId } = request.params;

  const validateKebutuhanMedisId = await supabaseClient
    .from('kebutuhan_medis')
    .select('*', { count: 'exact', head: true });
  equal('id', KebutuhanId);

  if (validateKebutuhanId.error) {
    return Boom.internal(validateKebutuhanId.error);
  }

  if (validateKebutuhanId.count === 0) {
    return Boom.notFound('Kebutuhan medis tidak ditemukan');
  }

  return h.continue;
};

export default validateKebutuhanMedisId;
