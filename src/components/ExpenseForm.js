import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      note: props.expense ? props.expense.note : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      focused: false,
      error: ""
    };
  }

  desChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  noteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  amountChange = e => {
    const amount = e.target.value;
    //if (amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
    this.setState(() => ({ amount }));
    //}
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusedChange = ({ focused }) => {
    this.setState(() => ({ focused }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please provide a valid description and amount!"
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
      console.log("Sumbit Successful!");
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="description"
          className="text-input"
          // autoFocus
          value={this.state.description}
          onChange={this.desChange}
        />
        <input
          className="text-input"
          type="number"
          placeholder="amount"
          value={this.state.amount}
          onChange={this.amountChange}
        />
        <textarea
          className="textarea"
          value={this.state.note}
          placeholder="Notes for your expense (Optional)"
          onChange={this.noteChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.focused}
          onFocusChange={this.onFocusedChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <div>
          <button className="button__form">Save</button>
        </div>
      </form>
    );
  }
}
