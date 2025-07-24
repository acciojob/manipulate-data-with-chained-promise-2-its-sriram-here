//your JS code here. If required.
const output = document.getElementById("output");

function delayPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
}

function transformArray() {
  delayPromise([1, 2, 3, 4], 3000)
    .then((arr) => {
      const evenNumbers = arr.filter(num => num % 2 === 0);
      return delayPromise(evenNumbers, 1000);
    })
    .then((filteredArr) => {
      output.innerText = filteredArr.join(",");
      const multiplied = filteredArr.map(num => num * 2);
      return delayPromise(multiplied, 2000);
    })
    .then((finalArr) => {
      output.innerText = finalArr.join(",");
    });
}

transformArray();
