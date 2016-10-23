import React, {Component, PropTypes} from 'react';
import {isValidItem} from '../helpers';
import '../styles/StockItemsForm.css';

const initialState = {name: "", description: "", price: 0, availableDate: "", taxable: false};
const alertText = `Form values are invalid. Ensure all fields are complete.
    Name: non-empty
    Description: non-empty
    Price: number greater than 0
    Date: valid date
`;


class StockItemsForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange(prop, event) {
    this.setState({[prop]: event.target.value});
  }

  handleCheck(prop, event) {
    this.setState({[prop]: !this.state[prop]});
  }

  handleSubmit() {
    if (isValidItem(this.state)) {
      this.props.addItem(this.state);
      this.resetState();
    } else {
      alert(alertText)
    }
  }

  resetState() {
    this.setState(initialState);
  }

  render() {
    return (
      <div className="StockItemsForm">
        <h3>Stock A New Item</h3>
        <div className="StockItemsForm-inputGroup">
          <label>Name:</label>
          <input type="text" value={this.state.name} placeholder="Name"
                 onChange={this.handleChange.bind(null, "name")} />
        </div>
        
        <div className="StockItemsForm-inputGroup">
          <label>Description:</label>
          <textarea name="description" value={this.state.description} placeholder="Description"
                    onChange={this.handleChange.bind(null, "description")} />
        </div>
        
        <div className="StockItemsForm-inputGroup">
          <label>Price ($):</label>
          <input type="number" value={this.state.price} placeholder="Price" step="0.01"
                 onChange={this.handleChange.bind(null, "price")} />
         </div>
        
        <div className="StockItemsForm-inputGroup">
          <label>Available Date:</label>
          <input type="date" value={this.state.availableDate}
                 onChange={this.handleChange.bind(null, "availableDate")} />
        </div>
        
        <div className="StockItemsForm-inputGroup">
          <label>Taxable:</label>
          <input type="checkbox" value="taxable"
                 onChange={this.handleCheck.bind(null, "taxable")} />
        </div>
        
        <div className="StockItemsForm-button">
          <button onClick={this.handleSubmit}>Add Item To Store</button>
        </div>
      </div>
    );
  }
};

StockItemsForm.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default StockItemsForm;