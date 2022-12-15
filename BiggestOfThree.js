function number(input) {

    let n = input[0];
    let m = input[1];
    let k = input[2];

    let maxNum = 0;

    if (n >= m && n >= k) {
        maxNum = n;
    } else if (m >= n && m >= k) {
        maxNum = m;
    } else if (k >= n && k >= m) {
        maxNum = k;
    }

    console.log(maxNum);


}

number([1, -3, -6,]);