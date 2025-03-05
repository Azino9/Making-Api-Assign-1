// Boilerplate Code for Virtual Assistant API
const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());


const PORT = process.env.PORT || 9124;

/*
Task:
You need to build an API for a virtual assistant that provides customized responses.

Requirements:
1. Create a GET endpoint at "/assistant/greet".
2. The endpoint should accept a "name" as a query parameter (e.g., /assistant/greet?name=John).
3. The API should return a JSON response with:
   a. A personalized greeting using the name provided.
   b. A cheerful message based on the current day of the week.

Example Responses:
- For Monday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Happy Monday! Start your week with energy!"
  }
- For Friday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "It's Friday! The weekend is near!"
  }
- For other days:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Have a wonderful day!"
  }

Add the required logic below to complete the API.
*/


app.get('/assistant/greet', (req,res) => {
  const {name} = req.query;
  try {
        if(!name){
      return res.status(400).json({
        message : "All fileds are required"
      })

    }
      // The Below Date().toLocaleDateString is used so that it would extract the current date from calender and 
      // pop up the message according to the day given , 
      //Eg :- If the today is Monday = it will display the monday message .   
      const weekDay = new Date().toLocaleDateString('en-US',{weekday : 'long'});
      let dayMessage;

      if(weekDay == 'Monday'){
        dayMessage = "Happy Monday! Start your week with energy!";
      }
      if(weekDay == 'Friday'){
        dayMessage = "It's Friday! The weekend is near!";
      }
      if(weekDay == 'Wednesday'){
        dayMessage = "It's Wednesday! Have a Wonderful Wednesday";
      }
      else{
        dayMessage = "Have a wonderful day!";
      }
      return res.status(200).json({
        welcomeMessage : `Hello, ${name}! Welcome to our assistant app!`,
        dayMessage :dayMessage,
        Date : Date() //optional
      })

      }
    
  catch (error) {
    return res.status(500).json({
      message : 'Something went wrong, The server is unable to fetch',
      error : error.errors
    })
  }
})



app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});










