import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';

import Countries from './Countries';

const defaultState = {
  name: '',
  country: '',
  winnings: 0,
  imageUrl: '',
};

const PlayerForm = ({ text, initialValues, onSubmit, onDelete }) => {
  const { push } = useHistory();

  return (
    <Formik
      initialValues={initialValues || defaultState}
      onSubmit={(values) => onSubmit(values)}
    >
      <div className="player-form-container">
        <Form className="player-form">
          <h2>{text}</h2>
          <label htmlFor="name">Name:</label>
          <Field className="player-form__input" type="text" name="name" />
          <ErrorMessage
            name="name"
            component="span"
            className="player-form__error"
          />
          <label htmlFor="country">Country:</label>
          <Field as="select" className="player-form__input" name="country">
            <Countries />
          </Field>
          <ErrorMessage
            name="country"
            component="span"
            className="player-form__error"
          />
          <label htmlFor="winnings">Winnings:</label>
          <Field className="player-form__input" type="number" name="winnings" />
          <label htmlFor="imageUrl">Image Url:</label>
          <Field className="player-form__input" type="text" name="imageUrl" />
          <div className="player-form__buttons">
            <button type="button" onClick={() => push('/')}>
              Cancel
            </button>
            {onDelete && (
              <button
                type="button"
                className="player-form__button"
                onClick={() => onDelete(initialValues.id)}
              >
                Delete
              </button>
            )}
            <button type="submit" className="player-form__button">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default PlayerForm;
