function number(input) {
    let n = input[0];
    let m = input[1];
    let k = input[2];

    if (n >= m && n >= k) {
        if (m >= k) {
            console.log(`${n} ${m} ${k}`);
        } else {
            console.log(`${n} ${k} ${m}`);
        }
    } else if (m >= n && m >= k) {
        if (n >= k) {
            console.log(`${m} ${n} ${k}`);
        } else {
            console.log(`${m} ${k} ${n}`);
        }
    } else if (k >= n && k >= m) {
        if (n >= m) {
            console.log("%d %d %d", k, n, m);
        } else {
            console.log("%d %d %d", k, m, n);
        }
    }
}



number([-3, 6, -1]);