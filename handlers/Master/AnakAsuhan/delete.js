import supabaseClient from '../../../utils/supabaseClient.js';
import * as Boom from '@hapi/boom';

const deleteAnakAsuhan = async (request, h) => {
  const anakAsuhanId = request.params.anakAsuhanId;

  const AnakAsuhan = await supabaseClient
    .from('anak_asuhan')
    .delete()
    .eq('id', anakAsuhanId);

  if (AnakAsuhan.error) {
    throw new Boom.internal(AnakAsuhan.error);
  }

  return h.response({ message: 'item berhasil dihapus' }).code(200);
};

export default deleteAnakAsuhan;
