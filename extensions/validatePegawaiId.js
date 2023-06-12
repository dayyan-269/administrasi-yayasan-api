import * as Boom from '@hapi/boom';
import supabaseClient from '../utils/supabaseClient.js';

const validatePegawaiId = async (request, h) => {
  const { pegawaiId } = request.params;

  const validatePegawaiId = await supabaseClient
    .from('pegawai')
    .select('*', { count: 'exact', head: true })
    .eq('id', pegawaiId);

  if (validatePegawaiId.error) {
    return Boom.internal(validatePegawaiId.error);
  }

  if (validatePegawaiId.count === 0) {
    return Boom.notFound('pegawai tidak ditemukan');
  }

  return h.continue;
};

export default validatePegawaiId;
