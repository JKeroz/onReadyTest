class Vehiculo {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}
class Moto extends Vehiculo {
    constructor(marca, modelo, precio, cilindrada){
        super(marca, modelo, precio);
        this.cilindrada = cilindrada;
    }
    getSummary() {
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${this.cilindrada} // Precio: $${this.precio.toFixed(2)}`;
    }
}
class Auto extends Vehiculo {
    constructor(marca, modelo, precio, puertas){
        super(marca, modelo, precio);
        this.puertas = puertas;
    }
    getSummary() {
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: $${this.precio.toFixed(2)}`;
    }
}

const vehiculo1 = new Auto("Peugeot", "206", 200000, 4);
const vehiculo2 = new Moto("Honda", "Titan", 60000,"125c");
const vehiculo3 = new Auto("Peugot", "208", 250000, 5);
const vehiculo4 = new Moto("Yamaha", "YBR", 85500.50, "160c");

const vehiculos = [];

vehiculos.push(vehiculo1, vehiculo2, vehiculo3, vehiculo4);

const [ vh1 , vh2, vh3, vh4 ] = vehiculos.map( v => [v.marca, v.modelo, v.precio]);

const sortedByPrice = [  vh1 , vh2, vh3, vh4 ].sort((a, b) => {return b[2] - a[2]});

const foundLetterY = sortedByPrice.find( (item) => {
    const vehicle = item[1];    
    if (vehicle.includes('Y')) {
        return vehicle;
    }
});

const listaVehiculos = vehiculos.map( (vehiculo) => {
    console.log(vehiculo.getSummary());
});
console.log(`========================
Vehiculo más caro: ${sortedByPrice[0][0]} ${sortedByPrice[0][1]}
Vehiculo más barato: ${sortedByPrice[sortedByPrice.length - 1][0]} ${sortedByPrice[sortedByPrice.length - 1][1]}
Vehiculo que contiene en el modelo la letra 'Y': ${foundLetterY[0]} ${foundLetterY[1]} ${foundLetterY[2]}
========================
Vehiculos Ordenados por precio de mayor a menor: ${sortedByPrice.map((vehiculo) => {
    return `\n${vehiculo[0]} ${vehiculo[1]}`;
})}
`);
