import * as Boom from '@hapi/boom';
import supabaseClient from '../utils/supabaseClient.js';

const validateInventorisId = async (request, h) => {
  const { inventorisId } = request.params;

  const validateInventorisId = await supabaseClient
    .from('inventoris')
    .select('*', { count: 'exact', head: true })
    .eq('id', inventorisId);

  if (validateInventorisId.error) {
    return Boom.internal(validateInventorisId.error.message);
  }

  if (validateInventorisId.count === 0) {
    return Boom.notFound('inventoris tidak ditemukan');
  }

  return h.continue;
};

export default validateInventorisId;
