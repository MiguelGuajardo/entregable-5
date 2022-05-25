class Quiz {
    constructor(question, choices, answer) {
      this.question = question;
      this.choices = choices;
      this.answer = answer;
    }
  }
  const containerQuiz = [
    {
      question:
        "¿En cual de los siguientes países se pueden encontrar los gauchos?",
      choices: ["Argelia", "Mexico", "Argentina", "Nueva Zelanda"],
      answer: "Argentina",
    },
    {
      question:
        "¿En que ciudad estadounidense se basa el mapa del GTA: Vice City?",
      choices: ["New york", "Miami", "Las vegas", "Los Angeles"],
      answer: "Miami",
    },
    {
      question: "¿Por donde absorben agua los arboles?",
      choices: ["Hojas", "Raíces", "Tronco", "Ramas"],
      answer: "Raíces",
    },
    {
      question: "¿Que jugador gano el balón de oro en el año 2010?",
      choices: [
        "Lionel Messi",
        "Cristiano Ronaldo",
        "Yaya Toure",
        "Pogba",
      ],
      answer:"Lionel Messi",
    },
    {
      question: "¿Cuantos dedos tiene Bart Simpson?",
      choices: ["3", "5", "6", "4"],
      answer: "4",
    },
  ];
  const questionText = document.getElementById("question");
  const choice = document.getElementById("choices");
  let text = document.createElement("h2");
  let indexPregunta = 0;
  let score = 0;
  text.innerHTML = containerQuiz[indexPregunta].question;
  questionText.appendChild(text);
for(i=0;i < 4; i++){
  let optionChoice = document.createElement("button");
  optionChoice.setAttribute("id","btn-"+i)
  if(i === 0){
    optionChoice.innerHTML = containerQuiz[indexPregunta].choices[0];
  }else if(i === 1) {
    optionChoice.innerHTML = containerQuiz[indexPregunta].choices[1];
  }else if(i === 2) {
    optionChoice.innerHTML = containerQuiz[indexPregunta].choices[2];
  }else{
    optionChoice.innerHTML = containerQuiz[indexPregunta].choices[3];
  }
  choice.appendChild(optionChoice);
}
const progress = document.getElementById("progress");
let progresive = indexPregunta+1;
progress.innerHTML = "Pregunta " + progresive + " de " + containerQuiz.length;
/*
//------------EVENTOS-----------------
const boton0 = document.getElementById("btn-0");
boton0.addEventListener("click", ()=>{
  if(boton0.innerText === containerQuiz[indexPregunta].answer){
    boton0.setAttribute("id","correcto");
    boton1.setAttribute("id","disable")
    boton2.setAttribute("id","disable")
    boton3.setAttribute("id","disable")
    score +=1;
  }else{
    boton0.setAttribute("id","incorrecto");
    boton1.setAttribute("id","disable")
    boton2.setAttribute("id","disable")
    boton3.setAttribute("id","disable")

  }
});

const boton1 = document.getElementById("btn-1");
boton1.addEventListener("click", ()=>{
  if(boton1.innerText === containerQuiz[indexPregunta].answer){
    boton1.setAttribute("id","correcto");
    boton0.setAttribute("id","disable")
    boton2.setAttribute("id","disable")
    boton3.setAttribute("id","disable")
    score +=1;
  }else{
    boton1.setAttribute("id","incorrecto");
    boton0.setAttribute("id","disable")
    boton2.setAttribute("id","disable")
    boton3.setAttribute("id","disable")
  }
});

const boton2 = document.getElementById("btn-2");
boton2.addEventListener("click", ()=>{
  if(boton2.innerText === containerQuiz[indexPregunta].answer){
    boton2.setAttribute("id","correcto");
    boton0.setAttribute("id","disable")
    boton1.setAttribute("id","disable")
    boton3.setAttribute("id","disable")
    score +=1;
  }else{
    boton2.setAttribute("id","incorrecto");
    boton0.setAttribute("id","disable")
    boton1.setAttribute("id","disable")
    boton3.setAttribute("id","disable")
  }
});

const boton3 = document.getElementById("btn-3");
boton3.addEventListener("click", ()=>{
  if(boton3.innerText === containerQuiz[indexPregunta].answer){
    boton3.setAttribute("id","correcto");
    boton0.setAttribute("id","disable")
    boton1.setAttribute("id","disable")
    boton2.setAttribute("id","disable")
    score +=1;
  }else{
    boton3.setAttribute("id","incorrecto");
    boton0.setAttribute("id","disable")
    boton1.setAttribute("id","disable")
    boton2.setAttribute("id","disable")
    
  }
});*/