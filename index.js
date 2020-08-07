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

//Instanciar vehiculos
const vehiculo1 = new Auto("Peugeot", "206", 200000, 4);
const vehiculo2 = new Moto("Honda", "Titan", 60000,"125c");
const vehiculo3 = new Auto("Peugot", "208", 250000, 5);
const vehiculo4 = new Moto("Yamaha", "YBR", 85500.50, "160c");

//Añadir todos los vehiculos a un solo array de vehiculos
const vehiculos = [];
vehiculos.push(vehiculo1, vehiculo2, vehiculo3, vehiculo4);

//Copiar array para ordenar valores sin alterar lista principal
const vehiculosCopy = [...vehiculos];

//Ordenar vehiculos por precio
const sortedByPrice = vehiculosCopy.sort((a, b) => {return b.precio - a.precio});

//Encontrar vehiculo con letra Y en el modelo
const foundLetterY = vehiculosCopy.find( (item) => {
    const vehicle = item.modelo;    
    if (vehicle.includes('Y')) {
        return vehicle;
    }
});

const listaVehiculos = vehiculos.map( (vehiculo) => {
    console.log(vehiculo.getSummary());
});
console.log(`========================
Vehiculo más caro: ${sortedByPrice[0].marca} ${sortedByPrice[0].modelo}
Vehiculo más barato: ${sortedByPrice[sortedByPrice.length - 1].marca} ${sortedByPrice[sortedByPrice.length - 1].modelo}
Vehiculo que contiene en el modelo la letra 'Y': ${foundLetterY.marca} ${foundLetterY.modelo} ${foundLetterY.precio.toFixed(2)}
========================
Vehiculos Ordenados por precio de mayor a menor: ${sortedByPrice.map((vehiculo) => {
    return `\n${vehiculo.marca} ${vehiculo.modelo}`;
})}
`);
