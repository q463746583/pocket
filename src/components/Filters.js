import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../action/filters";
import { DateRangePicker } from "react-dates";

class Filters extends React.Component {
  state = {
    focused: null
  };

  render() {
    return (
      <div>
        <input
          type="text"
          defaultValue={this.props.filters.texts}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value.trim()));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount());
            }
          }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
          endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
          onDatesChange={({ startDate, endDate }) => {
            this.props.dispatch(setStartDate(startDate));
            this.props.dispatch(setEndDate(endDate));
          }} // PropTypes.func.isRequired,
          focusedInput={this.state.focused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focused => this.setState({ focused })} // PropTypes.func.isRequired,
          showClearDates={true}
          isOutsideRange={() => false}
          startDateId="randomuniquestringhere"
          endDateId="anotherrandomuniquestring"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(Filters);
