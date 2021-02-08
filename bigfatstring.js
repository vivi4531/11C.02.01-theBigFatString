"use strict";

//Setting up - page loading
window.addEventListener("load", start);

function start() {
  console.log("start");
  clickGenerateOutput();
}

function clickGenerateOutput() {
  console.log("Generate output have been clicked.");
  document.querySelector("#generateoutputbutton").addEventListener("click", readOption);
}

//Reads input field
function readInputField() {
    console.log("Have read input in input field");
    //read first number and convert string into a number
    const input = document.querySelector("#input").value;
    return input;
  }

  //Reads option in dropdown
  function readOption(){
      console.log("Have read option from dropdown");

      const input = readInputField();
      const choice = document.querySelector("#choice").value;
      
      if(choice == "option1"){
          choice1(input);
      } else if (choice == "option2"){
          choice2(input);
      }
      else if (choice == "option3"){
        choice3(input);
    }
    else if (choice == "option4"){
        choice4(input);
    }
    else if (choice == "option5"){
        choice5(input);
    }
    else if (choice == "option6"){
        choice6(input);
    }
    else if (choice == "option7"){
        choice7(input);
    }
    else if (choice == "option8"){
        choice8(input);
    }
  }

  //If input is a first name: Make the first character in a name uppercase, and the rest lowercase
  function choice1(input){
    const firstletterinname = input.substring(0,1).toUpperCase();
    const restoflettersinname = input.substring(1).toLowerCase();
    const result = firstletterinname + restoflettersinname; 
    
    console.log(result);
    writeOutputInOutputField(result);
  }
  
  //If input is a full name: Find the first name
  function choice2(input){
     const result = input.split(" ",1); 

     console.log(result);
     writeOutputInOutputField(result);
  }

  //If input is a full name: Find the length of the first name
  function choice3(input){
    const result = input.split(" ",1);

    console.log(result[0].length);
    writeOutputInOutputField(result);
  }

  //If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string
  function choice4(input){

    const firstSpace = input.indexOf(" ");
    const lastSpace = input.lastIndexOf(" ");
    const middlename = input.substring(firstSpace +1, lastSpace); 
    const result = "The middlename is " + middlename + " it starts at index " + (firstSpace + 1) + " and ends at index " + (lastSpace - 1);

    console.log(result);

    writeOutputInOutputField(result);
  }

  //If input is a filename: Check if a filename is .png or .jpg
  function choice5(input){
      
    const jpg = "This is a .jpg"; 
    const png = "This is a .png";

    if(input.endsWith(".jpg")==true){
        writeOutputInOutputField(jpg);
        console.log(jpg); 
    }
    else if (input.endsWith(".png")==true){
        writeOutputInOutputField(png);
        console.log(png); 
    }
    else{
        writeOutputInOutputField("This is not a filename."); 
    }

  }

  //If input is a password: Hide a password with the correct number of *s
  function choice6(input){

    const result = input.replaceAll(/./g, "*");

    console.log(result);

    writeOutputInOutputField(result);
    
  }

  //With any input: Make the third character uppercase
  function choice7(input){

    const randominput = input; 
    const lowercasename = randominput.toLowerCase(); 
    const oneuppercase = lowercasename.substring(2,3).toUpperCase();
    const result = lowercasename.substring(2,3) + oneuppercase + lowercasename.substring(3); 

    console.log(result);

    writeOutputInOutputField(result);
  }

  //With any input: Make a character uppercase, if it follows a space or a hyphen
  //note: Start with handling just the first space, and/or the first hyphen.
  //Plan on how you would make it repeat for multiple occurences, even if you can’t code it succesfully.
  function choice8(input){
      
    const indexspace = input.indexOf(" ");
    const indexhyphen = input.indexOf("-");
    let result = ""; 

    let firstpart = ""; 
    let secondpart = ""; 
    let test = ""; 

    if (indexspace !== -1){
        firstpart  = input.substring(0, indexspace + 1);
        secondpart = input.substring (indexspace, 2);
        test = input.substring(indexspace +1, indexspace+2).toUpperCase(); 
    }
    else if (indexhyphen !== -1){
        firstpart  = input.substring(0, indexhyphen + 1);
        secondpart = input.substring (indexhyphen, 2);
        test = input.substring(indexhyphen +1, indexhyphen+2).toUpperCase(); 
    }
    else{
        result = input; 
    }

    console.log(firstpart + test + secondpart);

    writeOutputInOutputField(result); 
  }

  //Write result into output field
  function writeOutputInOutputField(result){
    document.querySelector("#output").value = result; 

    writeOutputInOutputField(result);
  }

