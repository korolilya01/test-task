import React from 'react';

import { CreateNode } from '../Forms/CreateNode';
import { RenameNode } from '../Forms/RenameNode';
import { DeleteNode } from '../Forms/DeleteNode';

export const FormList = ({ formType, ...props }) => {
  const formComponents = {
    create: <CreateNode {...props} />,
    rename: <RenameNode {...props} />,
    delete: <DeleteNode {...props} />,
  };

  return (
    <>
      <div className="overlay" onClick={props.closeAllForms}></div>
      {formComponents[formType]}
    </>
  );
};
