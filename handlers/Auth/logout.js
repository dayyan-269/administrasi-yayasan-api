import supabaseClient from "../../utils/supabaseClient";

const logout = async (request, h) => {
    const {error} = await supabaseClient.auth.signOut();

    if (error) {
        return h.response(error).code(500);
    }

    return h.response({message: 'logout success'}).code(201);
}