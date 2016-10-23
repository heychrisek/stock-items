import * as types from '../actions/action-types';
import {addItemToStore} from '../helpers';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return addItemToStore(action.item, state)
    default:
      return state;
  }
};