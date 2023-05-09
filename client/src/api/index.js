import { API_URL } from './urls';

export const api = {
  get: async url => {
    const response = await fetch(`${process.env.API_URL}${url}`);
    if (response.status >= 400) {
      console.error(response.status);
    }
    return response.json();
  },
};
