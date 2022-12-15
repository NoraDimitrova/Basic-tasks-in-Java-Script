function word(input) {

    let word = input[0];

    switch (word) {
        case "1":
            console.log("One");
            break;
        case "2":
            console.log("Two");
            break;
        case "3":
            console.log("Tree");
            break;
        case "4":
            console.log("Four");
            break;
        case "5":
            console.log("Five");
            break;
        default:
            console.log("Not a digit")
    }

}

word(["5"]);