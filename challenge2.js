// A program that takes as input the speed of a car
const prompt=require("prompt-sync")()
let x = prompt("speed");
let limit = 70;
//let overspeed=(x- limit)/5 
function test(myspeed){
    
    if (myspeed <= 70) {
        console.log("Ok");
    } else if(myspeed>70) {
        let overspeed=Math.floor((parseInt(myspeed)- limit)/5 )
        if (overspeed>=12){
            console.log("Licensed Cancelled");
        }
        
        
    }
}
test(parseInt(x))