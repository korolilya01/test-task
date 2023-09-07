import React, { useState } from 'react';

import { Button } from '../Utils/Button';
import { Icon } from '../Utils/Icon';

import { icons } from '../../services/arrays';

import classNames from 'classnames';

export const Comment = (props) => {
  const [isShowTree, setIsShowTree] = useState(false);
  const [isIconsVisible, setIsIconsVisible] = useState(false);

  const toggleTree = () => {
    setIsShowTree(!isShowTree);
    setIsIconsVisible(!isIconsVisible);
  };

  return (
    <>
      <div
        onClick={toggleTree}
        className={classNames(
          'app-node-main',
          props.replies.length !== 0 ? 'app-node-dropdown' : null, //to think how to do that better
          isShowTree ? 'app-node-dropdown-open' : null, //to think how to do that better
        )}
      >
        {props.text}
        {isIconsVisible &&
          icons.map(
            (
              item,
              index, //buttons for working with notice's settings
            ) => (
              <Button
                key={index}
                className="app-node-button"
                content={
                  <Icon className="app-node-icon" iconHref={`#${item}`} />
                }
              />
            ),
          )}
      </div>
      {props.replies && isShowTree && (
        <ul className="app-node-container">
          {props.replies.map((reply, index) => (
            <li key={index}>
              <Comment text={reply.text} replies={reply.replies} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
