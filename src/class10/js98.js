//  get multiple elements using getelementsbyclassName
//  get multiple elements using queryselectorAll


const navItems= document.getElementsByClassName("nav-item");  // html collections
// const navItems= document.querySelectorAll(".nav-item");  // node list
console.log(navItems);
console.log(typeof navItems);
console.log(Array.isArray(navItems));
console.log(navItems[2]);



// const nodeList = document.querySelectorAll('p'); // Selects all <p> elements
// console.log(nodeList); // Static NodeList (does not update if DOM changes)

// // Iterate over NodeList
// nodeList.forEach((node) => console.log(node.textContent));


// const htmlCollection = document.getElementsByTagName('p'); // Selects all <p> elements
// console.log(htmlCollection); // Live HTMLCollection (updates if DOM changes)

// // Convert HTMLCollection to an array for iteration
// Array.from(htmlCollection).forEach((element) => console.log(element.textContent));
