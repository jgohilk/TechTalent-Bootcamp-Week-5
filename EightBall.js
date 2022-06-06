var userName = "Jack"
if(userName = "Jack"){
    console.log("Hello" + "userName")
}
else{
    console.log("Hello User")
}

var userQuestion = "What will you be graduating with";

let randomNumber = Math.floor((Math.random()*7)+ 0);

let eightBall = "";

if(randomNumber == 0){
    let eightBall = "You will be graduating with a 1st";
    console.log(randomNumber + eightBall);
}
else if(randomNumber == 1){
    let eightBall = "You will be graduating with a 2:1";
    console.log(randomNumber + eightBall);

}
else if(randomNumber == 2){
    let eightBall = "You will be graduating with a 2:2";
    console.log = (randomNumber + eightBall);

}
else if(randomNumber == 3){
    let eightBall = "You will be graduating with a third";
    console.log(randomNumber + eightBall);
}
else if(randomNumber == 4){
    let eightBall = "You will be failing this year";
    console.log(randomNumber + eightBall);
}
else if(randomNumber == 5){
    let eightBall = "Cannot predict";
    console.log(randomNumber + eightBall);

}
else if(randomNumber == 6){
    let eightBall = "Your a class topper";
    console.log(randomNumber + eightBall);
}
else{
    let eightball = "spin again"
    console.log(randomNumber + eightBall);
}