// lexical scope

const var1 = "value1";
function app() {
  // const var1="value1";
  function func1() {
    // const var1="value2"
    const func2 = () => {
      console.log("hello world", var1);
    };
    func2();
  }
  // const func2=function(){}
  // const func3=()=>{}
  console.log(var1);
  func1();
}
app();
