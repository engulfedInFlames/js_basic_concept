// const wrapperA = document.querySelector(".wrapperA");
// const wrapperB = document.querySelector(".wrapperB");
// const ul = wrapperB.querySelector("ul");

// const numList = [1, 2, 3, 4, 5];
// const newNumList = numList.map((num) => num * 3);
// const str1 = newNumList.join(" ");

// const p1 = document.createElement("p");
// p1.innerText = str1;
// wrapperA.append(p1);

// const strList = ["One", "Two", "Three", "Four", "Five"];
// const newStrList = strList.filter((item) => item.startsWith("T"));
// const str2 = newStrList.join(" ");

// const p2 = document.createElement("p");
// p2.innerText = str2;
// wrapperA.append(p2);

// /////////////////////////////////////////////////////////////////////////////////
// // Template Literals
// const frag = new DocumentFragment();
// strList.forEach((item) => {
//   const li = document.createElement("li");
//   li.innerText = item;
//   frag.appendChild(li);
// });
// ul.append(frag);

// const print = (item) => console.log(item);
// print`Hello World!`;

// const createTag = (tag) => {
//   const el = document.createElement(tag);
//   el.innerText = "Appended!";
//   return (args) => {
//     const style = args[0];
//     el.style = style;
//     return el;
//   };
// };

// const el1 = createTag("h3")`background-color:tomato;`;
// const el2 = createTag("p")`background-color:teal; font-weight:bold;`;
// wrapperA.append(el1);
// wrapperA.append(el2);

// /////////////////////////////////////////////////////////////////////////////////
// // Array
// const divCollection1 = wrapperA.querySelectorAll(".nothing"); // return nodelist
// const divCollection2 = wrapperA.getElementsByClassName("nothing"); // return HTMLCollection
// console.log(divCollection1);
// console.log(divCollection2);
// divCollection1.forEach(() => console.log("Method: foreach"));
