const users = [{  
            name: "Trương Minh Thúy",
            age: 26,
            email: 'support@techmaster.vn',
            isStatus: true
        },
        {  
            name: "Lê Minh Thu",
            age: 20,
            email: 'support@techmaster.vn',
            isStatus: false
        },
        {  
            name: "Lê Thu Hương",
            age: 30,
            email: 'support@techmaster.vn',
            isStatus: true
        },
        {  
            name: "Trương Thị Thúy",
            age: 18,
            email: 'support@techmaster.vn',
            isStatus: false
        }
    ]
    //B1
function getKey(object) {
    const output = Object.keys(object);
    return output;
}

// console.log(getKey(users[1]));

//B2

function getValue(object) {
    const output = Object.values(object);
    return output;
}

 console.log(getValue(users[0]));

//B3

function checkKey(object, key) {
    const arr = getKey(object);
    const str = arr.filter(string => string == key);
    return str != "";
}

// console.log(checkKey(users[0], "name"));

//B4
function getLength(object) {
    const arr = getKey(object);
    return arr.length;
}

// console.log(getLength(users[1]));

//B5

function findUsers(Array) {
    const output = Array.filter(user => user.age > 25 && user.isStatus == true);
    return output;
}

// console.log(findUsers(users));

//B6
function sortUsers(Array) {
    const output = Array.sort((user1, user2) => user1.age - user2.age);
    return output;
}

// console.log(sortUsers(users));
