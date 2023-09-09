import React, { useEffect, useState } from 'react';

import { Form } from '../Form';

import { renameNode } from '../../../services/functions/nodeOperation';
import { findObjectById } from '../../../services/functions/findObjectById';

export const RenameNode = ({
  initialArray,
  nodeId,
  closeAllForms,
  setArr,
  arr,
}) => {
  const [newNodeName, setNewNodeName] = useState('');

  const nodeObj = findObjectById(nodeId, arr);

  useEffect(() => {
    setNewNodeName(nodeObj.name);
  }, []);

  const writeNewName = (e) => {
    setNewNodeName(e.target.value);
  };

  const sentForm = (e) => {
    e.preventDefault();

    try {
      renameNode(initialArray, nodeId, setArr, newNodeName).then((r) =>
        console.log(r),
      );
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
