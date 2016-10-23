import React from 'react';
import * as R from 'ramda';
import '../styles/StockItemsList.css';
import moment from 'moment';
const mapIndexed = R.addIndex(R.map);

const ListHeader = () => (
  <div className="StockItemsList-header">
    <span><strong>Name</strong></span>
    <span><strong>Description</strong></span>
    <span><strong>Price</strong></span>
    <span><strong>Available Date</strong></span>
    <span><strong>Taxable</strong></span>
  </div>
);

const StockItemsList = ({stockItems}) => (
  <div className="StockItemsList">
    <h3>All Stocked Items</h3>
    <ListHeader />
    {mapIndexed(({name, description, price, availableDate, taxable}, i) => {
      return <div key={i} className="StockItemsList-item">
        <span>{name}</span>
        <span>{description}</span>
        <span>${price}</span>
        <span>{moment(availableDate).format('LL')}</span>
        <span>{taxable ? "✓" : null}</span>
      </div>
    }, stockItems)}
  </div>
);

export default StockItemsList;