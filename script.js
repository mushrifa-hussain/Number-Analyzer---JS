//Task - 1: Take a number
let num = 10;

//Task - 2: Check if the number is odd or even
//Solution: conditions

if(num%2 === 0){
    console.log(num +" is an even number.");
}else{
    console.log(num +" is an odd number.");
}

//Task - 3: print numbers from 1 to that number
//Solution: loop

for(let i = 1; i <= num; i++){
    console.log(i);
}

//Task - 4: Print square function
//Soultion: function
function numSquare(num){
    console.log(num*num);
    //or
    console.log(Math.pow(num, 2));
}
numSquare(10);