/** spørger brugeren: Er bluetooth tændt? */

function statuss(tjek){
    if (tjek === true){
        instruks.innerHTML = `
        <h2> Godt, forsøg nu at pair dit device </h2>
        <label>Gå til næste rum!</label>
        <button  onclick="naesteRum()">OK</button>`
        
        /** CSS: Vise/skjule */
        instruks.style.visibility = "visible"
    }

    else{
        instruks.innerHTML = `
        <h2> Tjek begge om begge devices er tændte og på pairing mode </h2>
        <label> Prøv igen </label>
        <button onlick="back()"> Tilbage </button>     `
    }
}