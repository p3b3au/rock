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
        if ((monChoix == "pierre" && sonChoix == "ciseaux") ||
            (monChoix == "ciseaux" && sonChoix == "feuille") ||
            (monChoix == "feuille" && sonChoix == "pierre")) {
            affResult.textContent = "gagné"
            affResult.style.backgroundColor = "pink"
            affResult.style.transform = "scale(2)"
            monTot++
        }
        else if ((monChoix == "ciseaux" && sonChoix == "pierre") ||
            (monChoix == "feuille" && sonChoix == "ciseaux") ||
            (monChoix == "pierre" && sonChoix == "feuille")) {
            affResult.textContent = "perdu"
            affResult.style.backgroundColor = "grey"
            affResult.style.transform = "scale(0.5)"
            sonTot++
        }
        else {
            affResult.textContent = "égalité"
        }
        affTot.textContent = "moi: " + monTot + " / chr: " + sonTot

    })
}








function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}