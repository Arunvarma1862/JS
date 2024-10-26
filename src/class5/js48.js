// find method

const arr=["lion","dog","elephant","tiger"];

//one
const finding=(str)=>{
    return str.length===5
}
let newArr=arr.find(finding);
console.log(arr);
console.log(newArr);

//two

const users=[
    {id:1,username:"virat"},
    {id:2,username:"singh"},
    {id:3,username:"ram"},
    {id:4,username:"sita"},
    {id:5,username:"kohil"},

]

let user=users.find((user)=>{
    return user.id===3
});
console.log(user)