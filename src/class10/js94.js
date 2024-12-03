// query selector

const h2=document.querySelector("#main-heading");
const head=document.querySelector(".header");
const node= document.querySelectorAll(".nav-item");// nodelist
node.forEach((items)=>{
    console.log(items.textContent);
    items.style.backgroundColor="blue"
});




// const html= document.getElementsByTagName("li");// html collection
// Array.from(html).forEach((items)=>{
//      items.style.color="blue"
// })

console.log(head)
console.log(h2);


// nodeList
// const nodeList = document.querySelectorAll('p');
// console.log(nodeList.length); // Number of <p> elements at the time of the call

// const newParagraph = document.createElement('p');
// document.body.appendChild(newParagraph);

// console.log(nodeList.length); // Does NOT change, still reflects the initial state


//html collections
// const htmlCollection = document.getElementsByTagName('p');
// console.log(htmlCollection.length); // Initial number of <p> elements

// const newParagraph = document.createElement('p');
// document.body.appendChild(newParagraph);

// console.log(htmlCollection.length); // Updates automatically to reflect the new <p> element


// const nodeList = document.querySelectorAll('p'); // Selects all <p> elements
// console.log(nodeList); // Static NodeList (does not update if DOM changes)

// // Iterate over NodeList
// nodeList.forEach((node) => console.log(node.textContent));


// const htmlCollection = document.getElementsByTagName('p'); // Selects all <p> elements
// console.log(htmlCollection); // Live HTMLCollection (updates if DOM changes)

// // Convert HTMLCollection to an array for iteration
// Array.from(htmlCollection).forEach((element) => console.log(element.textContent));
