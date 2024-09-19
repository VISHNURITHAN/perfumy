import React from "react";
import ReactDom from "react-dom/client";
import "./style.css";
import App from "./App.js"


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>
    <App />
    </>
);

// //onclick function
// var btn = document.getElementById("btn")
// var pop = document.getElementById("popover")
// // var overlay = document.getElementById("overlay")
// btn.addEventListener("click",function(){
//   pop.style.display="block"
// })


