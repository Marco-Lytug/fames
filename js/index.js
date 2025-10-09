document.addEventListener("DOMContentLoaded", () => {
  const botaoQuiz = document.getElementById("abrirQuiz");
  const quizSection = document.getElementById("quiz-section");
  const refazerBtn = document.getElementById("refazer");
  const fecharBtn = document.getElementById("fecharQuiz");

  botaoQuiz.addEventListener("click", (e) => {
    e.preventDefault();
    quizSection.style.display = "block";
    window.scrollTo({ top: quizSection.offsetTop, behavior: "smooth" });
    mostrarPergunta();
  });

  refazerBtn.addEventListener("click", () => {
    restartQuiz();
  });

  fecharBtn.addEventListener("click", () => {
    quizSection.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

const receitas = [
  { nome: "Pizza de Calabresa", categoria: "Salgado", tempo: "30 a 60 minutos", dificuldade: "Média", destaque: "Sabor clássico e irresistível, perfeita para compartilhar.", ingredientes: "Farinha, fermento, molho de tomate, calabresa, queijo e orégano.", calorias: 280, link: "pizza-calabresa.html" },
  { nome: "Pão sem Glúten", categoria: "Sem Glúten", tempo: "30 a 60 minutos", dificuldade: "Média", destaque: "Alternativa saudável e saborosa para intolerantes ao glúten.", ingredientes: "Farinha de arroz, polvilho, ovos, fermento e azeite.", calorias: 190, link: "pao-sem-gluten.html" },
  { nome: "Lasanha Vegana", categoria: "Vegano", tempo: "Mais de 1 hora", dificuldade: "Difícil", destaque: "Camadas de sabor 100% vegetal, com molho e legumes frescos.", ingredientes: "Massa sem ovos, legumes, molho de tomate, azeite e tofu.", calorias: 350, link: "torta-de-liquidificador.html" },
  { nome: "Bombom de Morango sem Glúten", categoria: "Doce", tempo: "Até 30 minutos", dificuldade: "Fácil", destaque: "Refrescante e leve, ideal para sobremesa rápida.", ingredientes: "Morango, chocolate meio amargo e creme de leite.", calorias: 180, link: "bombom-de-morango-semGluten.html" },
  { nome: "Brigadeiro Tradicional", categoria: "Doce", tempo: "Até 30 minutos", dificuldade: "Fácil", destaque: "O doce brasileiro mais amado, simples e delicioso.", ingredientes: "Leite condensado, chocolate em pó, manteiga e granulado.", calorias: 150, link: "brigadeiro.html" }
];

const perguntas = [
  { pergunta: "🍽️ Que tipo de receita você quer?", opcoes: ["Salgado", "Doce", "Vegano", "Sem Glúten"] },
  { pergunta: "⏱️ Quanto tempo você tem para cozinhar?", opcoes: ["Até 30 minutos", "30 a 60 minutos", "Mais de 1 hora"] },
  { pergunta: "🧑‍🍳 Qual nível de dificuldade prefere?", opcoes: ["Fácil", "Média", "Difícil"] }
];

let respostas = {};
let perguntaAtual = 0;

function mostrarPergunta() {
  const quizDiv = document.getElementById("quiz");
  const resultDiv = document.getElementById("result");

  if (perguntaAtual < perguntas.length) {
    const q = perguntas[perguntaAtual];
    document.getElementById("question").textContent = q.pergunta;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    q.opcoes.forEach(op => {
      const btn = document.createElement("button");
      btn.textContent = op;
      btn.onclick = () => {
        respostas[perguntaAtual] = op;
        perguntaAtual++;
        mostrarPergunta();
      };
      optionsDiv.appendChild(btn);
    });
  } else {
    mostrarResultado();
  }

  quizDiv.style.display = "block";
  resultDiv.style.display = "none";
}

function mostrarResultado() {
  const [cat, tempo, dif] = [respostas[0], respostas[1], respostas[2]];
  let melhor = receitas.find(r => r.categoria === cat && r.tempo === tempo && r.dificuldade === dif);
  if (!melhor) melhor = receitas.find(r => r.categoria === cat);

  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("recipe-result").innerHTML = `
    <h3>${melhor.nome}</h3>
    <p><strong>Categoria:</strong> ${melhor.categoria}</p>
    <p><strong>Destaque:</strong> ${melhor.destaque}</p>
    <p><strong>Ingredientes:</strong> ${melhor.ingredientes}</p>
    <p><strong>Tempo:</strong> ${melhor.tempo}</p>
    <p><strong>Dificuldade:</strong> ${melhor.dificuldade}</p>
    <p><strong>Calorias:</strong> ${melhor.calorias} kcal</p>
    <a class="botao" href="${melhor.link}">🍴 Ver receita completa</a>
  `;
}

function restartQuiz() {
  perguntaAtual = 0;
  respostas = {};
  mostrarPergunta();
}
