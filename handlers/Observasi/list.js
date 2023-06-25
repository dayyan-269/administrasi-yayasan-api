import * as Boom from '@hapi/boom';

import supabaseClient from '../../utils/supabaseClient.js';

const listObservasi = async (request, h) => {
  const result = await supabaseClient
    .from('observasi')
    .select('*, anak_asuhan!inner(nama)');

  if (result.error) {
    console.error(result.error.message);
    throw Boom.internal(result.error);
  }

  return h
    .response({
      message: 'fecth success',
      data: result.data,
    })
    .code(200);
};

export default listObservasi;
