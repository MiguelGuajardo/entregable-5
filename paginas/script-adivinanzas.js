class Adivinazas {
    constructor(question,answer){
        this.question = question;
        this.answer = answer;
    }
    correctAnswer(answer){
      return answer ===this.answer;
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

  //-----------EVENTOS-------------
  class Question{

    QuestionIndex = 0;
    score = 0;

    constructor(questions){
      this.questions = questions;
    }
    getQuestionIndex(){
      return this.questions[this.QuestionIndex];
    }
    finalizarPregunta(){
      return this.questions.length === this.QuestionIndex;
    }
    adivinar(answer){
      if(this.getQuestionIndex().correctAnswer(answer)){
        this.score++;
      }
      this.QuestionIndex++;
    }
  }
  class NodoMostrar{
    constructor(){}

    mostrarPregunta(text){
      const questionTitle = document.getElementById("question");
    questionTitle.innerHTML = text;
    }
    mostrarInput(answer){
      const inputContainer = document.getElementById("input");
      const input = document.createElement("input");
      input.setAttribute("id","text");
      const valor = document.getElementById("text");
      inputContainer.appendChild(input);
      
      input.addEventListener("keypress", function(compararRespuesta){
        if (compararRespuesta.key === "Enter"){
          console.log(input.value.toUpperCase());
   /* if(input.value.toUpperCase() === this.getQuestionIndex().answer ){
      console.log("CORRECTO");
    }else{
      console.log("INCORRECTO");

    }*/
  }});
    }
  }
  const newQuestions = containerAdivinados.map(adivinanza => new Adivinazas(adivinanza.question,adivinanza.answer));

  function siguientePregunta(pregunta,mostrar1){
    if(pregunta.finalizarPregunta()){
      console.log(pregunta.score);
      mostrar1.mostrarScore(pregunta.score);
    }else{
      mostrar1.mostrarPregunta(pregunta.getQuestionIndex().question);
      mostrar1.mostrarInput();
    }
  }
  function iniciar(){
    const pregunta = new Question(newQuestions);
    const mostrar1 = new NodoMostrar();
    siguientePregunta(pregunta,mostrar1);
   }
   iniciar(); 