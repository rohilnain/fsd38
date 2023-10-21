// function which is inside another function , 
//then  inner function has access to variables of outer function

function x()
{
    let b=0;
    function y()
    {
        let c=b+1;
        function y()
        {
        let d=c+1;
        return d;
        }
        let e=y();
        return e;
    }
    let f=y();
    return f;
}
let output=x();
console.log(output);

//one more example
function x1() {
    function y1() {
      let a = 900;
      console.log(b);
  
      function abc1() {
        console.log(a+ b);
      }
  
      var b = 100;
  
      abc1();
    }
    y1();
  }
  
x1();