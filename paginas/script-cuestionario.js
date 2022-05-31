  let btnMenu = document.getElementById("btn-hamburger");
  let nav = document.getElementById("nav");
  btnMenu.addEventListener("click", ()=>{
    nav.classList.toggle("mostrar");
  })



class Quiz {
    constructor(question, choices, answer) {
      this.question = question;
      this.choices = choices;
      this.answer = answer;
    }
    correctAnswer(choice){
      return choice ===this.answer;
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
    {
      question: "Que empresa fundo bill gates?",
      choices: ["Apple",
      "IBM",  
      "Amazon",
      "Microsoft",
      ],
      answer:"Microsoft",
    },
    {
      question: "Cual de los siguiente poetas Españoles murio fusilado cerca de Granada durante la guerra civil Española?",
      choices: ["Miguel Hernández",
      "Manuel Gómez del Valle",  
      "Federico Gárcia Lorca",
      "Antonio Machado",
      ],
      answer:"Federico Gárcia Lorca",
    },
    {
      question: "En qué año nacio el escultor flamenco Juan de Bolonia?",
      choices: ["1428",
      "1673",  
      "1501",
      "1529",
      ],
      answer:"1529",
    },
    {
      question: "Bernado o'Higgins se convirtió en gobernante de qué país en 1817",
      choices: ["Brasil",
      "Irlanda",  
      "Chile",
      "Perú",
      ],
      answer:"Chile",
    },
    {
      question: "Porqué se les pone una funda de tela o espuma a los micrófonos?",
      choices: ["Para proteger contra el frio",
      "Para proteger contra interferencias de sonido",  
      "Para cumplir con reglas de higiene",
      "Para satisfacer las tendencias de moda",
      ],
      answer:"Para proteger contra interferencias de sonido",
    },
    {
      question: "Hacia qué tiene atracción una persona con pogonofilia?",
      choices: ["Barba",
      "Ojos claros",  
      "Moda elegante",
      "Cabello largo",
      ],
      answer:"Barba",
    },
    {
      question: "En la vida de qué prócer argentino está basada la película llamada "+"El santo de la espada"+ "",
      choices: ["Manuel Belgrano",
      "José de San Martín",  
      "Martín de Güemes",
      "Juan Manuel de Rosas",
      ],
      answer:"José de San Martín",
    },
    {
      question: "Qué es la enfermedad del Parkinson",
      choices: ["Una enfermedad de la vista",
      "Enfermedad crónica y degenerativa del sistema nervioso",  
      "Una enfermedad progresiva",
      "Una enfermedad en la piel",
      ],
      answer:"Enfermedad crónica y degenerativa del sistema nervioso",
    },
    {
      question: "Qué es la dislexia",
      choices: ["Habilidad para resolver acertijos",
      "Capacidad para ejecutar órdenes",  
      "Trastorno del aprendizaje de la lecto escritura",
      "Desarrollo simple del lóbulo temporal del cerebro",
      ],
      answer:"Trastorno del aprendizaje de la lecto escritura",
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
    mostrarOpciones(choices, llamar) {
      const choicesOfQuestion = document.getElementById("choices");
      choicesOfQuestion.innerHTML = "";
      for(let i = 0; i < 4 ;i++){
        const button = document.createElement("button");
        button.setAttribute("id", "btn-"+i);
        button.innerText = choices[i];
        button.addEventListener("click", ()=> llamar(choices[i]));
        choicesOfQuestion.appendChild(button);
    };
  }
  mostrarScore(score){
    const puntaje = `
      <h1>Puntaje</h1>
      <h2>Tu puntaje fue de ${score}</h2>
      
    `;
    const contenedorPuntaje = document.getElementById("quiz");
    contenedorPuntaje.innerHTML = puntaje;
    
  }
}
  const newQuestions = containerQuiz.map(question => new Quiz(question.question,question.choices,question.answer,question.info));

  function siguientePregunta(pregunta,mostrar1){
    if(pregunta.finalizarPregunta()){
      console.log(pregunta.score);
      mostrar1.mostrarScore(pregunta.score);
    }else{
      mostrar1.mostrarPregunta(pregunta.getQuestionIndex().question);
      mostrar1.mostrarOpciones(pregunta.getQuestionIndex().choices, (parametroChoice)=> {
        pregunta.adivinar(parametroChoice);
        siguientePregunta(pregunta,mostrar1);
      });
    }
  }

  function iniciar(){
   const pregunta = new Question(newQuestions);
   const mostrar1 = new NodoMostrar();
   
   siguientePregunta(pregunta,mostrar1);
  }
  iniciar(); 