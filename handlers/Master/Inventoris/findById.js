import * as Boom from '@hapi/boom';
import supabaseClient from '../../../utils/supabaseClient.js';

const findInventorisById = async (request, h) => {
  const inventorisId = request.params.inventorisId;

  const findInventoris = await supabaseClient
    .from('inventoris')
    .select()
    .eq('id', inventorisId)
    .limit(1)
    .single();

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

export default findInventorisById;
