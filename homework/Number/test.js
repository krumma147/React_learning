//Number
//B1

function TheTichHinhCau(r) {
    return (4 * Math.PI * (r ** 3)) / 3;
}

// console.log(TheTichHinhCau(2));

//B2

function sumBetween(number1, number2) {
    let sum = 0;
    while (number1 < number2) {
        number1++;
        sum += number1;
    }
    return sum - number2;
}

// console.log(sumBetween(3, 9));

//B3

function checkPalindrome(number) {
    let count = 0;
    let i = 2;
    while (i <= Math.round(Math.sqrt(number))) {
        if (number % i == 0) {
            count++;
        }
        i++;
    }
    return count == 0;
}

// console.log(checkPalindrome(11));

//B4
function sumPalindrome(number) {
    let i = 1;
    let sum = 0;
    while (i <= number) {
        i++;
        if (checkPalindrome(i)) {
            sum += i;
        }
    }
    return sum;
}

// console.log(sumPalindrome(11));

//B5
function sumgcd(number) {
    let i = 0;
    let sum = 0;
    while (i <= number) {
        i++;
        if (number % i == 0) {
            sum += i;
        }
    }
    return sum;
}

// console.log(sumgcd(9));

//B6

function sortNumber(number) {
    const output = number.toString().split("");
    let countzero = 0;
    for (let numbers in output) {
        numbers = parseInt(numbers);
        if (numbers == 0) {
            countzero++;
        }
    }
    output.sort();
    const zeronumber = output.slice(0, countzero + 1);
    for (let numbers in zeronumber) {
        output.splice(0, numbers, numbers);
    }
    // output.splice(0, countzero, zeronumber);
    return parseInt(output.join(""));
}

// console.log(sortNumber(5037605107));