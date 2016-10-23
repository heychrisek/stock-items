import * as actions from '../actions/stock-items-actions'
import reducer from '../reducers/stock-items-reducer'
import * as types from '../actions/action-types.js'
import * as R from 'ramda'
import { testItems } from '../test/test-data';

describe('Redux actions', () => {
  it('should create an action to add a todo', () => {
    const item = R.head(testItems)
    const expectedAction = {
      type: types.ADD_ITEM,
      item
    }
    expect(actions.addItem(item)).toEqual(expectedAction)
  })
})

describe('Redux reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(testItems)
  })

  it('should handle ADD_ITEM', () => {
    const item = {name:"Name", description:"description", price:1.25, availableDate:"2014-10-10", taxable:false}
    expect(
      reducer([], {
        type: types.ADD_ITEM,
        item
      })
    ).toEqual(
      [item]
    )

    expect(
      reducer(testItems, {
        type: types.ADD_ITEM,
        item
      })
    ).toEqual(
      [...testItems, item]
    )
  })

})