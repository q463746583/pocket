import moment from "moment";

export default (
  expenses,
  { note, description, text, sortBy, startDate, endDate }
) => {
  return expenses
    .filter(expense => {
      const createAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createAtMoment)
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createAtMoment)
        : true;
      const textMatch =
        expense.description.toLowerCase().includes(text.toLowerCase()) ||
        expense.note.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
