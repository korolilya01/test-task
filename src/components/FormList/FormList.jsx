import React from 'react';

import { CreateNode } from '../Forms/CreateNode';
import { DeleteNode } from '../Forms/DeleteNode';
import { ErrorDelete } from '../Forms/ErrorDelete';
import { RenameNode } from '../Forms/RenameNode';

export const FormList = ({ formType, ...props }) => {
  const formComponents = {
    create: <CreateNode {...props} />,
    rename: <RenameNode {...props} />,
    delete: <DeleteNode {...props} />,
    error: <ErrorDelete {...props} />,
  };

  return (
    <>
      <div className="overlay" onClick={props?.closeAllForms}></div>
      {formComponents[formType]}
    </>
  );
};
