import * as Boom from '@hapi/boom';
import supabaseClient from '../utils/supabaseClient.js';

const validatePegawaiId = async (request, h) => {
  const { observasiId } = request.params;

  const result = await supabaseClient
    .from('observasi')
    .select('*', { count: 'exact', head: true })
    .eq('id', observasiId);
console.log(result);
  if (result.error) {
    throw new Boom.internal(result.error.message);
  }

  if (result.count === 0) {
    throw new Boom.notFound('observasi tidak ditemukan');
   }
    
return h.continue;
};

export default validatePegawaiId;
