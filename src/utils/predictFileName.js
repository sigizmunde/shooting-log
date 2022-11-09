const predictFileName = prevName => {
  let name = prevName;
  if (!name || name.length < 1) return '';
  let i = name.length - 1;
  while (i >= 0) {
    if (!isNaN(name[i])) {
      const digit = Number(name[i]);
      if (digit < 9) {
        name = name.substring(0, i) + (digit + 1) + name.substring(i + 1);
        return name;
      }
      name =
        predictFileName(name.substring(0, i)) + '0' + name.substring(i + 1);
      return name;
    }
    i -= 1;
  }
  return null;
};

export default predictFileName;
