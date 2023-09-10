import React, { useEffect, useState } from 'react';

import { Form } from '../Form';

import { renameNode } from '../../../services/functions/nodeOperation';
import { findObjectById } from '../../../services/functions/findObjectById';

export const RenameNode = ({
  initialArray,
  nodeId,
  closeAllForms,
  setResult,
  result,
}) => {
  const [newNodeName, setNewNodeName] = useState('');

  const nodeObj = findObjectById(nodeId, result);

  useEffect(() => {
    setNewNodeName(nodeObj.name);
  }, [nodeObj.name]);

  const writeNewName = (e) => {
    setNewNodeName(e.target.value);
  };

  const sentForm = (e) => {
    e.preventDefault();

    try {
      renameNode(initialArray, nodeId, setResult, newNodeName);
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
    closeAllForms();
  };

  return (
    <Form
      value={newNodeName}
      sentForm={sentForm}
      onChange={writeNewName}
      closeAllForms={closeAllForms}
      content="RENAME"
    />
  );
};
