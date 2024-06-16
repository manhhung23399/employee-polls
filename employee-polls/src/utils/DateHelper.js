export function formatTimestamp(timestamp) {
  const date = new Date(timestamp);

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const isPM = hours >= 12;

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedTime = `${hours}:${minutes.toString().padStart(2, "0")}:${
    isPM ? "PM" : "AM"
  }`;
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return `${formattedTime} | ${formattedDate}`;
}
