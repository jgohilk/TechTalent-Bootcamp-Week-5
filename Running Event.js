let raceNumber = Math.floor(Math.random()* 1000);
var early = true;
var age = 1;

if(age > 18 && early == true){
    let raceNumber =+1000
    console.log("Your race will start at 9:30am" + raceNumber)
}
else if(age > 18 && early == false){
    console.log("Your race will start at 11:00am" + raceNumber)
}
else if(age = 18){
    console.log("Please go the reception desk")
}
else{
console.log("Your race will start at 12:30pm" + raceNumber)
}