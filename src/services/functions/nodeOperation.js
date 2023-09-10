import axios from 'axios';
import { BASE_URL, END_POINT } from '../constants';

export let ERROR_MESSAGE = null;
export let ERROR_CODE = null;
export let ERROR_NODEID = null;

export const fetchData = async (obj, setResult) => {
  //generating get request
  try {
    const response = await axios.get(
      encodeURI(`${BASE_URL}${END_POINT}.get?treeName=${obj.treeName}`), //encodeURI for encoding our URI
    );
    setResult(response.data);
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  }
};

export const performNodeOperation = async (
  //generating a post request for others actions with a node
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
    ERROR_CODE = error.response.status;
    ERROR_MESSAGE = error.response.data.data.message;
    ERROR_NODEID = error.response.data.id;
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
