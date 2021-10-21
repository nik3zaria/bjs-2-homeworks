// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  sum = 0;
  avg = 0;
  min = Infinity;
  max = -Infinity;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    else if (arr[i] < min) {
      min = arr[i];
    }
  }
  sum = arr.map(i => x += i, x = 0).reverse()[0];
  avg = sum / arr.length;
  avg = avg.toFixed(2);
  // Ваш код

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
    sum = arr.map(i => x += i, x = 0).reverse()[0];
    // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  let arr;
  let sum = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    arr = arrOfArr[i];
    sum = func(arr);
    if (max < sum) {
      max = sum;
    }

  }
  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  let difference;
  let max;
  let min;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    else if (arr[i] < min) {
      min = arr[i];
    }
  }
  difference = max - min;
  return difference;
  // Ваш код
}
