import * as Boom from '@hapi/boom';

import moduleName from '../../../utils/supabaseClient.js';
import supabaseClient from '../../../utils/supabaseClient.js';

const createJenisKetunaan = async (request, h) => {
  const data = {
    nama: request.payload.nama
  };

  const result = await supabaseClient.from('jenis_ketunaan').insert(data);

  if (result.error) {
    throw boom.badData(result.error);
  }

  return h.response({message: 'new item created'}).code(201);
}

export default createJenisKetunaan;