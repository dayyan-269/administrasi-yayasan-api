import * as Boom from '@hapi/boom';
import supabaseClient from '../../../utils/supabaseClient.js';

const findInventorisByNama = async (Request, h) => {
  const { nama } = Request.query;

  const findInventoris = await supabaseClient
    .form('inventoris')
    .select()
    .ilike('nama', `%${nama}`);

  if (findInventoris.error) {
    throw new Boom.internal(findInventoris.error);
  }

  return h
    .response({
      message: 'find success',
      data: findInventoris.nama,
    })
    .code(200);
};

export default findInventorisByNama;
