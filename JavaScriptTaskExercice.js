function numbers(input){

    let number=input[0];
    console.log(number);
    let sum=0;

    for(let i=0; i<=number.length-1; i++){
        let digit=Number(number[i]);
        sum+=digit;
    }

    
    // let firstDigit=number.charAt(0);
    // let secondDigit=number.charAt(1);
    // let thirdDigit=number.charAt(2);
    // let fourthDigit=number.charAt(3);
    // let sum=firstDigit+secondDigit+thirdDigit+firstDigit;
     console.log(sum);
}

numbers(["2345"]);


