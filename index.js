// Manipulate DOM with Plain Javascript
// let root = document.getElementById("root");
// let h1 = document.createElement("h1");
// h1.innerHTML = "Hello this is vikas";
// root.appendChild(h1);

// using React & ReactDOM
// import React from "react";
// import ReactDOM from "react-dom";
let h1 = React.createElement(
  "h1",
  { className: "text" },
  "Hello this is vikas"
);
console.log(h1); //React Element Object
let h2 = React.createElement(
  "h3",
  { className: "child" },
  "Hello this is child"
);
// let h3 = <h3 className="child">This is sub child</h3>; //need webpack configuration to support JSX
let div = React.createElement("div", {}, [h1, h2]);
console.log(div);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
