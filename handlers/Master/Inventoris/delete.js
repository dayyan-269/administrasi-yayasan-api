import supabaseClient from '../../../utils/supabaseClient.js';
import * as Boom from '@hapi/boom';

const deleteInventoris = async (request, h) => {
  const inventorisId = request.params.inventorisId;

  const deleteInventoris = await supabaseClient
    .from('inventoris')
    .delete()
    .eq('id,', inventorisId);

  if (deleteInventoris.error) {
    throw Boom.internal(deleteInventoris.error);
  }

  return h.response({ message: 'barang berhasi dihapus' });
};

export default deleteInventoris;
