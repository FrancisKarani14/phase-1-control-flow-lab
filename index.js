function scuberGreetingForFeet(rideDistanceInFeet){ 
  if (typeof rideDistanceInFeet !== 'number' || rideDistanceInFeet < 0) {
     return "Kindly enter a valid distance" 
  }

  
  if (rideDistanceInFeet <= 400) {
    return "This one is on me!";
  }

  else if (rideDistanceInFeet >=400 && rideDistanceInFeet<= 2000) { 
    return "That will be twenty bucks.";
  }
  else if (rideDistanceInFeet < 2000) {
    return "That will be thirty bucks."
    
  }
  
  else if (rideDistanceInFeet <= 2500) { 
    return "I will gladly take your thirty bucks.";
  }
  
  else { 
    return "No can do.";
  }
}


function ternaryCheckCity(destinaionCity){
  // Write your code here!
  if (destinaionCity === "NYC") {
    return "Ok, sounds good.";
    
    
  }else if (destinaionCity !== "NYC") {
    return "No go.";
    
    
  }
}

function switchOnCharmFromTip(tip){
  // write your code here
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous": 
      return "Thank you.";
    default: 
      return "Bye.";
  }
}