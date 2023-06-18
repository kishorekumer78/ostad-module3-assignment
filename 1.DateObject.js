// 1.Date Object:
// a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.
// b. Implement the function to display the day of the week for the current date.
/**
 *
 * @param {*} dateString in the format "YYYY-MM-DD"
 * @returns name of day of the week as string
 */
function getDayOfWeek(dateString) {
  const dateArray = dateString.split("-");
  const year = parseInt(dateArray[0]);
  const month = parseInt(dateArray[1]) - 1;
  const day = parseInt(dateArray[2]);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(year, month, day);
  const nameOfDay = weekday[date.getDay()];
  return nameOfDay;
}

/**
 *Utility function to receive date in particular format
 * @param dateStr
 * @default currentDate
 * @returns date as string in "YYYY-MM-DD" format
 */
function getDateInFormat(dateStr = new Date().toDateString()) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}

const date = getDateInFormat();
const dayName = getDayOfWeek(date);
console.log(dayName);
