let NumberPlayers
let r; let k; let c;
let x; let y; let z;
let Mazzo = []
for (let i=0; i<52; i++){
  Mazzo[i] = i;
}

function AssignNumberPlayers (){
  NumberPlayers = document.getElementById("NPlayers").value
  console.log(NumberPlayers)

  let Rimozione = document.getElementById("divAskNPlayers")
  Rimozione.remove()

  for (let i=0; i<52; i++){
    r = (Math.floor(Math.random() * (52-i)+i));
    k = Mazzo[i];
    Mazzo[i] = Mazzo[r];
    Mazzo[r] = k;
  }

  let DivMostraMano = document.createElement("div")
  let Carta = document.createElement("p")
  let Submit = document.createElement("button")

  let TestoCarta = document.createTextNode(Mazzo[0])
  let TestoSubmit = document.createTextNode("Go back")

  Submit.type = "button"
  Submit.onclick = function (){GoBack()}

  Submit.appendChild(TestoSubmit); Carta.appendChild(TestoCarta)
  DivMostraMano.appendChild(Carta); DivMostraMano.appendChild(Submit)

  document.body.insertBefore(DivMostraMano, null)
  console.log(Mazzo)
}

function GoBack (){
  location.reload()
}

