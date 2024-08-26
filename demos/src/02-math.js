function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
  return null;
  }
  return a / b;
}

function calculatePercentage(total, part) {
  if (total === 0) {
    return 0;
  }
  return (part / total) * 100;
}

module.exports = {
  sum,
  multiply,
  divide
};
