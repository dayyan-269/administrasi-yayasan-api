import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';

const getDashboardStats = async (request, h) => {
    const countAnakAsuhan = await supabaseClient.from('anak_asuhan').select('*', {count: 'exact', head: true});
    const countPegawai = await supabaseClient.from('pegawai').select('*', { count: 'exact', head: true });
    const countBarang = await supabaseClient.from('barang_anak_asuhan').select('*', {count: 'exact', head: true});

    if (!countAnakAsuhan.error) {
        throw new Boom.internal();
    }
    
    if (!countPegawai.error) {
        throw new Boom.internal();
    }

    if (!countBarang.error) {
        throw new Boom.internal();
    }

    return h.response({
        message: 'get stats success',
        data: {
            anakAsuhanAmount: countAnakAsuhan.count,
            pegawaiAmount: countPegawai.count,
            barangAnakAmount: countBarang.count,
        }
    })
}

export default getDashboardStats;