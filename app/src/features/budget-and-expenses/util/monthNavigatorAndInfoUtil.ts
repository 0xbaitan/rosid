import Months from "../enums/months";

export function getMonthAsString(month: Months) {
  switch (month) {
    case Months.JANUARY:
      return "January";
    case Months.FEBRUARY:
      return "February";
    case Months.MARCH:
      return "March";
    case Months.APRIL:
      return "April";
    case Months.MAY:
      return "May";
    case Months.JUNE:
      return "June";
    case Months.JULY:
      return "July";
    case Months.AUGUST:
      return "August";
    case Months.SEPTEMBER:
      return "September";
    case Months.OCTOBER:
      return "October";
    case Months.NOVEMBER:
      return "November";
    case Months.DECEMBER:
      return "December";
    default:
      throw new Error("Impossible. Illegal Month entered");
  }
}

export function getThreeLetterMonth(month: Months) {
  const monthStr = getMonthAsString(month);
  const threeLetterCode = monthStr.slice(0, 3).toUpperCase();
  return threeLetterCode;
}
