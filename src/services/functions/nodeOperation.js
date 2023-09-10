import axios from 'axios';
import { BASE_URL, END_POINT } from '../constants';

export const fetchData = async (obj, setResult) => {
  try {
    const response = await axios.get(
      encodeURI(`${BASE_URL}${END_POINT}.get?treeName=${obj.treeName}`),
    );
    setResult(response.data);
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  }
};

export const performNodeOperation = async (
  operationType,
  initialArray,
  nodeId,
  nodeName,
  setResult,
  newNodeName,
) => {
  try {
    let url;
    const { treeName } = initialArray;
    switch (operationType) {
      case 'create':
        url = `${BASE_URL}${END_POINT}.node.create?treeName=${treeName}&parentNodeId=${nodeId}&nodeName=${nodeName}`;
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
    await fetchData(initialArray, setResult);
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  }
};

export const createNode = async (initialArray, nodeId, nodeName, setResult) => {
  await performNodeOperation(
    'create',
    initialArray,
    nodeId,
    nodeName,
    setResult,
  );
};

export const deleteNode = async (initialArray, nodeId, nodeName, setResult) => {
  await performNodeOperation(
    'delete',
    initialArray,
    nodeId,
    nodeName,
    setResult,
  );
};

export const renameNode = async (
  initialArray,
  nodeId,
  setResult,
  newNodeName,
) => {
  await performNodeOperation(
    'rename',
    initialArray,
    nodeId,
    undefined,
    setResult,
    newNodeName,
  );
};
