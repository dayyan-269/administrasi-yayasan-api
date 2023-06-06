import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';

const findJenisKetunaanById = async (request, h) => {
  const { jenisId } = request.params;

  const result = await supabaseClient
    .from('jenis_ketunaan')
    .select()
    .eq('id', jenisId)
    .limit(1)
    .single();

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

export default findJenisKetunaanById;
