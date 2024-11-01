//get multiple elements using getelementsbyclassName
// get multiple elements using queryselectorAll

// const navItems= document.getElementsByClassName("nav-item");  // html collections
const navItems= document.querySelectorAll(".nav-item");  // node list
console.log(navItems);
console.log(typeof navItems);
console.log(Array.isArray(navItems));
console.log(navItems[2]);