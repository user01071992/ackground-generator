class Player{
	constructor(name,type){
this.name=name;
this.type=type;
	}

	introduce(){
		console.log(`I am ${this.name} and I am a ${this.type}`);
	}
}

class Wizard extends Player{
	constructor(name,type){
		super(name,type)
	}
	play(){
		console.log(`Weeeee I am a ${this.type}`)
	}
}

const Wizard1= new Wizard ('John','Fighter');
const Wizard2= new Wizard ('Alex','Magician');