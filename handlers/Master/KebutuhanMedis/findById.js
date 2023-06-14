import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';

const findKebutuhanById = async (request, h) => {
  const kebutuhanId = request.params.kebutuhanId;

  const findKebutuhan = await supabaseClient
    .from('kebutuhan_medis')
    .select()
    .eq('id', kebutuhanId)
    .limit(1)
    .single();

  if (findKebutuhan.error) {
    throw new Boom.internal(findKebutuhan.error);
  }

  return h
    .response({
      message: 'find success',
      data: findKebutuhan.data,
    })
    .code(200);
};

export default findKebutuhanById;
