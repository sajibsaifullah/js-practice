// Example-01
function showDate() {
  document.getElementById("date").innerHTML = Date();
}

// Example-02
document
  .getElementById("btn-change-text")
  .addEventListener("click", function () {
    document.getElementById("change-text").innerText = "wow! it works";
  });

// Example-03
function smile() {
  document.getElementById("emoji").src = "images/smile.gif";
}
function sad() {
  document.getElementById("emoji").src = "images/sad.gif";
}

// Example-04
function changeStyle() {
  document.getElementById("font-size").style.fontSize = "30px";
}

// Example-05
function hideText() {
  document.getElementById("hide").style.display = "none";
}

// Example-06
function showText() {
  document.getElementById("show").style.display = "block";
}

// Example-07
function changeColor() {
  document.getElementById("text-color").style.color = "red";
}

// Example-08
function changeBgColor() {
  document.getElementById("text-bg-color").style.backgroundColor = "yellow";
}

// Example-09
document.getElementById("chk-console").addEventListener("click", function () {
  console.log("I'm clicked");
});

// Example-10
document.getElementById("btn-post").addEventListener("click", function () {
  const post = document.getElementById("post-text");
  const postText = document.getElementById("post-text").value;
  const defaultPost = document.getElementById("default-post");
  defaultPost.innerText = postText;
  post.value = "";
});

// Example-11
document
  .getElementById("btn-new-comment")
  .addEventListener("click", function () {
    const post = document.getElementById("new-comment");
    const newPost = post.value;

    const commentContainer = document.getElementById("comment-container");
    const pTag = document.createElement("p");
    // pTag.innerText = newPost;
    pTag.innerHTML = `
        <p class="fs-4 mb-0">${newPost}</p>
    `;
    commentContainer.appendChild(pTag);
    post.value = "";
  });

// Example-12
document.getElementById("addition").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);

  const result = number1 + number2;

  if (isNaN(result)) {
    alert("Please input valid number");
    return;
  }

  const publishResult = document.getElementById("add-result");
  publishResult.innerText = result;
});

// Example-13
document.getElementById("subtraction").addEventListener("click", function () {
  const number3 = parseFloat(document.getElementById("number3").value);
  const number4 = parseFloat(document.getElementById("number4").value);

  const result = number3 - number4;

  if (isNaN(result)) {
    alert("Please input valid number");
    return;
  }

  const publishResult = document.getElementById("sub-result");
  publishResult.innerText = result;
});

// Example-14
document
  .getElementById("multiplication")
  .addEventListener("click", function () {
    const number5 = parseFloat(document.getElementById("number5").value);
    const number6 = parseFloat(document.getElementById("number6").value);

    const result = number5 * number6;

    if (isNaN(result)) {
      alert("Please input valid number");
      return;
    }

    const publishResult = document.getElementById("multi-result");
    publishResult.innerText = result;
  });

// Example-15
document.getElementById("division").addEventListener("click", function () {
  const number7 = parseFloat(document.getElementById("number7").value);
  const number8 = parseFloat(document.getElementById("number8").value);

  const result = number7 / number8;

  if (isNaN(result)) {
    alert("Please input valid number");
    return;
  }

  const publishResult = document.getElementById("div-result");
  publishResult.innerText = result;
});

// Example-16
document.getElementById("remainder").addEventListener("click", function () {
  const number9 = parseFloat(document.getElementById("number9").innerText);
  const number10 = parseFloat(document.getElementById("number10").innerText);

  const result = number9 % number10;

  const publishResult = document.getElementById("rem-result");
  publishResult.innerText = result;
});

// Example-17
let number17 = parseFloat(document.getElementById("number17").innerText);
document.getElementById("increment").addEventListener("click", function () {
  const publishResult = document.getElementById("inc-result");
  publishResult.innerText = number17 += 1;
});

// Example-18
let number18 = parseFloat(document.getElementById("number18").innerText);
document.getElementById("decrement").addEventListener("click", function () {
  const publishResult = document.getElementById("dec-result");
  publishResult.innerText = number18 -= 1;
});

