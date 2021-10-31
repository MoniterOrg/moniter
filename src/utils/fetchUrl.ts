import fetch from 'node-fetch';

export const fetchUrl = async (url: string) => {
  try {
    const response = await fetch(url);
    return response;
  } catch (error) {
    return {
      url,
      message: error.code,
    };
  }
};
