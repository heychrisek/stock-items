import { addItemToStore, isValidItem } from '../helpers';
import * as R from 'ramda';
import { testItems } from '../test/test-data';

describe('Helpers', () => {
  it('addItemToStore returns new array with item included', () => {
    const item = {name: "Name!", description: "description", price: 1, availableDate: "", taxable: true};
    const newStore = addItemToStore(item, testItems);
    expect(newStore.length).toEqual(R.inc(testItems.length));
    expect(R.last(newStore)).toEqual(item);
  })

  it('isValidItem returns true for item with valid values', () => {
    const noNameItem = {name: "Name!", description: "description", price: 1, availableDate: "2016-01-01", taxable: true};
    expect(isValidItem(noNameItem)).toEqual(true);
  })

  it('isValidItem returns false for item with no name', () => {
    const noNameItem = {name: "", description: "description", price: 1, availableDate: "2016-01-01", taxable: true};
    expect(isValidItem(noNameItem)).toEqual(false);
  })

  it('isValidItem returns false for item with no description', () => {
    const noDescriptionItem = {name: "Name!", description: "", price: 1, availableDate: "2016-01-01", taxable: true};
    expect(isValidItem(noDescriptionItem)).toEqual(false);
  })

  it('isValidItem returns false for item with 0 price', () => {
    const noNameItem = {name: "Name!", description: "description", price: 0, availableDate: "2016-01-01", taxable: true};
    expect(isValidItem(noNameItem)).toEqual(false);
  })

  it('isValidItem returns false for item with no availableDate', () => {
    const noNameItem = {name: "Name!", description: "description", price: 1, availableDate: "", taxable: true};
    expect(isValidItem(noNameItem)).toEqual(false);
  })
})