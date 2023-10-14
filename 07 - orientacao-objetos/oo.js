class FormaBolo{
    constructor(saborMassa, saborRecheio){
        this.saborMassa = saborMassa;
        this.saborRecheio = saborRecheio;
    }

    escrever(){
        console.log(`Um delicioso Bolo de ${this.saborMassa} com Recheio de ${this.saborRecheio}`)
    }
}

let boloFesta = new FormaBolo("Chocolate", "Nutella");

console.log(boloFesta);
boloFesta.escrever();