// Example-19
document.getElementById("triangle").addEventListener("click", function () {
  const base = document.getElementById("base").innerText;
  const height = document.getElementById("height").innerText;

  const result = 0.5 * base * height;

  const publishResult = document.getElementById("tri-result");
  publishResult.innerText = result;
});

// Example-20
document.getElementById("rectangle").addEventListener("click", function () {
  const width = document.getElementById("width").innerText;
  const length = document.getElementById("legnth").innerText;

  const result = width * length;

  const publishResult = document.getElementById("rec-result");
  publishResult.innerText = result;
});

// Example-21
document.getElementById("parallelogram").addEventListener("click", function () {
  const base = document.getElementById("p-base").innerText;
  const height = document.getElementById("p-height").innerText;

  const result = base * height;

  const publishResult = document.getElementById("p-result");
  publishResult.innerText = result;
});

// Example-22
document.getElementById("rhombus").addEventListener("click", function () {
  const d1 = document.getElementById("d1").innerText;
  const d2 = document.getElementById("d2").innerText;

  const result = 0.5 * d1 * d2;

  const publishResult = document.getElementById("r-result");
  publishResult.innerText = result;
});

// Example-23
document.getElementById("pentagon").addEventListener("click", function () {
  const p = document.getElementById("p").innerText;
  const b = document.getElementById("b").innerText;

  const result = 0.5 * p * b;

  const publishResult = document.getElementById("pen-result");
  publishResult.innerText = result;
});

// Example-24
document.getElementById("ellipse").addEventListener("click", function () {
  const a = document.getElementById("a").innerText;
  const b = document.getElementById("e-b").innerText;

  const result = (3.1416 * a * b).toFixed(2);

  const publishResult = document.getElementById("e-result");
  publishResult.innerText = result;
});

// Example-25
function fullName() {
  const fName = document.getElementById("f-name").innerText;
  const lName = document.getElementById("l-name").innerText;

  document.getElementById("full-name").innerText = fName + " " + lName;
}

// Example-26
document.getElementById("chk-26").addEventListener("click", function () {
  const number = parseInt(document.getElementById("num-26").innerText);
  const result = typeof number;
  const publishResult = document.getElementById("type-26");
  publishResult.innerText = result;
});

// Example-27
document.getElementById("chk-27").addEventListener("click", function () {
  const text = document.getElementById("text-27").innerText;
  const result = typeof text;
  const publishResult = document.getElementById("type-27");
  publishResult.innerText = result;
});

// Example-28
document.getElementById("btn-28").addEventListener("click", function () {
  document.getElementById("result-28").innerText = Math.floor(
    Math.random() * 6
  );
});

// Example-29
function fontStyle() {
  document.getElementById("font-style").style.fontStyle = "italic";
}

// Example-30
function textAlign() {
  document.getElementById("text-align").style.textAlign = "center";
}

// Example-31
function textUnderline() {
  document.getElementById("text-underline").style.textDecoration = "underline";
}

// Example-32
function border() {
  document.getElementById("border").style.border = "1px solid red";
}

// Example-33
function hideImage() {
  document.getElementById("hide-img").style.display = "none";
}

// Example-34
function showImage() {
  document.getElementById("show-img").style.display = "block";
}

// Example-35
function imageBorder() {
  document.getElementById("img-border").style.borderRadius = "20px";
}

// Example-36
function wordReverse() {
  document.getElementById("word-reverse").innerText = document
    .getElementById("word-reverse")
    .innerText.split("")
    .reverse()
    .join("");
}

// Example-37
function showAlert() {
  alert("Warning.............!!!!!!!!");
}

// Example-38
document.getElementById("in-to-ft").addEventListener("click", function () {
  const inch = document.getElementById("num-38").value;
  const result = (parseFloat(inch) / 12).toFixed(2);
  if (isNaN(result)) {
    return alert("Please in a valid number.");
  }
  document.getElementById("r-38").innerText = result;
});

// Example-39
document.getElementById("mile-to-km").addEventListener("click", function () {
  const mile = document.getElementById("num-39").value;
  const result = (parseFloat(mile) * 1.61).toFixed(2);
  if (isNaN(result)) {
    return alert("Please in a valid number.");
  }
  document.getElementById("r-39").innerText = result;
});

