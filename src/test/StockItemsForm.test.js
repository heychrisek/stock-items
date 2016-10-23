import React from 'react';
import StockItemsForm from '../components/StockItemsForm';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { testItems } from '../test/test-data';
import * as R from 'ramda';

describe('StockItemsForm: as a business owner, I can add new items to my store', () =>{
  it('StockItemsForm displays a form to add new items', () => {
    const component = shallow(<StockItemsForm addItem={() => {}} />);
    expect(component.find('.StockItemsForm').length).toEqual(1);
  })

  it('StockItemsForm displays inputs for each item property', () => {
    const component = shallow(<StockItemsForm addItem={() => {}} />);
    const fields = ["name", "description", "price", "availableDate", "taxable"];
    expect(component.find('.StockItemsForm-inputGroup').length).toEqual(fields.length);
  })

  it('StockItemsForm\'s addItem click handler is not called on submission of invalid item', () => {
    const addItem = spy();
    const component = shallow(<StockItemsForm addItem={addItem} />);
    component.find('.StockItemsForm-button button').simulate('click');
    expect(addItem.callCount).toEqual(0);
  })

  it('StockItemsForm\'s addItem click handler is called on submission of valid item', () => {
    const addItem = spy();
    const component = shallow(<StockItemsForm addItem={addItem} />);
    component.setState(R.head(testItems));
    component.find('.StockItemsForm-button button').simulate('click');
    expect(addItem.callCount).toEqual(1);
  })
})