function greeting() {
    return sayHello;
}

function sayHello(subject) {
    return `Hello ${subject}`;
}

var f = greeting()('Mickey');

console.log(f);