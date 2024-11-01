// Deeply understand dom tree, root node , element nodes, text nodes

// const rootNode= document.getRootNode();
// console.log(rootNode);
// console.log(rootNode.childNodes);
// const htmlelement=rootNode.childNodes[1];
// console.log(htmlelement);  // html
// // const htmlchild= htmlelement.childNodes; // NodeList(3) [head, text, body]
// const headelemet= htmlelement.childNodes[0]; 
// const textelement= htmlelement.childNodes[1]; 
// const bodyelement= htmlelement.childNodes[2]; 
// console.log(headelemet);
// console.log(headelemet.childNodes);
// console.log(headelemet.parentNode);
// console.log(headelemet.nextSibling);
// console.log("jk",headelemet.nextElementSibling)
// console.log(textelement);
// console.log(bodyelement);


// const h1= document.querySelector("h1");
// h1.parentNode.style.color= "white";
// h1.parentNode.style.backgroundColor="grey";
// console.log(h1.parentNode.parentNode);
// h1.parentNode.parentNode.style.backgroundColor="green";


// const body= document.body;
// const head= document.querySelector("head");
// const title= head.querySelector("title");
// console.log(title)

const div= document.querySelector(".conatiner");
console.log(div.childNodes);
console.log(div.children)



