import * as Boom from '@hapi/boom';
import supabaseClient from '../../utils/supabaseClient.js';

const findInventorisByAnakAsuhanId = async (request, h) => {
  const { anakAsuhanId } = request.params;

  const findInventoris = await supabaseClient
    .from('inventoris')
    .select('*, barang_anak_asuhan(nama), anak_asuhan(nama)')
    .eq('anak_asuhan.id', anakAsuhanId);

  if (findInventoris.error) {
    throw new Boom.internal(findInventoris.error);
  }

  return h
    .response({
      message: 'find success',
      data: findInventoris.data,
    })
    .code(200);
};

export default findInventorisByAnakAsuhanId;
