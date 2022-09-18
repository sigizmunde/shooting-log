export const generateHashColor = () => {
  const rand = () =>
    Math.round(Math.random() * 255)
      .toString(16)
      .padStart(2, '0');
  return '#' + rand() + rand() + rand();
};
