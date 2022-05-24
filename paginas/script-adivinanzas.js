class Adivinazas {
    constructor(question,answer){
        this.question = question;
        this.answer = answer;
    }
    
}
const containerAdivinados = [
    {
      question:
        "No muerde ni ladra, pero tiene dientes y la casa guarda. ¿Qué es?",
      answer: "LLAVE",
    },
    {
      question:
        "Pobrecito, pobrecito, todo el día sin parar y no sale de su sitio.",
      answer: "RELOJ",
    },
  ];

  const questionText = document.getElementById("question");
  const inputAnswer = document.getElementById("input");
  let text = document.createElement("h2");
  let indexPregunta = 0;
  text.innerHTML = containerAdivinados[indexPregunta].question;
  questionText.appendChild(text);
  let input = document.createElement("input");
  input.setAttribute("class","text");
  inputAnswer.appendChild(input);