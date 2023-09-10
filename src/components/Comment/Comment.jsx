import React, { useState } from 'react';

import { ButtonAction } from '../ButtonAction';

import { icons } from '../../services/arrays';

import './Comment.scss';
import classNames from 'classnames';

export const Comment = (props) => {
  const [isShowTree, setIsShowTree] = useState(false); //opening and closing our tree
  const [isIconsVisible, setIsIconsVisible] = useState(false); //opening and closing node's actions

  const { text, replies, showForm, nodeId } = props;

  const toggleTree = () => {
    //function for opening and closing
    setIsShowTree(!isShowTree);
    setIsIconsVisible(!isIconsVisible);
  };

  return (
    <>
      <div
        onClick={toggleTree}
        className={classNames(
          'app-node-main',
          replies?.length !== 0 ? 'app-node-dropdown' : null,
          isShowTree ? 'app-node-dropdown-open' : null,
        )}
      >
        {text}
        {text === 'Root' ? (
          <ButtonAction showForm={showForm} action="create" id={nodeId} />
        ) : (
          isIconsVisible &&
          icons.map((item, index) => {
            return (
              <div key={index}>
                <ButtonAction
                  showForm={showForm}
                  action={item.action}
                  id={nodeId}
                />
              </div>
            );
          })
        )}
      </div>
      {isShowTree && (
        <ul className="app-node-container">
          {props.replies?.map((item) => (
            <li key={item.id}>
              <Comment
                text={item.name}
                replies={item.children}
                nodeId={item.id}
                showForm={props.showForm}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
