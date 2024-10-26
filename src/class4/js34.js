// function inside function

const app = () => {     // arrow function type

  function func1() {    // function declaration type
    console.log("india is my country");
  }

  const func2 = function (num1, num2) {   // function expression type
    return num1 + num2;
  };

  const func3 = (num1, num2) => num1 * num2;   // arrow function shortut type

  console.log("hello world23");
  func1();
  console.log(func2(4, 6));
  console.log(func3(4, 9));
};

app();
