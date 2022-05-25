//Section 1
let quizz = ["B","R","A","I","N","Z","Z"];
const UL = document.createElement("ul");
UL.setAttribute("class", "ul");
const sectionOne = document.getElementById("section-1");
sectionOne.appendChild(UL);
for(i = 0;i < quizz.length ;i++){
    const LI = document.createElement("li");
    LI.setAttribute("class", "li");
    LI.innerHTML = quizz[i];
    UL.appendChild(LI);
}
//Section 2
const HTWO = document.createElement("h2");
const sectionTwo = document.getElementById("section-2");
sectionTwo.appendChild(HTWO);
HTWO.setAttribute("class", "h2-tutorial");
HTWO.innerHTML = "¿COMO JUGAR?";

const tutorial = ["Presione el boton jugar que encontrara debajo para comenzar con el quiz","Lea atentamente el enunciado para responder","Seleccione la opcion que le parezca conveniente"]
const nodoOL = document.createElement("ol");
nodoOL.setAttribute("class","list");
  for(let i=0;i<tutorial.length;i++)
  {
    const nodoLI = document.createElement("li");
    nodoLI.setAttribute("class","list-item");
    nodoLI.innerText=tutorial[i];
    nodoOL.appendChild(nodoLI);
  }
sectionTwo.appendChild(nodoOL);