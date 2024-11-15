export const fetching = async (url, options = {}) => {
  let response = await fetch(url, options);
  response = response.json();
  return response;
};