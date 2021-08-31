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
        console.log(this.name,this.health, this.speed, this.strength)
    }
    drinkSnake(){
        this.health += 10
    }

}

const ninja1 = new Ninja("Hyabusa",100);


ninja1.sayName();
ninja1.showStats();
ninja1.drinkSnake();