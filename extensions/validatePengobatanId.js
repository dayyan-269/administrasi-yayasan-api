import * as Boom from '@hapi/boom';
import supabaseClient from '../utils/supabaseClient.js';

const validatePengobatanId = async (request, h) => {
  const { pengobatanId } = request.params;

  const validatePengobatanId = await supabaseClient
    .from('pengobatan')
    .select('*', { count: 'exact', head: true })
    .eq('id', pengobatanId);

  if (validatePengobatanId.error) {
    return Boom.internal(validatePengobatanId.error);
  }

  if (validatePengobatanId.count === 0) {
    return Boom.notFound('pengobatan tidak ditemukan');
  }

  return h.continue;
};

export default validatePengobatanId;
