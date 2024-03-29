'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
    console.log(('Hello ' + name).toUpperCase());
}

greet("Bill");

function createEmail(to, from, subject, message) {
    console.log('\n        To: ' + to + '\n        From: ' + from + '\n        Subject: ' + subject + '\n        Message: ' + message + '\n    ');
}

createEmail('john@mail.com', 'jane@mail.com', 'Hello', 'How are you doing?');

var name = 'Bill';
console.log(upperName(_templateObject, name));

// function upperName(literals, ...values)
// don't know amount of values

function upperName(literals, value) {
    return literals[0] + value.toUpperCase();
}