function torrar(tempo){
    console.log(`Torrando pão por ${tempo} minutos.`);
}

function torrar(tempo=2.5, tipo="forma"){
    console.log(`Torrando pão ${tipo} por ${tempo} minutos.`);
}

torrar(5);
torrar(3, "integral");