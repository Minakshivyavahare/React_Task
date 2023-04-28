const input = document.getElementsByClassName('inp')[0]
function fun() {
    
    const inputField= 
      `
          <input type='text' name='text' id="myText"><button id="btn3" type='button' onclick="myFunction()">Click Me</button></input>
          <input type='text' name='text'><button type='button'>Click Me</button></input>
          <input type='text' name='text' id="color1"><button type='button' onclick="changeColor()">Click Me</button></input>
          <input type='text' name='text'><button type='button'>Click Me</button></input>
        
          `
    input.innerHTML = inputField;
    
}
function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
}



function changeColor() {
  var color = document.getElementById("color1").value;
  var body = document.getElementsByTagName("body")[0];

  body.style.backgroundColor = color;
}



// let button = document.querySelector('#button')
// let button2 = document.querySelector('#btn')
// button.addEventListener('click', function () {
//   var name1 = prompt("What is your name?");
//     button2.innerHTML = name1;
   
// });






