
function makeid(length) {
let result = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;
let counter = 0;
while (counter < length) {
result += characters.charAt(Math.floor(Math.random() * charactersLength));
counter += 1;
}
return result;
}
function getAlllocalstorage(){
Object.keys(localStorage).forEach(key => {
var body1 = document.getElementById("body");


var pLocal = document.createElement("p");
body1.appendChild(pLocal);


body1.innerText +=`${key} - ${localStorage.getItem(key)}\n`;
console.log("done")


});
}
var buttonInput = document.getElementById("buttonText");
var inputText = document.getElementById("inputText");
buttonInput.addEventListener('click',function(){
localStorage.setItem(makeid(10),inputText.value);
console.log("it is saved");
getAlllocalstorage();

})

