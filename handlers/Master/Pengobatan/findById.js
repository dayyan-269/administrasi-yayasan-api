import * as Boom from '@hapi/boom';
import supabaseClient from '../../../utils/supabaseClient.js';

const findPengobatanById = async (request, h) => {
  const pengobatanId = request.params.pengobatanId;

  const findPengobatan = await supabaseClient
    .from('pengobatan')
    .select()
    .eq('id', pengobatanId)
    .limit(1)
    .single();

  if (findPengobatan.error) {
    throw Boom.internal(findPengobatan.error);
  }

  return h
    .response({
      message: 'find success',
      data: findPengobatan.data,
    })
    .code(200);
};

export default findPengobatanById;
