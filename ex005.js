let prompt = require("prompt-sync")()

let nome = prompt("Digite seu nome:")
let horario = prompt("É manha, tarde ou noite?")

if (  horario != "tarde"  && horario != "manha" && horario !="noite")
    { console.log("OPCAO INVALIDA")}

else if (horario == "manha") 
    { console.log("Bom dia, " + nome)}

else if(horario == "tarde")
    { console.log("Boa tarde, " + nome)}

else if(horario == "noite")
    { console.log("Boa noite, " + nome)}