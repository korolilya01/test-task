import React, { useState } from 'react';

import { Form } from '../Form';

import { createNode } from '../../../services/functions/nodeOperation';

export const CreateNode = ({
  initialArray,
  nodeId,
  closeAllForms,
  setResult,
}) => {
  const [newName, setNewName] = useState('Root');

  const writeNewName = (e) => {
    setNewName(e.target.value);
  };
  const sentForm = async (e) => {
    e.preventDefault();

    try {
      await createNode(initialArray, nodeId, newName, setResult);
      setNewName('');
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
    closeAllForms();
  };

  return (
    <Form
      sentForm={sentForm}
      onChange={writeNewName}
      closeAllForms={closeAllForms}
      content="ADD"
      name="create"
    />
  );
};
