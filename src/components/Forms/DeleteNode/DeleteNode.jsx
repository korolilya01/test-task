import React from 'react';

import { Form } from '../Form';

import { deleteNode } from '../../../services/functions/nodeOperation';
import { findObjectById } from '../../../services/functions/findObjectById';

export const DeleteNode = ({
  initialArray,
  nodeId,
  closeAllForms,
  setArr,
  arr,
}) => {
  const nodeObj = findObjectById(nodeId, arr);

  const sentForm = (e) => {
    e.preventDefault();

    try {
      deleteNode(initialArray, nodeId, undefined, setArr).then((r) =>
        console.log(r),
      );
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
    />
  );
};
