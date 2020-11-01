class SuperHero {
    constructor(terbang,ability,senjata){
        this.terbang = terbang;
        this.ability = ability;
        this.senjata = senjata;
        this.name = this.constructor.name;
    }

    getName(){
        console.log(`Saya adalah ${this.name}`)
    }
    desc(){
        console.log(`${this.terbang}, ${this.ability}, ${this.senjata}`)
    }
}

class Ironman extends SuperHero{
    constructor(terbang,ability,senjata,tambahan){
        super(terbang,ability,senjata,tambahan);
        this.tambahan = tambahan;
    }
    desc(){
        console.log(`${this.terbang}, ${this.ability}, ${this.senjata},${this.tambahan}`)
    }
}

class Thor extends SuperHero{
    constructor(terbang,ability,senjata){
        super(terbang,ability,senjata);
        
    }
}

ironman = new Ironman('Terbang dengan roket', 'Anti Peluru', 'Senjata laser dan rudal', ' dan juga Kaya Raya');
ironman.getName();
ironman.desc();
// ironman();
thor = new Thor('Terbang dengan Palu', 'Anti Peluru', 'Senjata Kilat dan Gledek');
thor.getName();
thor.desc();