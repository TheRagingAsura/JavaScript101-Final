const mainUser = {
  'name': 'Nikolai',
  'age': 23,
  'height': "5'9\"",
  'speak': function(want="food") {
    console.log(`${mainUser.name} wants ${want}`)
  },
  friend(friendName="You"){
    console.log(`My friends name is ${friendName}`)
  }
} 

mainUser.speak("to sleep");
mainUser.friend("Matt");

let sup = mainUser.speak();
