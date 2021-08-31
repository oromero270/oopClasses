class Ninja {
    constructor(name, health, speed=3, strength=3){
        this.name =name;
        this.health=health;
        this.strength=strength;
        this.speed=speed;
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        for (const property in this) {
            console.log(`${property}: ${this[property]}`);
        }
        return this;
    }
    drinkSnake(){
        this.health += 10
    }

}
class Sensei extends Ninja{
    constructor(name, wisdom){
        super(name,200,10,10);
        this.wisdom = wisdom = 10;
    }
    speakWisdom(){
        superSensei.drinkSnake();
        console.log("Bottoms up")
    }
}

const ninja1 = new Ninja("Hyabusa",100);
const superSensei = new Sensei("Master Splinter");

// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSnake();
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();
