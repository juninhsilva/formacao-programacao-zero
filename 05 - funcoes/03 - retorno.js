function soma(a,b){
    return a+b;
}

function divisao(a, b=1){
    return a/b;
}

console.log(soma(3,4));
console.log(divisao(10,4));

function getFIrstName(name, splitChar=" "){
    let firstName = name.split(splitChar)[0];
    return firstName;
}

console.log(getFIrstName("Juninh Silva"));
console.log(getFIrstName("Juninh-Silva","-"));