function number(input) {

    let num = input[0];

    let numbers = '';

    for (let i = 1; i <= num; i++) {
        if (i % 3 != 0 && i % 7 != 0) {
            numbers = numbers + i + ' ';

        }
    }
    console.log(numbers)

    console.log(numbers);


}

number([10]);