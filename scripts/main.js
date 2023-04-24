const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/ojisan.png") {
    myImage.setAttribute("src", "images/ojisan-2.jpeg");
  } else {
    myImage.setAttribute("src", "images/ojisan.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
const headingOriginal = 'Isekai Ojisan - 異世界おじさん'

function setUserName(readStorage = true) {
  let userName = readStorage && localStorage.getItem("name");

  while (!userName) {
    userName = prompt("Please enter your name.");
  }

  localStorage.setItem("name", userName);

  myHeading.textContent =
    "You should watch " + headingOriginal + `, ${userName}`;
}

setUserName()

myButton.onclick = () => {
  setUserName(false);
};
