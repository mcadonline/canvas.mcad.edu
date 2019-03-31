export default function prettifyDate(dateStr) {
  const d = new Date(dateStr);
  // eslint-disable-next-line no-unused-vars
  const [day, month, date, year] = d.toString().split(" ");
  return `${month} ${date}, ${year}`;
}
