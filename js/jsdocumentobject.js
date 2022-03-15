// let val;

// val = document;
// val = document.doctype;
// val = document.head;
// val = document.body;
// val = document.URL;

// val = document.links; //HTMLCOLLECTION
// val = document.links[0];
// val = document.links[3];
// val = document.links[0].id;
// val = document.links[1].className;
// val = document.links[2].classList; //DOMTOKENLIST
// val = document.links[0].classList[1];
// val = document.links[0].classList[0];

// val = document.forms; //HTMLCOLLECTION
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].className;
// val = document.forms[0].classList;
// val = document.forms[0].classList[0];
// val = document.forms[0].action;
// val = document.forms[0].method;

// val = document.images;//HTML COLLECTION
// val = document.images[0];
// val = document.images[0].src;
// val = document.images[0].className;
// val = document.images[0].classList;
// val = document.images[0].alt;
// val = document.images[0].getAttribute('abc');

// val = document.scripts;//HTML COLLECTION
// val = document.scripts[0];
// val = document.scripts[0].src;
// val = document.scripts[0].type;
// val = document.scripts[0].getAttribute('src');
// val = document.scripts[0].getAttribute('type');

// // console.log(val);

// //10/3/2022
// //Change Styling
// document.getElementById("tasktitle").style.background = "grey";
// document.getElementById("tasktitle").style.color = "#fff";
// document.getElementById("tasktitle").style.padding = "5px";

// //Change Content
// document.getElementById("tasktitle").textContent = "My List";
// // document.getElementById("tasktitle").innerText = "My Tasks";
// document.getElementById("tasktitle").innerHTML = `<span style="color: yellow;">My Tasks</span>`;
//'* html code တွေသုံးရင် back tip `` ပဲသုံးလို့ရမယ်

// //Call to Class Name
let lis = document.getElementsByClassName("list-group-item");// HTML COLLECTION
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = "blue";
// lis[1].textContent = "Have to visit";

// Call to Tag
// let litags = document.getElementsByTagName("li");// HTML COLLECTION
// console.log(litags);
// console.log(litags[0]);
// litags[0].style.color = "red";
// litags[1].innerText = "Have to cook";

// querySelector
console.log(document.querySelector("#tasktitle"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h3"));

console.log(document.querySelector("li"));
document.querySelector("li").style.color = "green";
document.querySelector("ul li").style.color = "blue";
// document.querySelector("ul li:nth-child(odd)").style.backgroundColor = "silver";
// document.querySelector("ul li:nth-child(even)").style.backgroundColor = "grey";
// document.querySelector("ul li:last-of-type").style.backgroundColor = "silver";
document.querySelector("ul li:nth-of-type(3)").textContent = "Have to read";

//querySelectorAll