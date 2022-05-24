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
  text.innerHTML = containerQuiz[indexPregunta].question;
  questionText.appendChild(text);
for(i=0;i < 4; i++){
  let optionChoice = document.createElement("button");
  optionChoice.setAttribute("class","btn")
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