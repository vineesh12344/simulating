const baseUrl: string = 'http://localhost:8080';

export const api: { [key: string]: any } = {};

api.get = async (endpoint: string): Promise<any> => {
  const res = await fetch(`${baseUrl}/api${endpoint}`);
  // console.log('res', res);
  if (res.json) return (await res.json()) || [];
  return res;
};