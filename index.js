//task1
const multiplyingArray = [2, 3, 4, 5];
let multiplyingResult = 1;
for (let i = 0; i < multiplyingArray.length; i++) {
  multiplyingResult *= multiplyingArray[i];
}

let multiplyingResult2 = 1;
let index = multiplyingArray.length - 1;
while (index >= 0) {
  multiplyingResult2 *= multiplyingArray[index];
  index--;
}

//task2
//for (let i = 0; i <= 15; i++) {
//  if (i % 2 === 0) {
//    console.log(`${i} is even`);
//  } else {
//    console.log(`${i} is odd`);
//  }
//}

//task3
function randArray(k) {
  let array = [];
  for (let i = 0; i < k; i++) {
    array.push(Math.floor(Math.random() * 500) + 1);
  }
  return array;
}

//task4
function raiseToDegree(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return a ** b;
  }
}

//task5
function findMin() {
  return Math.min.apply(null, arguments);
}

//task6
function findUnique(arr) {
  let isUnique = true;
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current in hash) {
      hash[current] += 1;
    } else {
      hash[current] = 1;
    }
  }
  for (let key in hash) {
    if (hash[key] === 2) {
      isUnique = false;
      break;
    }
  }
  return isUnique;
}

//task7
const lastElem = function (arr, value) {
  if (!value) {
    return arr[arr.length - 1];
  }
  return arr.slice(-value);
};

//task8
function formatString(str) {
  return str[0].toUpperCase() + str.slice(1);
}
