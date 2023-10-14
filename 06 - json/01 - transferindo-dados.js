let name = "Juninh Silva";
let age = 34;
let product = ["Mouse Logitech", "Teclado Mecânico"];
let values = [79.9, 239,54];

function generateInvoice(name, age, products, values){
    console.log("Comprador: " + name)
    console.log("Idade: " + age + " anos");
    products.forEach(product => {
        console.log("Produto: " + product);
    });
    values.forEach(value => {
        console.log("Valor: " + value);
    });
}