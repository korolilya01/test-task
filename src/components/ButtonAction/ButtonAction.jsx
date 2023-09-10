import React from 'react';

import { Button } from '../Utils/Button';
import { Icon } from '../Utils/Icon';

export const ButtonAction = ({ showForm, action, id }) => {
  return (
    <Button
      onClick={() => {
        if (typeof showForm === 'function') {
          showForm(action, id);
        }
      }}
      className="app-node-button"
      content={<Icon className="app-node-icon" iconHref={`#${action}`} />}
    />
  );
};
