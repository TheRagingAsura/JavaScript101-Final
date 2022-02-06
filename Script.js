function addNumbers(greetingName, ...numbers) {
  let total = 0;
  for(index in numbers){
    total = total + numbers[index];
  }
return `${greetingName} the total is ${total}`;
}

const newTotal = addNumbers("John", 1, 2);
console.log(newTotal);