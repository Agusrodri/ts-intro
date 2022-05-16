
/*
    ===== Código de TypeScript =====
*/
class PersonaNormal{
    constructor(
        public nombre:string,
        public direccion:string
    ){}
}
class Heroe extends PersonaNormal{
    /*alterEgo: string;
    edad: number;
    nombreReal:string;

    constructor(alterEgo:string){

        this.alterEgo=alterEgo;


    }*/

    //no es necesario tanto código, se puede realizar como sigue

    constructor(
        public alterEgo:string,
        public edad:number,
        public nombreReal:string
    ){ super(nombreReal, 'USA');}


}

const ironman = new Heroe('Ironman', 45, 'Tony');

console.log(ironman);