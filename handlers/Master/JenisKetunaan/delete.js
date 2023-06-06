import supabaseClient from '../../../utils/supabaseClient.js';
import * as Boom from '@hapi/boom';

const deleteJenisKetunaan = async (request, h) => {
  const jenisId = request.params.jenisId;

  const deleteJenis = await supabaseClient
    .from('jenis_ketunaan')
    .delete()
    .eq('id', jenisId);

  if (deleteJenis.error) {
    throw Boom.internal(deleteJenis.error);
  }

  return h.response({ message: 'jenis berhasil dihapus' }).code(200);

}

export default deleteJenisKetunaan;