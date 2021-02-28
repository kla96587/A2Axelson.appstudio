/*Creates the variables for first name, state, temperature, and message. The variable first 3 variables feature a prompt that will pop up on the users screen asking them for required information. The last variable of userMessages will be what we input into the console to give a message to the user based on their inputed values.  */
let userName = prompt("Type your first name")
let userState = prompt ("Insert your states abbreviation (i.e. NE)")
let userTemp = prompt("Insert the current temperature in degrees fahrenheit ")
let usersMessages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you wont need a hat, scarf or gloves.","wear your warmest coat, a warm hat, a scarf, and warm gloves.","wear a warm coat, hat and gloves. Maybe a scarf too."]

let userState = 'NE' && userTemp < 32;

switch(userState && userTemp) {
  case ('userState = 'NE' && userTemp < 32'):
  console.log(`${userName}, ${usersMessages[0]}`);
  break;
  case ('userState = 'NE' && userTemp>=32 && userTemp < 50'):
   console.log(`${userName}, ${usersMessages[1]}`);
  break;
   case ('userState == 'FL' && userTemp >= 32 && userTemp < 50'):
   console.log(`${userName}, ${usersMessages[2]}`);
  break;
    case ('userState == 'FL' && userTemp>=50 && userTemp < 70'):
    console.log(`${userName}, ${usersMessages[3]}`);
  break;
}