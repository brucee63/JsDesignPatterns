'use strict'

class Task2 {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }
    complete() {
        console.log('completing Task: ' + this.name);
        this.completed = true;
    };
    save() {
        console.log('saving Task: ' + this.name);
    };    
}

module.exports = Task2;