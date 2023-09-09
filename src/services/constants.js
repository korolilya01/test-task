export const BASE_URL = 'https://test.vmarmysh.com';
export const END_POINT = '/api.user.tree';

// Генерируем GUID
// const generateGUID = () => {
//   return '{xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx}'.replace(
//     /[xy]/g,
//     function (c) {
//       var r = (Math.random() * 16) | 0,
//         v = c === 'x' ? r : (r & 0x3) | 0x8;
//       return v.toString(16);
//     },
//   );
// };
// // Определите abc как константу внутри функции App
// const abc = generateGUID();

//----------------------------------------------
// Создаем начальный объект с GUID
export const initialArray = {
  treeName: '{e34bf78e-821b-441e-bc2b-cdfb4e3dc5c4}',
  parentNodeId: 16890,
  nodeName: 'Root', // Замените на строку, так как nodeName ожидает строку
};
//---------------------------------------------
