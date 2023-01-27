import {HTTP, HTTPS} from "@constans/api";

/**
 * Змінюємо HTTP на HTTPS
 * @param {String} url
 * @returns {String}
 *
 * */


export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;
    return result;
}
export const getApiResource = async (url) => {

    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error(res.status)
            return false;
        }

        return await res.json();
    } catch (error) {
        console.error(error.message)
        return false;
    }
}
