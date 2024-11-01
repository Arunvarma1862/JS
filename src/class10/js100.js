// innerhtml

// const header= document.querySelector(".header");
// console.log(header.innerHTML);
// header.innerHTML=`   <nav class=" nav container">
//             <h1 class="logo">Website</h1>
//             <ul class="nav-items">
//                 <li class="nav-item"><a href="/home">Homes</a></li>
//                 <li class="nav-item"><a href="">Abouts</a></li>
//                 <li class="nav-item"><a href="">sign ups</a></li>
//             </ul>
//         </nav>
//         <div class="headline">
//             <h2 id="main-heading">Manage your tasks <span ">Hello</span></h2>
//             <button class="btn btn-headline">Learn more</button>
//         </div>`;


const headline= document.querySelector(".headline");
headline.innerHTML="<h2>inner html changed</h2>";
// headline.innerHTML += `<button class="btn btn-headline">learn more</button>`;
headline.innerHTML += "<button class=\"btn btn-headline\">learn more</button>";
