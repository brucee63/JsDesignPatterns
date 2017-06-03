
//"use strict";

var task = {
title : "My task",
description : "My Description"
};
//var task = Object.create(Object.prototype);
//var task = new Object();

Object.defineProperty(task, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writeable : false,
    enumerable: false,
    configurable: false
});

// Object.defineProperty(task, 'toString', {
//    enumerable: true 
// });

var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
    value: function () {
        return this.title + ' ' + 'is urgent';
    },
    writeable: false,
    enumerable: false,
    configurable: false
});

console.log(urgentTask.toString());

//task.toString = 'hi';
//console.log(task.toString());
//console.log(Object.keys(task));
