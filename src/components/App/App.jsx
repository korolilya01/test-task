import React, { useEffect, useState } from 'react';

import { Comment } from '../Comment';
import { FormList } from '../FormList';
import { Sprites } from '../Utils/Sprites';

import { fetchData } from '../../services/functions/nodeOperation';
import { initialArray } from '../../services/constants';

export const App = () => {
  const [result, setResult] = useState([]);
  const [nodeId, setNodeId] = useState(null);
  const [formType, setFormType] = useState(null);

  const showForm = (formType, id) => {
    setNodeId(id);
    setFormType(formType);
  };

  const closeAllForms = () => {
    setFormType(null);
  };

  useEffect(() => {
    fetchData(initialArray, setResult);
  }, []);

  return (
    <>
      <Sprites />
      {formType && (
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
