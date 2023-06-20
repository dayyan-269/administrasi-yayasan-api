import supabaseClient from '../../utils/supabaseClient.js';
import * as Boom from '@hapi/boom';

const deleteObservasi = async (request, h) => {
  const observasiId = request.params.observasiId;

  const deleteObservasi = await supabaseClient
    .from('observasi')
    .delete()
    .eq('id', observasiId);
console.log(deleteObservasi);
  if (deleteObservasi.error) {
    throw Boom.internal(deleteObservasi.error);
  }

  return h.response({ message: 'Id berhasil dihapus' }).code(200);

}

export default deleteObservasi;