const formatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

export const format = date =>
  new Date(date).toLocaleDateString("en-US", formatOptions);
