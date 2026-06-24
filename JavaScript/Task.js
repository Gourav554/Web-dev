
// SINGLE INHERITANCE
class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

const dog = new Dog();
dog.eat();
dog.bark();



// MULTI INHERITANCE
class Person {
    walk() {
        console.log("Person is walking");
    }
}

const Singer = {
    sing() {
        console.log("Person is singing");
    }
};

class Student extends Person {}

const student = new Student();
student.walk();
student.sing();

  //MULTILEVEL INHERITANCE
class Animal1 {
    eat() {
        console.log("Animal eats");
    }
}

class Dog1 extends Animal1 {
    bark() {
        console.log("Dog barks");
    }
}

class Puppy extends Dog1 {
    weep() {
        console.log("Puppy weeps");
    }
}

const puppy = new Puppy();
puppy.eat();
puppy.bark();
puppy.weep();


