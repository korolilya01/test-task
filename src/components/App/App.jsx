import React, { useEffect, useState } from 'react';

import { Comment } from '../Comment';
import { FormList } from '../FormList';
import { Sprites } from '../Utils/Sprites';

import {
  ERROR_CODE,
  ERROR_MESSAGE,
  ERROR_NODEID,
  fetchData,
} from '../../services/functions/nodeOperation';
import { initialArray } from '../../services/constants';
import { PopUpBlock } from '../PopUpBlock';

export const App = () => {
  const [result, setResult] = useState([]); //recording the received data from the server
  const [nodeId, setNodeId] = useState(null); //id our nodes
  const [formType, setFormType] = useState(null); //save and sent form's type (create, delete, remove)

  const showForm = (formType, id) => {
    //show the form during some action
    setNodeId(id);
    setFormType(formType);
  };

  const closeAllForms = () => {
    setFormType(null);
  };

  useEffect(() => {
    //make a get request
    fetchData(initialArray, setResult);
  }, []);

  return (
    <>
      <Sprites />
      {ERROR_CODE === 500 && <FormList formType="error" />}{' '}
      {/*// form when the user tries to delete a parent node*/}
      {ERROR_CODE === 500 && (
        <PopUpBlock message={ERROR_MESSAGE} id={ERROR_NODEID} />
      )}
      {/*// pop-up window when bad request*/}
      {formType && formType !== 'error' && (
        <FormList
          formType={formType}
          initialArray={initialArray}
          nodeId={nodeId}
          closeAllForms={closeAllForms}
          result={result}
          setResult={setResult}
        />
      )}
      <div className="app">
        <>
          {' '}
          {/*// render each node*/}
          <Comment
            text="Root"
            nodeId={result.id}
            replies={result?.children}
            showForm={showForm}
          />
        </>
      </div>
    </>
  );
};
