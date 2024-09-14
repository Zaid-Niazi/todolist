function formatDate(inputDate) {
  let date = new Date(inputDate);

  let day = date.getDate();
  let month = date.toLocaleString("default", { month: "short" });
  let year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
export { formatDate };
