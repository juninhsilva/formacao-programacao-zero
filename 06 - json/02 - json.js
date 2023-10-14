let invoice = {
    name:"Juninh Silva",
    age: 34,
    products: {
        mouse: ["Mouse Logitech", 29,90],
        teclado: ["Teclado Mecânico", 249,90],
        monitor: ["Samsung Gamer 26 pol", 1615,95]
    }
}

console.log(invoice);

console.log(invoice.name);
console.log(invoice.age);

for (const key in invoice.products) {
    let [productName, productPrice] = invoice.products[key];
    console.log(productName + " - " + productPrice);
}