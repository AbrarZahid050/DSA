export const expensiveFunc = (value) => {
  for (let i = 0; i <= 1000000000; i++) {
    value += 1;
  }
  return value;
};