//Bai 1
function checkStringExist(string1, string2) {
    return string1.search(string2)>=0;
}

// console.log(checkStringExist("I love you", "him"));

//Bai 2
function shortenString(string) {
    return string.slice(0,8) + "..."; 
}

// console.log(shortenString("Xin chao moi nguoi"));

//Bai 3

function capitalizeString(string) {
    return string.replace(string[0], string[0].toUpperCase());
}

// console.log(capitalizeString("taasd"));

//Bai 4

function repeatString1(string) {
    //var count = 0;
    for (let i = 0; i < 10; i++) {
        string = string + string;
        //count++;
    }
    return string;// + count;
}

//console.log(repeatString1("a"));

//Bai 5

function repeatString2(string) {
    var output = [];
    for (let i = 0; i < 10; i++) {
        output.push(string);
    }
    return output.join("-");
}

// console.log(repeatString2("a"));

//Bai 6

function repeatString3(string, n) {
    var output = [];
    for (let i = 0; i < n; i++) {
        output.push(string);
    }
    return output.join("-");
}

// console.log(repeatString3("s", 5));

//Bai 7

function reverseString(string) {
    return string.split("").reverse().join("");
}

// console.log(reverseString("Hi i'm Minh"));

//Bai 8