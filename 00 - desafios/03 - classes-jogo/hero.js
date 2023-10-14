class Hero{
    constructor(nome, idade, tipo){
        this.nome=nome;
        this.idade=idade;
        this.tipo=tipo;
        this.ataque = this.getTipoAtaque(tipo);
    }

    getTipoAtaque(tipo){
        switch(tipo){
            case "mago":
                return "MAGIA";
            case "guerreiro":
                return "ESPADA";
            case "monge":
                return "ARTES MARCIAIS";
            case "ninja":
                return "SHURIKEN";
        }
    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}!!`);
    }
}

mago = new Hero("Mestre dos Magos", 99, "mago");
mago.atacar();

guerrreiro = new Hero("Arthur", 44, "guerreiro");
guerrreiro.atacar();