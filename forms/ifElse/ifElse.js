/*Creates the variables for first name, state, temperature, and message*/

let firstName = ''
let userState = ''
let userTemperature = ''
let userMessages = ['wear a warm coat, hat, scarf and gloves.','wear a warm coat but you won't need a hat, scarf or gloves.','wear your warmest coat, a warm hat, a scarf, and warm gloves.','wear a warm coat, hat and gloves. Maybe a scarf too.']


if ${userTemperature} is "under 32 degrees" AND ${userState} is "NE" {
 console.log('Katelyn, [0]');
 }
