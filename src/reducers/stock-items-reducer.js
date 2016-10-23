import * as types from '../actions/action-types';
import {testItems} from '../test/test-data';
import {addItemToStore} from '../helpers';

export default (state = testItems, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return addItemToStore(action.item, state)
    default:
      return state;
  }
};