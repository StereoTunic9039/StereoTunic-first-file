let NumberPlayers
let r; let k; let Cc = 0;
let x; let y; let z;
let Mazzo = []
for (let i=0; i<52; i++){
  Mazzo[i] = i;
}
for (let i=0; i<52; i++){
  r = (Math.floor(Math.random() * (52-i)+i));
  k = Mazzo[i];
  Mazzo[i] = Mazzo[r];
  Mazzo[r] = k;
  }
let Seme = ["Fiori", "Cuori", "Picche", "Quadri"]
let Numero = ["Due", "Tre", "Quattro", "Cinque", "Sei", "Sette", "Otto", "Nove", "Dieci", "Fante", "Donna", "Re", "Asso"]


function AssignNumberPlayers (){
  NumberPlayers = document.getElementById("NPlayers").value

  let Rimozione = document.getElementById("divAskNPlayers")
  Rimozione.remove()

  let DivMain = document.createElement("div")
  DivMain.id="DivMain"

  for(let i=0; i<NumberPlayers; i++){
    let br = document.createElement("br")
    let DivMostraMano = document.createElement("div")
    let Carta = document.createElement("p")

    let TestoCarta1 = document.createTextNode("Prima carta: " + Numero[Mazzo[Cc]%13] + " a " + Seme[(Math.floor(Mazzo[Cc]/13))])
    let TestoCarta2 = document.createTextNode("Seconda carta: " + Numero[Mazzo[Cc+1]%13] + " a " + Seme[(Math.floor(Mazzo[Cc+1]/13))])

    Carta.appendChild(TestoCarta1); Carta.appendChild(br); Carta.appendChild(TestoCarta2); 

    DivMostraMano.appendChild(Carta)

    DivMain.appendChild(DivMostraMano);

    Cc += 2
  }
  let br = document.createElement("br"); let br1 = document.createElement("br")
  
  let TestoGoBack = document.createTextNode("Go back")
  let GoBack = document.createElement("button")
  GoBack.type = "button"
  GoBack.onclick = function (){GoBackF()}
  GoBack.appendChild(TestoGoBack); 

  let TestoSubmit = document.createTextNode("Submit")
  let Submit = document.createElement("button")
  Submit.type = "button"
  Submit.onclick = function (){SubmitF()}
  Submit.appendChild(TestoSubmit); 

  DivMain.appendChild(GoBack)
  DivMain.appendChild(br); DivMain.appendChild(br1)
  DivMain.appendChild(Submit)

  document.body.insertBefore(DivMain, null)
}

function GoBackF (){
  location.reload()
}

function SubmitF (){
  let DivMain = document.getElementById("DivMain")
  let TestoTavolo = document.createTextNode("Tavolo: " + Numero[Mazzo[Cc]%13] + " a " + Seme[(Math.floor(Mazzo[Cc]/13))] + ", " + Numero[Mazzo[Cc+1]%13] + " a " + Seme[(Math.floor(Mazzo[Cc+1]/13))] + ", " + Numero[Mazzo[Cc+2]%13] + " a " + Seme[(Math.floor(Mazzo[Cc+2]/13))])
  let Tavolo = document.createElement("p")
  let DivTavolo = document.createElement("div")

  Tavolo.appendChild(TestoTavolo)
  DivTavolo.appendChild(Tavolo)

  DivMain.insertBefore(DivTavolo, null)
}

