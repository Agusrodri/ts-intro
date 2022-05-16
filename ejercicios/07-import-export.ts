
/*
    ===== Código de TypeScript =====
*/

import { Producto, calculaISV } from "./06-desestructuracion-funcion";
//cuando se importa un archivo, ese archivo también se ejecuta OJO!

const carritoCompras: Producto[] = [

    {desc: 'Telefono',
     precio: 100
    },
    {
     desc:'Telefono 2',
     precio: 150
    }
];

const [total, isv] = calculaISV(carritoCompras);

console.log('Total', total);
console.log('ISV', isv);