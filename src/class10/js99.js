//loop

//get multiple elements using getelementsbyclassName - gives  html collections
// get multiple elements using queryselectorAll-       gives nodelist
// array like object-indexing,length property

//simple for loop
// for of loop
// for each loop - we can't use foreach method to iterate the html collection-Convert HTMLCollection to an array for iteration


                              // simple for loop
// const navItems= document.getElementsByClassName("nav-item");  //gives  html collections
// let navItems= document.getElementsByTagName("a"); 
//   for(let i=0;navItems.length;i++){
//        navItems[i].style.backgroundColor="blue";
//        navItems[i].style.color="white";
//        navItems[i].style.fontWeight="bold";
//   }

                                // for of loop
  // for(let items of navItems){
  //   items.style.backgroundColor="blue";
  //   items.style.color="white";
  //   items.style.fontWeight="bold";
  // }


                                // foreach loop

// navitems= Array.from(navItems);  // convert html collection to array
//   navitems.forEach((element)=>{
//     element.style.color="yellow"
//   })


 
const navItems= document.querySelectorAll("a");  // gives node list
  navItems.forEach((Element)=>{
    Element.style.backgroundColor="blue";
    Element.style.color="white"
  })