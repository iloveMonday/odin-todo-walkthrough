//testing webpack
console.log("we're so back, baby");

// test out DOM maip via webpack
const contentDIV = document.querySelector(".content");
const testH1 = document.createElement("h1");
testH1.textContent = "HELLO WORLDY// TEST FROM WEBPACK INDEX.JS DOM MANIP";
contentDIV.appendChild(testH1);