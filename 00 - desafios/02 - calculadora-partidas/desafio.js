function matchesCalculator(victories=0, defeats=0){
    let balance = getBalance(victories, defeats);
    let level = getLevel(balance);
    console.log(print(balance, level));
}

function getBalance(victories=0, defeats=0){
    let balance = victories - defeats;
    return balance;
}

function getLevel(balance=0){
    if(balance <= 10) return "Ferro";
    else if(balance > 10 && balance <= 20) return "Bronze";
    else if(balance > 20 && balance <= 50) return "Prata";
    else if(balance > 50 && balance <= 80) return "Ouro";
    else if(balance > 80 && balance <= 90) return "Diamante";
    else if(balance > 90 && balance <= 100) return "Lendário";
    else return "Imortal";
}

function print(balance=0, level="Ferro"){
    return `O Herói tem de saldo de ** ${balance} ** está no nível de ** ${level} **`
}

matchesCalculator(100, 12);