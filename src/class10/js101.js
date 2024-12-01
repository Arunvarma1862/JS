// Deeply understand dom tree, root node , element nodes, text nodes

// const rootNode = document.getRootNode();
// console.log(rootNode);     // document
// console.log(rootNode.childNodes); //NodeList(2) [<!DOCTYPE html>, html]
// const htmlelement=rootNode.childNodes[1];
// console.log(htmlelement);   // html
//  const htmlchild= htmlelement.childNodes;   // NodeList(3) [head, text, body]
// const headelemet= htmlelement.childNodes[0];   // head
// const textelement= htmlelement.childNodes[1];  // text
// const bodyelement= htmlelement.childNodes[2];   // body
// console.log(htmlchild) // NodeList(3) [head, text, body]
// console.log(headelemet); // head
// console.log(headelemet.childNodes);  //NodeList(11) [text, meta, text, meta, text, title, text, link, text, script, text]
// console.log(headelemet.parentNode);  // html
// console.log(headelemet.nextSibling);   // text
// console.log("jk",headelemet.nextElementSibling)  // body
// console.log(textelement);  // text
// console.log(bodyelement);  // body


// const h1= document.querySelector("h1");
// console.log(h1)
// // h1.parentNode.style.color= "white";
// // h1.parentNode.style.backgroundColor="grey";
// console.log(h1.parentNode)
// console.log(h1.parentNode.parentNode);
// h1.parentNode.parentNode.style.backgroundColor="green";


// const body= document.body;
// const head= document.querySelector("head");
// const title= head.querySelector("title");
// console.log(title)

const div= document.querySelector(".container");
console.log(div)
console.log(div.childNodes);
console.log(div.children)



