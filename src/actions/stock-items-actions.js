import * as types from './action-types';

export const addItem = (item) => {
  return {
    type: types.ADD_ITEM,
    item
  };
};

// to persist data, add redux thunk middleware (e.g., redux-thunk) to configure-store.js and
// delete lines 3-8 above, then uncomment the following (would also need to add a fetchItems
// action to hydrate items initially):
//        export const addItem = (item) => {
//          return dispatch => {
//            return asyncAction // POST item to endpoint/DB/localStorage
//              .then(function(response) {
//                return response.json()
//              })
//              .then(function(response) {
//                dispatch(addItemSuccess(response))
//              })
//              .catch(function({message}) {
//                dispatch(addItemFailure(message))
//              });
//          };
//        }
//    
//        const addItemSuccess = (item) => {
//          return {
//            type: types.ADD_ITEM_SUCCESS,
//            item
//          }
//        }
//    
//        const addItemFailure = (error) => {
//          return {
//            type: types.ADD_ITEM_FAILURE,
//            error
//          }
//        }
//