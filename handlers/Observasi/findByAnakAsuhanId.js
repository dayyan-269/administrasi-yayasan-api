import * as Boom from '@hapi/boom';

import supabaseClient from '../../utils/supabaseClient.js';

const findObservasiByAnakAsuhanId = async (request, h) => {
  const { anakAsuhanId } = request.params;

  const result = await supabaseClient
    .from('observasi')
    .select('*, anak_asuhan!inner(nama)')
    .eq('anak_asuhan.id', anakAsuhanId);

  if (result.error) {
    throw new Boom.internal(result.error);
  }

  return h
    .response({
      message: 'find success',
      data: result.data,
    })
    .code(200);
};

export default findObservasiByAnakAsuhanId;
