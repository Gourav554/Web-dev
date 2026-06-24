// Parent Class
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    work() {
        console.log(`${this.name} is working.`);
    }

    showDetails() {
        console.log(`ID: ${this.id}, Name: ${this.name}`);
    }
}


class Developer extends Employee {
    constructor(id, name, language) {
        super(id, name);
        this.language = language;
    }

    writeCode() {
        console.log(`${this.name} is writing code in ${this.language}.`);
    }

    
    work(id, name, language, section) {
        console.log(`${this.name} is developing software using ${this.language}for ${section}`);
    }
}
let d = new Developer(1,"gourav","hindi");
d.work(1,"gourav","hindi","A");


-