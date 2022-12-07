// class Button {
//     constructor(text, color, handler){
//         this.text = text ?? "button"
//         if (color) this.color = color
//         if (handler) this.handler = handler
//         this.create()
//     }

//     create(){
//         this.el = document.createElement('button')
//         this.el.textContent = this.text
//         this.el.style.background = this.color
//         this.el.addEventListener('click', this.handler)
//     }

//     appendTo(el){
//         el.append(this.el)
//     }

//     handler(){
//         alert("i am cool")
//     }
// }

// class newButton extends Button {
//     constructor(text, color, handler){
//         super(text, color, handler)
//     }

//     handler(){
//         this.hidden = true
//     }
// }

// btn1 = new Button()
// btn2 = new Button('label')
// btn3 = new Button('red', 'red', function(){
//     console.log(this)
//     return this.style.background = "salmon"})

// btn4 = new Button('bad', 'grey', () => console.log('foo'))

// document.body.replaceChildren()
// btn1.appendTo(document.body)
// btn2.appendTo(document.body)
// btn3.appendTo(document.body)
// btn4.appendTo(document.body)

// newBtn1 = new newButton('fgfghfhfgh', 'yellow')
// newBtn1.appendTo(document.body)

// class Animal {

//     #pradator

//     constructor(name) {

//         this.name = name;
//         this.#pradator = "pradator";
//     }
//     voise() {
//         console.log(`hi my name is ${this.name}`)
//     }

//     run() {
//         console.log(`${this.#pradator} can run`)
//     }

//     eat() {
//         console.log(`${this.name} like eat meet`)
//     }
// }

// class Cat extends Animal {

//     constructor(name) {
//         super(name)
//     }

//     voise() {
//         console.log("mauu")
//     }

//     eat() {
//         console.log(`nam-nam`)
//     }

// }

// const myCat = new Cat("Tom")
// myCat.voise()
// myCat.run()
////////////

class Animal {
    #isAnimal = false;

    constructor(name = "defaultName", type = "defaultType") {
        this.name = name;
        this.type = type;
        this._secret = "Very secret information";
    }

    static greeting() {
        console.log("I like animals");
    }

    #isToggleAnimal() {
        this.#isAnimal = true;
    }

    getAnimal() {
        this.#isToggleAnimal();

        if (this.#isAnimal) {
            console.log(`${this.name} is a ${this.type}`);
        } else {
            console.log(`It's not animal`);
        }
    }

    animalAction() {
        console.log(`${this.name} run`);
    }

    hasLegs() {
        console.log("Has legs");
    }

    set secret(value) {
        this._secret = value;
    }

    get secret() {
        return this._secret;
    }
}

class Cat extends Animal {
    #chipNumber = 999;

    constructor(name, type, sound = "defaultSound") {
        super(name, type);
        this.sound = sound;
        this._age = 5;
        this.ownProp=  Object.getOwnPropertyNames(Cat.prototype);
        ceckOwnProp()
        
    }


// ceckOwnProp() {
  
//     for (let key in this.ownProp) {
 
//       Cat.prototype.key= setTimeout(Cat.prototype.key, 3000);
 
//     }
// }


    #writeMyChipNumber() {
        console.log(`My chip number is ${this.#chipNumber}`);
    }

    runWriteMyChipNumber() {
        this.#writeMyChipNumber();
    }

    getSound() {
        console.log(`${this.type}'s sound is ${this.sound}`);
    }

    animalAction() {
        super.animalAction();
        console.log(`${this.name} sleeps`);
    }

    hasLegs() {
        console.log("Has four legs");
    }

    set age(value) {
        this._age = value;
    }

    get age() {
        return this._age;
    }
}

let cat = new Cat("Tom", "cat", "mau");
// Animal.greeting();
// cat.runWriteMyChipNumber();

// cat.getAnimal();
cat.getSound();
// cat.animalAction();
// cat.hasLegs();
// console.log(cat.age);
// cat.age = 12;
// console.log(cat.age);
console.log(Object.getOwnPropertyNames(Cat.prototype));