import React from 'react';

import { Button } from '../Utils/Button';
import { Icon } from '../Utils/Icon';

import './PopUpBlock.scss';

export const PopUpBlock = ({ message, id }) => {
  return (
    <div className="pop-up">
      <p className="pop-up-massege">
        {message}
        (id = {` ${id}`}).
      </p>
      <Button
        className="pop-up-button"
        content={<Icon className="pop-up-icon" iconHref="#pop-up-cross" />}
      />
    </div>
  );
};
