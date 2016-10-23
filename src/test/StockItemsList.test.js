import React from 'react';
import StockItemsList from '../components/StockItemsList';
import { shallow } from 'enzyme';
import { testItems } from '../test/test-data';

describe('StockItemsList: as a business owner, I can see what items my store stocks', () =>{
  it('StockItemsList displays 0 stock items when none are provided', () => {
    const component = shallow(<StockItemsList stockItems={[]} />);
    expect(component.find('.StockItemsList-item').length).toEqual(0);
  })

  it('StockItemsList displays all stock items when array of items is provided', () => {
    const component = shallow(<StockItemsList stockItems={testItems} />);
    expect(component.find('.StockItemsList-item').length).toEqual(testItems.length);
  })
})
