module.exports = () => {
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const year = randomInt(1995, 2019);
  const month = randomInt(1, 12);
  const day = randomInt(1, 28);

  return `${year}/${month}/${day}`;
};
