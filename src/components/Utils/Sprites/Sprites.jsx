import React from 'react';

import './Sprites.scss';

export const Sprites = () => {
  return (
    <svg className="sprites" xmlns="http://www.w3.org/2000/svg">
      <symbol id="arrowRight" viewBox="0 0 24 24">
        <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
      </symbol>
      <symbol id="create" viewBox="0 0 24 24">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
      </symbol>
      <symbol id="rename" viewBox="0 0 24 24">
        <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
      </symbol>
      <symbol id="delete" viewBox="0 0 24 24">
        <path
          d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2zm-7-10.414l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 3.293 3.293zm10-8.586h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-8-3h-4v1h4v-1z"
          fill="#ff3078"
        />
      </symbol>
      <symbol id="pop-up-cross" viewBox="0 0 26 26">
        <path
          d="M26 1.4857L24.5144 0L13 11.5143L1.4857 0L0 1.4857L11.5143 13L0 24.5144L1.4857 26L13 14.4857L24.5144 26L26 24.5144L14.4857 13L26 1.4857Z"
          fill="#BFBFBF"
        />
      </symbol>
    </svg>
  );
};
