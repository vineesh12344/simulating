const baseUrl = (
    'http://localhost:8080'
);
export const api: { [key: string]: any } = {};

api.get = async endpoint => {
    const res = await fetch(`${baseUrl}${endpoint}`);
    console.log(res);
    if (res.json) return await res.json() || [];
    return res;
};