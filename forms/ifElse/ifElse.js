/*Creates the variables for first name, state, temperature, and message*/
let name = prompt("Type your first name")
let state = prompt ("Insert your states abbreviation (i.e. NE)")
let temp = prompt("Insert the current temperature in degrees fahrenheit ")

if ( temp < 32 && state == 'NE')
 console.log(`${name}, you should be wearing a warm coat, hat, scarf and gloves.`)
 
else if (temp>=32 && temp < 50 && state == 'NE')
    console.log(`${name}, you should be wearing a warm coat but you won't need a hat, scarf or gloves.`)

else if (temp>=32 && temp < 50 && state == 'FL')
    console.log(`${name}, you should be wearing your warmest coat, a warm hat, a scarf, and warm gloves.`)   
 
else if ((temp>=50 && temp < 70 && state == 'FL'))
    console.log(`${name}, you should be wearing a warm coat, hat and gloves. Maybe a scarf too.`)
 
    