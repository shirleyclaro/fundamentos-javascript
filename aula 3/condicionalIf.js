let idade = 30;
let acesso = " ";

if(idade < 16){
    acesso = "Acesso Proibido"
} else if (idade >= 16 && idade <=18){
    acesso = "Acesso liberado com acompanhante maior de idade";
} else {
    acesso = "Acesso liberado!";
}

console.log(acesso)