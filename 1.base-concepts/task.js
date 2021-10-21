function solveEquation(a, b, c) {
  let arr = [];
  let D = b ** 2 - 4 * a * c;
  if (D === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  }
  else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr.push(x1);
    arr.push(x2); 
  }
  else {
    arr;
  }

  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let creditAmount = amount - contribution;
  let current = new Date();
  let mortgageTerm = date;
  let currentDate;
  let mortgageTermDate;
  let full_month;
  let monthlyPercentage;
  let monthlyPayment;

  if (current.getUTCFullYear() < mortgageTerm.getUTCFullYear()) {
    currentDate = current;
    mortgageTermDate = mortgageTerm;
  }
  else {
    currentDate = mortgageTerm;
    mortgageTermDate = current;
  }
  full_month = (mortgageTermDate.getUTCFullYear() - currentDate.getUTCFullYear()) * 12 + (mortgageTermDate.getUTCMonth() - currentDate.getUTCMonth());
  if (currentDate.getUTCDate() > mortgageTermDate.getUTCDate()) { 
    full_month--;
  }
  percent = percent / 100;
  if (percent <= 1 && percent >= 0) {
    monthlyPercentage = percent / 12;
    monthlyPayment = creditAmount * (monthlyPercentage + monthlyPercentage / (((1 + monthlyPercentage) ** full_month) - 1));
  }
  else {
    alert('Неверно введен процент, обновите страницу и введите верное значение!');
  }
  totalAmount = creditAmount + (monthlyPayment * full_month);
  totalAmount = totalAmount.toFixed(2);
  // код для задачи №2 писать здесь

  return totalAmount;
}
