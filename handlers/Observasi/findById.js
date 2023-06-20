import * as Boom from '@hapi/boom';

import supabaseClient from '../../utils/supabaseClient.js';

const findObservasiById = async (request, h) => {
  const { observasiId } = request.params;

  const result = await supabaseClient
    .from('observasi')
    .select()
    .eq('id', observasiId)
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

export default findObservasiById;
