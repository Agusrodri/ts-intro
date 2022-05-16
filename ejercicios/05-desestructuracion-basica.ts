
/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    anio:number;
}

const reproductor:Reproductor={
    volumen:90,
    segundo:36,
    cancion:'Mess',
    detalles:{
        autor:'Ed Sheeran',
        anio:2015
    }

}
/*la desestructuracion de objetos consiste en sacar aquellos elementos que necesito de un objeto, 
para no llamarlo repetidas veces
*/ 

const{volumen: vol, segundo, cancion, detalles} = reproductor;
const{autor}=detalles;


//console.log('El volumen actual de: ', vol )
//console.log('El segundo actual de: ', segundo)
//console.log('La canción actual de: ', cancion)
//console.log('El autor es', autor )

//en la desestructuracion de arreglos importa la posicion y no el nombre
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const[, p2 , p3] = dbz; //si no necesitamos alguna posicion simplemente no se coloca

console.log('Personaje 3:', p3);