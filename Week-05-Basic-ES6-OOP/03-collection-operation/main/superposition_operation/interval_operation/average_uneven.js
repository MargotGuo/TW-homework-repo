"use strict";

const average_uneven = (collection) => {
  const targetOdd = collection.filter(number =>
    number < 10 && number > 0 && number % 2);
  return targetOdd.reduce((sum, number, index) =>
    (sum * index + number) / (index + 1));
};

module.exports = average_uneven;
