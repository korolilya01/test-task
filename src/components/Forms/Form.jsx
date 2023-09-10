import React from 'react';

import { Button } from '../Utils/Button';

import './NodeForm.scss';

import classNames from 'classnames';

export const Form = ({
  value,
  sentForm,
  onChange,
  closeAllForms,
  content,
  name,
}) => {
  return (
    <form onSubmit={sentForm} className="form-create-node">
      <div className="form-first-block">{content}</div>
      <div className="form-second-block">
        {name === 'delete' ? (
          <p>Do you want to delete {value}?</p>
        ) : name === 'error' ? (
          <p>{value}</p>
        ) : content === 'rename' ? (
          <>
            <input
              required="required"
              value={value}
              onChange={onChange}
              className="input-field"
              type="text"
              name="NodeName"
            />
            <span>New Node Name</span>
          </>
        ) : (
          <>
            <input
              required="required"
              value={value}
              onChange={onChange}
              className="input-field"
              type="text"
              name="NodeName"
            />
            <span>Node Name</span>
          </>
        )}
      </div>
      <div className="form-buttons">
        <Button
          onClick={() => closeAllForms()}
          className={classNames(
            'button',
            name === 'error' ? 'button-cancel-full' : 'button-cancel',
          )}
          content="CANCEL"
        />
        {name !== 'error' && (
          <Button
            type="submit"
            className={classNames(
              'button',
              content === 'DELETE' ? 'button-delete' : 'button-action',
            )}
            content={content}
          />
        )}
      </div>
    </form>
  );
};
