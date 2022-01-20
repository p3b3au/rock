console.log('rockPaper.js');

let lesBtns = document.querySelectorAll(".cardBtn")
let affResult = document.querySelector(".result")
let affTot = document.querySelector(".total")
let affSon = document.querySelector(".computer")

let choix = ["pierre", "feuille", "ciseaux"]


let monChoix
let sonChoix
let monTot = 0
let sonTot = 0

let winTable=[['ciseaux','pierre','feuille'], //pierre
['pierre','feuille','ciseaux'], //feuille
['feuille','ciseaux','pierre']] // ciseaux


for (let i = 0; i < lesBtns.length; i++) {
    lesBtns[i].addEventListener('click', function
        jeJoue() {
        affResult.style.backgroundColor = "white"
        affResult.style.transform = "scale(1)"
        lesBtns[i] = choix[i]
        monChoix = choix[i]
        console.log("moi: " + monChoix)
        let nombreAlea = getRandomInt(0, choix.length)
        sonChoix = choix[nombreAlea]
        console.log("chr: " + sonChoix)
        affSon.textContent = "Chrome a joué : " + sonChoix
        if (monChoix == sonChoix) {affResult.textContent = "égalité"}
        else if ){ 
            affResult.textContent = "gagné"
            affResult.style.backgroundColor = "pink"
            affResult.style.transform = "scale(2)"
            monTot++
        } 
        affTot.textContent = "moi: " + monTot + " / chr: " + sonTot
    })
}



function checkWin (monChoix,sonChoix){
    if (monChoix == sonChoix){return even}
    else if (winTable[indexWinTable].indexOf(monChoix) > winTable[indexWinTable].indexOf(sonChoix)){
        return win}
        else {
            return loose
        }
    }

}




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}
