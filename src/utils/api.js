const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://kiitos-2018.herokuapp.com/'
    : 'http://127.0.0.1:5000/';

export { baseUrl as default };