// Example-40
document.getElementById("even-or-odd").addEventListener("click", function () {
  const number = parseFloat(document.getElementById("num-40").value);

  if (isNaN(number)) {
    return alert("Please in a valid number.");
  }

  if (number % 2 == 0) {
    return (document.getElementById("r-40").innerText = "Even");
  } else {
    return (document.getElementById("r-40").innerText = "Odd");
  }
});

// Example-41
document.getElementById("leap-yr").addEventListener("click", function () {
  const year = parseInt(document.getElementById("num-41").value);

  if (isNaN(year)) {
    return alert("Please in a valid number.");
  }

  if (year % 4 == 0 && year % 100 !== 0) {
    document.getElementById("r-41").innerText = "Leap Year";
    return;
  } else if (year % 400 == 0) {
    document.getElementById("r-41").innerText = "Leap Year";
    return;
  } else {
    document.getElementById("r-41").innerText = "Not Leap Year";
    return;
  }
});

// Example-42
document.getElementById("btn-42").addEventListener("click", function () {
  document.getElementById("result-42").innerText = Math.ceil(
    Math.random() * 100000
  );
});

// Example-43
document.getElementById("toggle-btn").addEventListener("click", function () {
  let textChange = document.getElementById("text-43").innerText;

  if (textChange == "Sakib Khan") {
    textChange = "King Khan";
    document.getElementById("text-43").innerText = textChange;
  } else {
    textChange = "Sakib Khan";
    document.getElementById("text-43").innerText = textChange;
  }
});

// Example-44
document.getElementById("click-44").addEventListener("click", function () {
  function reverseString(string) {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
      // console.log(string[i], i)
      newString = newString + string[i];
    }
    //   console.log(newString);
    return newString;
  }

  const inputString = "hello world";
  const result = reverseString(inputString);
  // console.log(result);

  document.getElementById("r-44").innerText = result;
});

// Example-45
document.getElementById("click-45").addEventListener("click", function () {
  function sumOfAllPositiveNumbers(array) {
    let sum = 0;
    for (let i = 0; i <= array.length; i++) {
      // console.log(array[i], i)
      if (array[i] >= 0) {
        sum += array[i];
      }
    }
    return sum;
  }

  const numbers = [2, -5, 10, -3, 7];
  const result = sumOfAllPositiveNumbers(numbers);
  // console.log(result);

  document.getElementById("r-45").innerText = result;
});

// Example-46
document.getElementById("click-46").addEventListener("click", function () {
  const mostFrequentElement = (array) => {
    let count = {};
    let maxCount = 0;
    let mostFrequent = null;

    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (count[element] === undefined) {
        count[element] = 1;
      } else {
        count[element]++;
      }

      if (count[element] > maxCount) {
        maxCount = count[element];
        mostFrequent = element;
      }
    }
    return mostFrequent;
  };

  const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const result = mostFrequentElement(inputArray);
  // console.log(result);

  document.getElementById("r-46").innerText = result;
});

// Example-47
document.getElementById("click-47").addEventListener("click", function () {
  const findNumbersArr = (storedArray, targetValue) => {
    // using two pointer method
    let leftPointer = 0;
    let rightPointer = storedArray.length - 1;
    while (leftPointer < rightPointer) {
      const sum = storedArray[leftPointer] + storedArray[rightPointer];
      // console.log(storedArray[leftPointer], storedArray[rightPointer], sum);
      if (sum === targetValue) {
        return [leftPointer, rightPointer];
      } else if (sum < targetValue) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }
  };

  const inputArray = [1, 3, 6, 9, 11, 15];
  const inputTarget = 9;
  const result = findNumbersArr(inputArray, inputTarget);
  // console.log(result);

  document.getElementById("r-47").innerText = result;
});

// Example-48
function redirect(){
  location.href = "http://www.w3schools.com"
}

// Example-49
function twoDecimal(){
  const number = parseFloat(document.getElementById('num-49').innerText).toFixed(2);

  document.getElementById("r-49").innerText = number;
}

// Example-50
function modeChange(){
  const element = document.body;
  element.classList.toggle("dark-mode");
}
