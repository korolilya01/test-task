import React from 'react';

import { Comment } from '../Comment';
import { Sprites } from '../Utils/Sprites';

import { comments } from '../../services/arrays';

export const App = () => {
  return (
    <>
      <Sprites />
      <div className="app">
        {comments.map(
          (
            comment,
            index, //my array for testing
          ) => (
            <Comment
              key={index}
              text={comment.text}
              replies={comment.replies}
            />
          ),
        )}
      </div>
    </>
  );
};
