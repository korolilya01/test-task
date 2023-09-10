import React from 'react';

import { Form } from '../Form';

import { ERROR_MESSAGE } from '../../../services/functions/nodeOperation';

export const ErrorDelete = () => {
  return <Form value={ERROR_MESSAGE} content="DELETE" name="error" />;
};
