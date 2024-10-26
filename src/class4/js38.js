// rest parameters

function app(a,b,c,...d){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    console.log(`d is `,d);
}

app(1,2,2,3,4,5);

function add(...a){
   let total=0;
    for(let ab of a){
       total=total+ab    
    }
    return total;
    
    
 console.log(a);
 console.log(typeof a);
 console.log(Array.isArray(a))
}

const x=add(1,2,3,4,5,6);
console.log(x)