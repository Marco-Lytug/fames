document.addEventListener("DOMContentLoaded", () => {
  const abrirQuiz = document.getElementById("abrirQuiz");
  const quizContainer = document.getElementById("quiz-container");
  const questionEl = document.getElementById("quiz-question");
  const optionsEl = document.getElementById("quiz-options");
  const resultBox = document.getElementById("quiz-result");
  const recipeResult = document.getElementById("recipe-result");
  const refazerBtn = document.getElementById("refazer");
  const fecharBtn = document.getElementById("fecharQuiz");

  const perguntas = [
    {
      pergunta: "Que tipo de comida você quer?",
      opcoes: ["Salgado", "Sem Glúten", "Vegano", "Doce"],
    },
    {
      pergunta: "Quanto tempo você quer gastar?",
      opcoes: ["10 minutos","Até 15 minutos","20 minutos","30 minutos", "40 minutos","1 hora ou mais" ]
    },
    {
      pergunta: "Qual o nível de dificuldade que prefere?",
      opcoes: ["Fácil", "Médio", "Difícil"],
    },
  ];

  const receitas = [
  // SALGADOS
  {
    tipo: "Salgado",
    tempo: "1 hora ou mais",
    dificuldade: "Médio",
    nome: "Feijoada",
    link: "feijoada.html",
  },
  {
    tipo: "Salgado",
    tempo: "30 minutos",
    dificuldade: "Médio",
    nome: "Pizza de Calabresa",
    link: "pizza-de-calabresa.html",
  },
  {
    tipo: "Salgado",
    tempo: "20 minutos",
    dificuldade: "Fácil",
    nome: "Hambúrguer Caseiro",
    link: "hamburguer.html",
  },
  {
    tipo: "Salgado",
    tempo: "30 minutos",
    dificuldade: "Médio",
    nome: "Empadão de Frango",
    link: "Empadao.html",
  },
  {
    tipo: "Salgado",
    tempo: "25 minutos",
    dificuldade: "Médio",
    nome: "Bife à Parmegiana",
    link: "parmediana-de-carne.html",
  },
  {
    tipo: "Salgado",
    tempo: "15 minutos",
    dificuldade: "Médio",
    nome: "Pão de Queijo",
    link: "pao-queijo-salgado.html",
  },
  {
    tipo: "Salgado",
    tempo: "20 minutos",
    dificuldade: "Médio",
    nome: "Macarrão Carbonara",
    link: "carbonara.html",
  },

  // SEM GLÚTEN / SEM LACTOSE
  {
    tipo: "Sem Glúten",
    tempo: "40 minutos",
    dificuldade: "Médio",
    nome: "Coxinha de Mandioca sem Glúten",
    link: "coxinha-de-mandioca-semGLuten.html",
  },
  {
    tipo: "Sem Glúten",
    tempo: "20 minutos",
    dificuldade: "Fácil",
    nome: "Bombom de Morango sem Glúten",
    link: "bombom-de-morango-semGluten.html",
  },
  {
    tipo: "Sem Glúten",
    tempo: "10 minutos",
    dificuldade: "Fácil",
    nome: "Torta Salgada sem Glúten",
    link: "torta-salgada-semGluten.html",
  },
  {
    tipo: "Sem Glúten",
    tempo: "5 minutos",
    dificuldade: "Fácil",
    nome: "Pão de Queijo sem Lactose e Sem Glúten",
    link: "pao-queijo-semGluten.html",
  },
  {
    tipo: "Sem Glúten",
    tempo: "10 minutos",
    dificuldade: "Fácil",
    nome: "Torta de Banana sem Glúten",
    link: "torta-de-banana-semGluten.html",
  },
  {
    tipo: "Sem Glúten",
    tempo: "10 minutos",
    dificuldade: "Fácil",
    nome: "Bolo de Laranja sem Glúten",
    link: "bolo-de-laranja-semGLuten.html",
  },
  {
    tipo: "Sem Glúten",
    tempo: "25 minutos",
    dificuldade: "Médio",
    nome: "Red Velvet sem Glúten",
    link: "red-velvet-semGluten.html",
  },
  {
    tipo: "Sem Glúten",
    tempo: "40 minutos",
    dificuldade: "Médio",
    nome: "Pão sem Glúten",
    link: "pao-sem-gluten.html",
  },

  // VEGANAS
  {
    tipo: "Vegano",
    tempo: "20 minutos",
    dificuldade: "Médio",
    nome: "Bife à Milanesa Vegano",
    link: "milanesa-de-soja-vegano.htm",
  },
  {
    tipo: "Vegano",
    tempo: "20 minutos",
    dificuldade: "Médio",
    nome: "Sushi Vegano",
    link: "sushi-sem-peixe-vegano.html",
  },
  {
    tipo: "Vegano",
    tempo: "40 minutos",
    dificuldade: "Médio",
    nome: "Lasanha Vegana",
    link: "lasanha-de-liquidificador.html",
  },
  {
    tipo: "Vegano",
    tempo: "15 minutos",
    dificuldade: "Fácil",
    nome: "Torta Vegana de Brócolis",
    link: "torta-vegana.html",
  },
  {
    tipo: "Vegano",
    tempo: "20 minutos",
    dificuldade: "Médio",
    nome: "Sonho Vegano",
    link: "sonho-vegano.html",
  },
  {
    tipo: "Vegano",
    tempo: "10 minutos",
    dificuldade: "Fácil",
    nome: "Bolo de Chocolate Vegano",
    link: "bolo-chocolate-vegano.html",
  },
  {
    tipo: "Vegano",
    tempo: "15 minutos",
    dificuldade: "Fácil",
    nome: "Cookie de Amendoim Vegano",
    link: "cookie-de-amendoim.html",
  },
  {
    dificuldade: "Médio",
    nome: "Iogurte de Coco Vegano",
    link: "iogurte-de-coco-vegano.html",
  },

  // DOCES
  {
    tipo: "Doce",
    tempo: "15 minutos",
    dificuldade: "Fácil",
    nome: "Bolo de Chocolate",
    link: "bolo-chocolate.html",
  },
  {
    tipo: "Doce",
    tempo: "15 minutos",
    dificuldade: "Fácil",
    nome: "Cookie Tradicional",
    link: "cookie.html",
  },
  {
    tipo: "Doce",
    tempo: "30 minutos",
    dificuldade: "Fácil",
    nome: "Torta de Limão",
    link: "torta-de-limao.html",
  },
  {
    tipo: "Doce",
    tempo: "15 minutos",
    dificuldade: "Fácil",
    nome: "Pudim de Leite",
    link: "pudim-de-leite.html",
  },
  {
    tipo: "Doce",
    tempo: "15 minutos",
    dificuldade: "Fácil",
    nome: "Brigadeiro",
    link: "brigadeiro.html",
  },
  {
    tipo: "Doce",
    tempo: "30 minutos",
    dificuldade: "Fácil",
    nome: "Pavê de Chocolate",
    link: "pave-de-chocolate.html",
  },
  {
    tipo: "Doce",
    tempo: "15 minutos",
    dificuldade: "Fácil",
    nome: "Palha Italiana",
    link: "palha-italiana.html",
  },
  {
    tipo: "Doce",
    tempo: "10 minutos",
    dificuldade: "Fácil",
    nome: "Brownie",
    link: "brownie.html",
  },
];

  let respostas = [];
  let indice = 0;

  abrirQuiz.addEventListener("click", (e) => {
    e.preventDefault();
    abrirQuiz.style.display = "none";
    quizContainer.style.display = "block";
    mostrarPergunta();
  });

  function mostrarPergunta() {
    if (indice < perguntas.length) {
      const p = perguntas[indice];
      questionEl.textContent = p.pergunta;
      optionsEl.innerHTML = "";

      p.opcoes.forEach((op) => {
        const btn = document.createElement("button");
        btn.textContent = op;
        btn.classList.add("quiz-option");
        btn.addEventListener("click", () => responder(op));
        optionsEl.appendChild(btn);
      });
    } else {
      mostrarResultado();
    }
  }

  function responder(opcao) {
    respostas.push(opcao);
    indice++;
    setTimeout(mostrarPergunta, 200);
  }

  function mostrarResultado() {
    const [tipo, tempo, dificuldade] = respostas;
    const possiveisReceitas = receitas.filter(
      (r) => r.tipo === tipo && r.tempo === tempo && r.dificuldade === dificuldade
    );

    questionEl.textContent = "Quiz finalizado!";
    optionsEl.innerHTML = "";
    resultBox.style.display = "block";

    if (possiveisReceitas.length) {
      recipeResult.innerHTML = `<h3>🍴 Recomendamos as seguintes receitas: </h3>`;

      possiveisReceitas.forEach(receita => {
        const receitaEl = document.createElement("div");
        receitaEl.classList.add("recipe");
        receitaEl.innerHTML = `
          <h4>${receita.nome}</h4>
          <a href="${receita.link}">Ver Receita</a>
        `;
        recipeResult.appendChild(receitaEl);
      });
    } else {
      recipeResult.innerHTML = `
        <h3>😔 Não encontramos uma receita que combine com suas escolhas.</h3>
      `;
    }
  }

  refazerBtn.addEventListener("click", () => {
    respostas = [];
    indice = 0;
    resultBox.style.display = "none";
    mostrarPergunta();
  });

  fecharBtn.addEventListener("click", () => {
    quizContainer.style.display = "none";
    abrirQuiz.style.display = "inline-block";
    respostas = [];
    indice = 0;
    resultBox.style.display = "none";
  });
});
