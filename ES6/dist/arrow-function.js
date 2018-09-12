'use strict';

var add = function add(x, y) {
    return x + y;
};
var square = function square(x) {
    return x * x;
};
var giveMeAnswer = function giveMeAnswer() {
    return 52;
};
var log = function log() {
    return console.log('Logging');
};
var multiply = function multiply(x, y) {
    var result = x * y;
    return result;
};
var getPerson = function getPerson() {
    return { name: 'John' };
};
(function () {
    return console.log('IIFE');
})();

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
numbers.forEach(function (num) {
    return sum += num;
});

var squared = numbers.map(function (n) {
    return n * n;
});

var person = {
    name: 'Bob',
    greet: function greet() {
        var _this = this;

        setTimeout(function () {
            console.log('Hello, my name is ' + _this.name);
            console.log(_this);
        }, 2000);
    }
};

person.greet();