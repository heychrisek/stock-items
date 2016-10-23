import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as stockItemsActions from '../actions/stock-items-actions';
import StockItemsList from './StockItemsList';
import StockItemsForm from './StockItemsForm';
import '../styles/StockItemsContainer.css';

class StockItemsContainer extends Component {
  render() {
    const {stockItems, actions} = this.props;
    return (
      <div className="StockItemsContainer">
        <div className="StockItemsContainer-Header">
          <h1>Stock Items</h1>
        </div>
        <div className="StockItemsContainer-Content">
          <div className="StockItemsContainer-Form">
            <StockItemsForm addItem={actions.addItem} />
          </div>
          <div className="StockItemsContainer-List">
            <StockItemsList stockItems={stockItems} />
          </div>
        </div>
      </div>
    );
  }
};

StockItemsContainer.propTypes = {
  stockItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    availableDate: PropTypes.string.isRequired,
    taxable: PropTypes.bool.isRequired
  })).isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    stockItems: state.stockItems
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(stockItemsActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StockItemsContainer);