import descriptionReducer from '../../Reducers/description_title';
import {createStore} from 'redux';
import {useState} from 'react';

export const DescriptionAction = props => {
  const storeDescription = createStore(descriptionReducer);

  storeDescription.dispatch({
    type: 'DEFINE_TITLE_DESCRIPTION',
    text: props.descriptionAction,
  });

  return storeDescription.getState();
};
