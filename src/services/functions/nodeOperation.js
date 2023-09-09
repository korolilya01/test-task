import axios from 'axios';
import { BASE_URL, END_POINT } from '../constants';

export const fetchData = async (obj, setArr) => {
  try {
    const response = await axios.get(
      encodeURI(`${BASE_URL}${END_POINT}.get?treeName=${obj.treeName}`),
    );
    setArr(response.data);
  } catch (error) {
    console.log('Ошибка при загрузке данных:', error);
  }
};

export const performNodeOperation = async (
  operationType,
  initialArray,
  nodeId,
  nodeName,
  setArr,
  newNodeName,
) => {
  try {
    let url;
    const { treeName, parentNodeId } = initialArray;
    switch (operationType) {
      case 'create':
        url = `${BASE_URL}${END_POINT}.node.create?treeName=${treeName}&parentNodeId=${
          nodeId || parentNodeId
        }&nodeName=${nodeName || initialArray.nodeName}`;
        break;
      case 'delete':
        url = `${BASE_URL}${END_POINT}.node.delete?treeName=${treeName}&nodeId=${nodeId}`;
        break;
      case 'rename':
        url = `${BASE_URL}${END_POINT}.node.rename?treeName=${treeName}&nodeId=${nodeId}&newNodeName=${newNodeName}`;
        break;
      default:
        throw new Error('Unsupported operation type');
    }
    await axios.post(encodeURI(url));
    await fetchData(initialArray, setArr);
  } catch (error) {
    console.log('Ошибка при загрузке данных:', error);
  }
};

export const createNode = async (initialArray, nodeId, nodeName, setArr) => {
  await performNodeOperation('create', initialArray, nodeId, nodeName, setArr);
};

export const deleteNode = async (initialArray, nodeId, nodeName, setArr) => {
  await performNodeOperation('delete', initialArray, nodeId, nodeName, setArr);
};

export const renameNode = async (initialArray, nodeId, setArr, newNodeName) => {
  await performNodeOperation(
    'rename',
    initialArray,
    nodeId,
    undefined,
    setArr,
    newNodeName,
  );
};
