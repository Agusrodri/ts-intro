
/*
    ===== Código de TypeScript =====
*/

export interface Producto{
    desc:string;
    precio:number;
}

const telefono: Producto = {
    desc: 'Movil',
    precio:350,

}

const tableta: Producto = {
    desc: 'Tablet',
    precio:350,

}

export function calculaISV(productos: Producto[]){

    let total=0;

    productos.forEach(({precio}) => {total +=precio})

    return [total, total * 0.15];


}

const articulos = [telefono, tableta];

const [total, isv] = calculaISV(articulos);

console.log('Total; ', total);
console.log('ISV: ', isv);