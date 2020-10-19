let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('h1').onclick = function() {
    alert('别戳我，我怕疼。');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/outlanders.png') {
      myImage.setAttribute('src', 'images/rubick.jpg');
    } else {
      myImage.setAttribute('src', 'images/outlanders.png');
    }
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
    setUserName();
 }
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
  }
if(!localStorage.getItem('name')) {
setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

