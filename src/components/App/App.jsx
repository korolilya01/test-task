import React, { useEffect, useState } from 'react';

import { Comment } from '../Comment';
import { FormList } from '../FormList';
import { Sprites } from '../Utils/Sprites';

import { fetchData } from '../../services/functions/nodeOperation';
import { initialArray } from '../../services/constants';

export const App = () => {
  const [arr, setArr] = useState([]);
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
    fetchData(initialArray, setArr);
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
          arr={arr}
          setArr={setArr}
        />
      )}

      <div className="app">
        {arr.children?.map((comment) => (
          <Comment
            key={comment.id}
            text={comment.name}
            replies={comment.children}
            nodeId={comment.id}
            showForm={showForm}
          />
        ))}
      </div>
    </>
  );
};
