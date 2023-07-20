import * as Boom from '@hapi/boom';
import supabaseClient from '../utils/supabaseClient.js';

const validateAnakAsuhanId = async (request, h) => {
  const { anakAsuhanId } = request.params;

  const validateAnakAsuhanId = await supabaseClient
    .from('anak_asuhan')
    .select('*', { count: 'exact', head: true })
    .eq('id', anakAsuhanId);

  if (validateAnakAsuhanId.error) {
    return Boom.internal(validateAnakAsuhanId.error.message);
  }

  if (validateAnakAsuhanId.count === 0) {
    return Boom.notFound('anak tidak ditemukan');
  }

  return h.continue;
};

export default validateAnakAsuhanId;
