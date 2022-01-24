const twitter = "@ElonMusk";

if (twitter == "@theragingasura") {
    //execute the code below
    console.log("My Twitter handle is", twitter);
} else {
    //execute the code below if not theragingasura
    console.log(twitter, "is the twitter handle");
}

const age = 17;
if(age >= 18){
    console.log("They are allowed to vote.");
}else {
    console.log("They are not able to vote.")
}
if (age >=21) {
    console.log("And they are allowed to drink.");
} else {
    console.log("Not old enough to drink.")
}


//This is an example of an else if statement, basically a neater way of nesting.
const user ="John"; //In here you can add any name then get the results from below.

if(user == "Nikolai"){
    console.log("Hi Nikolai");
} else if (user == "John") {
    console.log("Hi John");
}
    else {
        console.log("Who are you?")
    }