// const cache = new Map();
//
// export const fetchData = (url, requestData) => {
//   if (!cache.has(url)) {
//     cache.set(
//       url,
//       axios.post(url, requestData).then((response) => response.data),
//     );
//   }
//   return cache.get(url);
// };
//
// export const getUserTree = async () => {
//   return fetchData(
//     `${BASE_URL}${END_POINT}.get?treeName=%7BC9232B85-AD10-459C-A44F-70CA30C60E5F%7D`,
//     requestData,
//   );
// };
