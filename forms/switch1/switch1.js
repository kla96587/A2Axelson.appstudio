/*Creates the variables for first name, state, temperature, and message. The variable first 3 variables feature a prompt that will pop up on the users screen asking them for required information. The last variable of userMessages will be what we input into the console to give a message to the user based on their inputed values.  */
let userName = prompt("Type your first name")
let userState = prompt ("Insert your states abbreviation (i.e. NE)")
let userTemp = prompt("Insert the current temperature in degrees fahrenheit ")
let usersMessages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you wont need a hat, scarf or gloves.","wear your warmest coat, a warm hat, a scarf, and warm gloves.","wear a warm coat, hat and gloves. Maybe a scarf too."]

/*This switch will work only if these values are true. Then the statement will output the message in the console. 
In the console.log we use template literal to refrence the persons first name and gets the required message from the array. */
switch(true) {
  case (temp < 32 && state == 'NE'):
  console.log(`${name}, ${userMessages[0]}`)
  break;
  
  case (temp>=32 && temp < 50 && state == 'NE'):
  console.log(`${name}, ${userMessages[1]}`)
  break;

  case(temp>=32 && temp < 50 && state == 'FL'):
  console.log(`${name}, ${userMessages[2]}`)   
  break;
  
  case(temp>=50 && temp < 70 && state == 'FL'):
  console.log(`${name}, ${userMessages[3]}`)
  break;
}