let heroi = "Sanmix"
let nivel = 10000

let classificacao = ""

if (nivel <= 1000) {
    classificacao = "Ferro"
} else if (nivel >= 1001 && nivel <= 2000) {
    classificacao = "Bronze"
} else if (nivel >= 2001 && nivel <= 5000) {
    classificacao = "Prata"
} else if (nivel >= 5001 && nivel <= 7000) {
    classificacao = "Ouro"
} else if (nivel >= 7001 && nivel <= 8000) {
    classificacao = "Platina"
} else if (nivel >= 8001 && nivel <= 9000) {
    classificacao = "Ascendente"
} else if (nivel >= 9001 && nivel <= 10000) {
    classificacao = "Imortal"
} else {
    classificacao = "Radiante"
}

for (let contador = 1; contador <= 3; contador++ ){
    console.log("O Herói " + heroi + ", de nível:" + nivel + " tem a classificação " + classificacao)
}