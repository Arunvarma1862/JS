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



const num="val1";
function app1(){
  // const num="val1";
  const func1= function (){
    // const num="val1";
   const func2=()=> {
      // const num="val1";
      console.log("value is", num)
    }
    func2()
  }
  func1()
}


app1()