export const generateHashColor = () => {
  const rand = () =>
    Math.round(Math.random() * 255)
      .toString(16)
      .padStart(2, '0');
  return '#' + rand() + rand() + rand();
};

export const checkHashColorLightness = (colorString, treshold = 127) => {
  if (colorString[0] !== '#') return;
  const { r, g, b } = {
    r: parseInt(colorString.slice(1, 3), 16),
    g: parseInt(colorString.slice(3, 5), 16),
    b: parseInt(colorString.slice(5), 16),
  };
  const avg = (r + g + b) / 3;
  return avg > treshold;
};
