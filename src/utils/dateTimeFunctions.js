export const showTime = UTCString => {
  const date = new Date(UTCString);
  return date.toLocaleTimeString([], { hour12: false });
};
