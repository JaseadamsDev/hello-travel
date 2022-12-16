
    function greetVisitor(){
    let name = prompt("What is your nickname?");
    if(name ==""){
     name = prompt("I'm not kidding, tell me your name!");
    }
    document.write("Howdy, " + name + "!");
}

greetVisitor();


function ageVisitor(){
    let age = prompt("How old are you?");
    if(age ==""){
     age = prompt("I'm not kidding, tell me your age!");
    }
    document.write("   " + age + "  years old....WOW! Your'e so old, but   ");
}

ageVisitor();

function guessMyAge() {
    let answer;

    while(answer != 36) {
        answer = prompt('Guess my age. Hint: between 30-40');
        if (answer !=36) {
            alert('Nope, Try again!');
        } else {
            alert('Yes, that is correct!');
        }
    }
}

guessMyAge();


function displayHappy() {

    let output = '';
    let happy = prompt('scale from 1-4, how happy are you? *4 being very happy :D *');
    for(let i = 0; i < happy; i++){
        output += "<img class='happy' src='smiling-face.png'/>"; 
    }

    return document.write(output);
}
displayHappy();


function passportVisitor(){

let passport = prompt("Do you have a passport?");
if (passport =="yes"){
  document.write("  welcome to my site. :) ");
} else {
  document.write("Go apply for your passport.. bye!");
 window.location.href = "https://travel.state.gov/content/travel/en/passports/how-apply.html";
  
}
}
passportVisitor();

