export const showTime = UTCString => {
  const date = new Date(UTCString);
  return date.toLocaleTimeString([], { hour12: false });
};

export const showDate = UTCString => {
  const date = new Date(UTCString);
  const stringifiedDate = `${date.getDate().toString().padStart(2, '0')}.${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}.${date.getFullYear()}`;
  return stringifiedDate;
};

export const showUnderlinedDate = UTCString => {
  const date = new Date(UTCString);
  const stringifiedDate = `${date.getFullYear()}_${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}_${date.getDate().toString().padStart(2, '0')}`;
  return stringifiedDate;
};
