// Create a <div> with some text and append it to the body.     

let newdiv = document.createElement("div");

newdiv.innerText = "i'm a newdiv";

document.querySelector("body").append(newdiv);


// Create an <img> tag, set its src, and add it to the page.

let img = document.createElement("img");

img.src = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg";

img.alt = "image";

img.width = 150;

document.querySelector("body").appendChild(img);


// Select a paragraph and change its text.

document.querySelector("p").innerText = "added a new text!!";


// Qs. Create a <p> tag in html, give it a class & some styling. 
// Now create a new class in CSS and try to append this class to the <p> element.
//  Did you notice, how you overwrite the class name when you add a new one?
//  Solve this problem using classList.


let para = document.querySelector("p");
// para.setAttribute("class","newclass");
para.classList.add("newcontent");



//  Qs. Create a new button element. Give it a text “click me”, background color of red & text color
//  of white.
//  Insert the button as the first element inside the body tag

let btn = document.createElement("button");
btn.innerText = "click me!";

btn.style.color = "white";
btn.style.backgroundColor = "red";

document.querySelector("body").prepend(btn);



// Qs. Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College
//  students” to this text using JS

// const { createElement } = require("react");

// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText + " from college student";
// console.log(h2.innerText);



//  Qs. Create 3 divs with common class name - “box”. Access them & add some unique text to each
//  of them.

// let divs = document.querySelectorAll(".box");
// let idx = 1;

// for(div of divs) {
//     div.innerText = `new value div ${idx}`;
//     idx++;
// }


// divs[0].innerText = "new value div 1st";
// divs[1].innerText = "new value div 2nd";
// divs[2].innerText = "new value div 3rd";