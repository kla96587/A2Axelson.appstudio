/*Creates the variables for first name, state, temperature, and message. The variable first 3 variables feature a prompt that will pop up on the users screen asking them for required information. The last variable of userMessages will be what we input into the console to give a message to the user based on their inputed values.  */
let name = prompt("Type your first name")
let state = prompt ("Insert your states abbreviation (i.e. NE)")
let temp = prompt("Insert the current temperature in degrees fahrenheit ")
let userMessages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you wont need a hat, scarf or gloves.","wear your warmest coat, a warm hat, a scarf, and warm gloves.","wear a warm coat, hat and gloves. Maybe a scarf too."]

/*Checks if the temperature is less than 32 degrees AND if their state is NE. If not then it will move to the next line to see if the inputed values fit. */
if ( temp < 32 && state == 'NE')
    console.log(`${name}, ${userMessages[0]}`)

/*Checks if the temperature is greater than or equal to 32 degrees AND less than 50 degrees AS WELL AS if their state is NE. If not then it will move to the next line to see if the inputed values fit. */
else if (temp>=32 && temp < 50 && state == 'NE')
    console.log(`${name}, ${userMessages[1]}`)

/*Checks if the temperature is greater than or equal to 32 degrees AND less than 50 degrees AS WELL AS if their state is FL. If not then it will move to the next line to see if the inputed values fit. */
else if (temp>=32 && temp < 50 && state == 'FL')
    console.log(`${name}, ${userMessages[2]}`)  
    
/*Checks if the temperature is greater than or equal to 50 degrees AND less than 70 degrees AS WELL AS if their state is FL. If not then it will not say anything in the console. */
else if (temp>=50 && temp < 70 && state == 'FL')
    console.log(`${name}, ${userMessages[3]}`)
 
    