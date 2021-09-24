let readlineSync = require('readline-sync');
var nomePeca;
var pesoPeca;
var capacidade;

nomePeca = readlineSync.question("Digite o nome da Peça: ");
pesoPeca = readlineSync.question("Digite o peso da peça: ");
capacidade = readlineSync.question("Digite a capacidade da Peça: ");


if (pesoPeca > 100)
 {
 // condição verdadeira    
    if(capacidade > 10)
    {
        // condição verdadeira    
        console.log("Não cadastrar, capacidade máxima atingida!");
    }
    else
        if (nomePeca.length < 3) 
        {
            console.log("Não cadastrar, nome inválido!");
        }
        else
        {
            console.log("Peça cadastrada com sucesso!");
        }
    {
        // condição falsa
           
    }
}

else
{
    // condição falsa
    console.log("Não cadastrar, Peso Insuficiente!");
}

