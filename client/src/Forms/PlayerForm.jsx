import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';

import './Forms.scss';
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
          <Field
            className="player-form__input"
            type="text"
            name="name"
            placeholder="Name"
          />
          <Field
            as="select"
            className="player-form__input"
            name="country"
            placeholder="Country"
          >
            <Countries />
          </Field>
          <label htmlFor="winnings">Winnings:</label>
          <Field
            className="player-form__input"
            type="number"
            name="winnings"
            placeholder="Winnings"
          />
          <Field
            className="player-form__input"
            type="text"
            name="imageUrl"
            placeholder="Image URL"
          />
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
