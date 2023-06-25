import axios from 'axios';

const auth = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = token => {
  auth.defaults.headers.common['Authorization'] = token;
};

export const signUp = async body => {
  return await auth.post('/users/signup', body);
};

export const login = async body => {
  try {
    const { data } = await auth.post('/users/login', body);
    await setToken(`Bearer ${data.access_token}`);
    return data;
  } catch (error) {
    console.log(`ERROR ${error}`);
  }
};
