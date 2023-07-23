import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';

const findAnakAsuhanById = async (request, h) => {
  const { anakAsuhanId } = request.params;

  const findAnakAsuhan = await supabaseClient
    .from('anak_asuhan')
    .select()
    .eq('id', anakAsuhanId)
    .limit(1)
    .single();

  if (findAnakAsuhan.error) {
    throw new Boom.internal(findAnakAsuhan.error);
  }

  return h
    .response({
      message: 'find success',
      data: findAnakAsuhan.data,
    })
    .code(200);
};

export default findAnakAsuhanById;
