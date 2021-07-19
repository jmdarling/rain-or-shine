export function formatDateAsDayMonthDateYear(date: Date) {
  return `${getDayNameFromDayIndex(
    date.getDay()
  )}, ${getShortMonthNameFromMonthIndex(
    date.getMonth()
  )} ${date.getDate()}, ${date.getFullYear()}`;
}

export function getDayNameFromDayIndex(
  dayIndex: number,
  useShortDay = false
): string {
  switch (dayIndex) {
    case 0:
      return useShortDay ? "Sun" : "Sunday";
    case 1:
      return useShortDay ? "Mon" : "Monday";
    case 2:
      return useShortDay ? "Tue" : "Tuesday";
    case 3:
      return useShortDay ? "Wed" : "Wednesday";
    case 4:
      return useShortDay ? "Thu" : "Thursday";
    case 5:
      return useShortDay ? "Fri" : "Friday";
    case 6:
      return useShortDay ? "Sat" : "Saturday";
    default:
      return "";
  }
}

export function getShortMonthNameFromMonthIndex(monthIndex: number): string {
  switch (monthIndex) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
    default:
      return "";
  }
}
