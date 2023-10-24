let nome = 'Hércules'
    , xp = 10002
    , achei = false
    ;

const niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal"]
    , vlrs = [1000, 2000, 5000, 7000, 8000, 9000, 10000]
    ;

for (let index = 0; index < vlrs.length; index++) {
    if (xp <= vlrs[index]){
        achei = true;
        console.log(`O Herói de nome ${nome} está no nível de ${niveis[index]}`);
        break;
    }
}

if(!achei){
    console.log(`O Herói de nome ${nome} está no nível de Radiante`);
}