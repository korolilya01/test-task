import React from 'react';

import { Form } from '../Form';

import { deleteNode } from '../../../services/functions/nodeOperation';
import { findObjectById } from '../../../services/functions/findObjectById';

export const DeleteNode = ({
  initialArray,
  nodeId,
  closeAllForms,
  setResult,
  result,
}) => {
  const nodeObj = findObjectById(nodeId, result);

  const sentForm = async (e) => {
    e.preventDefault();

    try {
      await deleteNode(initialArray, nodeId, undefined, setResult);
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
    closeAllForms();
  };

  return (
    <Form
      value={nodeObj?.name}
      sentForm={sentForm}
      closeAllForms={closeAllForms}
      content="DELETE"
      name="delete"
    />
  );
};
