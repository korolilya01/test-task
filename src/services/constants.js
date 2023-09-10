import { generateGUID } from './functions/generateGUID';

export const BASE_URL = 'https://test.vmarmysh.com';
export const END_POINT = '/api.user.tree';

const guidPath = generateGUID();

export const initialArray = {
  treeName: guidPath,
};
