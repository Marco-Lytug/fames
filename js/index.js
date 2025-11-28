document.addEventListener("DOMContentLoaded", () => {
  const abrirQuiz = document.getElementById("abrirQuiz");
  const quizContainer = document.getElementById("quiz-container");
  const questionEl = document.getElementById("quiz-question");
  const optionsEl = document.getElementById("quiz-options");
  const resultBox = document.getElementById("quiz-result");
  const recipeResult = document.getElementById("recipe-result");
  const refazerBtn = document.getElementById("refazer");
  const fecharBtn = document.getElementById("fecharQuiz");

  // ============================
  //  PERGUNTAS
  // ============================
  const perguntas = [
    { pergunta: "1. Estilo de comida?", opcoes: ["Salgado", "Doce"] },
    {
      pergunta: "2. Possui alguma preferência ou restrição alimentar?",
      opcoes: ["Sem lactose", "Sem gluten", "Vegana", "Vegetariana", "Outros", "Nenhuma"]
    },
    {
      pergunta: "3. Tempo de preparo desejado?",
      opcoes: ["Muito rapido", "Rápido", "Médio", "Lento", "Não tenho preferência"]
    },
    {
      pergunta: "4. Nível de dificuldade?",
      opcoes: ["Prático", "Moderado", "Difícil", "Qualquer dificuldade"]
    },
    {
      pergunta: "5. Preferência de sabor?",
      opcoes: ["Suave", "Médio", "Forte / Intenso", "Apimentado", "Agridoce", "Nenhuma preferência"]
    },
    {
      pergunta: "6. Para qual refeição?",
      opcoes: ["Café da manhã", "Lanche", "Almoço", "Jantar", "Sobremesa", "Petisco"]
    },
    {
      pergunta: "7. Modo de preparo?",
      opcoes: ["Assado", "Frito", "Cozido", "Grelhado", "Cru", "Airfryer", "Micro-ondas"]
    },
    {
      pergunta: "8. Preferência de textura?",
      opcoes: ["Crocante", "Cremoso", "Macio", "Seco", "Não importa"]
    },
    {
      pergunta: "9. Temperatura da refeição?",
      opcoes: ["Quente", "Frio", "Nenhuma preferência"]
    },
  ];

  // ============================
  // RECEITAS (use a sua array padronizada aqui)
  // ============================
  // certifique-se que 'receitas' existe e está padronizada (campo names em minúsculas)
 let receitas = [
  // ---------------- SALGADOS ----------------
  {
    tipo: "salgado",
    preferencia: ["nenhuma"],
    tempo: ["lento"],
    dificuldade: ["moderado"],
    sabor: ["forte/intenso"],
    refeicao: ["almoco"],
    preparar: ["cozido"],
    textura: ["macio", "cremoso"],
    temperatura: "quente",
    nome: "Feijoada",
    link: "feijoada.html",
  },
  {
    tipo: "salgado",
    preferencia: ["nenhuma"],
    tempo: ["lento"],
    dificuldade: ["moderado", "dificil"],
    sabor: ["forte/intenso", "medio"],
    refeicao: ["almoco", "jantar", "lanche"],
    preparar: ["assado"],
    textura: ["macio", "crocante"],
    temperatura: "quente",
    nome: "Pizza de Calabresa",
    link: "pizza-de-calabresa.html",
  },
  {
    tipo: "salgado",
    preferencia: ["nenhuma"],
    tempo: ["medio", "rapido"],
    dificuldade: ["moderado", "pratico"],
    sabor: ["suave", "medio"],
    refeicao: ["petisco", "jantar", "lanche"],
    preparar: ["assado"],
    textura: ["macio", "cremoso"],
    temperatura: "quente",
    nome: "Hambúrguer Caseiro",
    link: "hamburguer.html",
  },
  {
    tipo: "salgado",
    preferencia: ["nenhuma"],
    tempo: ["medio", "lento"],
    dificuldade: ["moderado", "pratico"],
    sabor: ["suave", "medio"],
    refeicao: ["almoco", "jantar", "lanche"],
    preparar: ["assado"],
    textura: ["macio", "cremoso"],
    temperatura: "quente",
    nome: "Empadão de Frango",
    link: "Empadao.html",
  },
  {
    tipo: "salgado",
    preferencia: ["nenhuma"],
    tempo: ["medio", "rapido"],
    dificuldade: ["moderado", "pratico"],
    sabor: ["forte/intenso", "medio"],
    refeicao: ["almoco", "jantar"],
    preparar: ["assado", "frito"],
    textura: ["crocante", "cremoso"],
    temperatura: "quente",
    nome: "Bife à Parmegiana",
    link: "parmediana-de-carne.html",
  },
  {
    tipo: "salgado",
    preferencia: ["nenhuma"],
    tempo: ["muito rapido", "rapido"],
    dificuldade: ["moderado", "pratico"],
    sabor: ["suave", "medio"],
    refeicao: ["cafe da manha", "petisco", "lanche"],
    preparar: ["assado", "airfryer"],
    textura: ["macio", "crocante"],
    temperatura: "quente",
    nome: "Pão de Queijo",
    link: "pao-queijo-salgado.html",
  },
  {
    tipo: "salgado",
    preferencia: ["nenhuma"],
    tempo: ["muito rapido", "rapido"],
    dificuldade: ["moderado", "pratico"],
    sabor: ["suave", "medio"],
    refeicao: ["cafe da manha", "petisco", "lanche"],
    preparar: ["assado", "airfryer"],
    textura: ["macio", "crocante"],
    temperatura: "quente",
    nome: "Macarrão Carbonara",
    link: "carbonara.html",
  },

  // ---------- SEM GLÚTEN / SEM LACTOSE ----------
  {
    tipo: "salgado",
    preferencia: ["sem gluten"],
    tempo: ["medio", "rapido"],
    dificuldade: ["moderado"],
    sabor: ["suave", "medio"],
    refeicao: ["petisco", "lanche"],
    preparar: ["frito", "airfryer"],
    textura: ["macio", "crocante"],
    temperatura: "quente",
    nome: "Coxinha de Mandioca sem Glúten",
    link: "coxinha-de-mandioca-semGLuten.html",
  },
  {
    tipo: "doce",
    preferencia: ["sem gluten", "sem lactose"],
    tempo: ["medio", "rapido"],
    dificuldade: ["pratico"],
    sabor: ["suave", "medio"],
    refeicao: ["petisco", "lanche", "sobremesa"],
    preparar: ["cru", "airfryer"],
    textura: ["macio", "cremoso"],
    temperatura: "frio",
    nome: "Bombom de Morango sem Glúten",
    link: "bombom-de-morango-semGluten.html",
  },
  {
    tipo: "salgado",
    preferencia: ["sem gluten"],
    tempo: ["muito rapido", "rapido"],
    dificuldade: ["pratico", "moderado"],
    sabor: ["medio"],
    refeicao: ["cafe da manha", "lanche", "jantar"],
    preparar: ["assado", "airfryer"],
    textura: ["macio", "cremoso"],
    temperatura: "quente",
    nome: "Torta Salgada sem Glúten",
    link: "torta-salgada-semGluten.html",
  },
  {
    tipo: "salgado",
    preferencia: ["sem gluten", "sem lactose"],
    tempo: ["medio", "rapido"],
    dificuldade: ["pratico", "moderado"],
    sabor: ["suave", "medio"],
    refeicao: ["cafe da manha", "lanche", "petisco"],
    preparar: ["assado", "airfryer"],
    textura: ["macio"],
    temperatura: "quente",
    nome: "Pão de Queijo sem Lactose e Sem Glúten",
    link: "pao-queijo-semGluten.html",
  },
  {
    tipo: "doce",
    preferencia: ["sem gluten", "sem lactose", "vegetariano"],
    tempo: ["muito rapido", "rapido"],
    dificuldade: ["pratico"],
    sabor: ["medio"],
    refeicao: ["sobremesa", "lanche"],
    preparar: ["assado"],
    textura: ["macio"],
    temperatura: "quente",
    nome: "Torta de Banana sem Glúten",
    link: "torta-de-banana-semGluten.html",
  },
  {
    tipo: "doce",
    preferencia: ["sem gluten", "sem lactose", "vegetariano"],
    tempo: ["medio", "rapido"],
    dificuldade: ["pratico"],
    sabor: ["medio", "forte/intenso"],
    refeicao: ["sobremesa", "lanche"],
    preparar: ["assado"],
    textura: ["macio"],
    temperatura: "quente",
    nome: "Bolo de Laranja sem Glúten",
    link: "bolo-de-laranja-semGLuten.html",
  },
  {
    tipo: "doce",
    preferencia: ["sem gluten", "sem lactose", "vegetariano"],
    tempo: ["muito rapido", "rapido"],
    dificuldade: ["pratico"],
    sabor: ["medio", "forte/intenso"],
    refeicao: ["sobremesa", "lanche"],
    preparar: ["assado"],
    textura: ["macio"],
    temperatura: "quente",
    nome: "Red Velvet sem Glúten",
    link: "red-velvet-semGluten.html",
  },
  {
    tipo: "salgado",
    preferencia: ["sem gluten", "vegana"],
    tempo: ["rapido"],
    dificuldade: ["pratico"],
    sabor: ["suave"],
    refeicao: ["cafe da manha", "lanche"],
    preparar: ["assado"],
    textura: ["macio"],
    temperatura: "quente",
    nome: "Pão sem Glúten",
    link: "pao-sem-gluten.html",
  },

  // ----------------- VEGANAS -----------------
  {
    tipo: "salgado",
    preferencia: ["vegana"],
    tempo: ["rapido"],
    dificuldade: ["moderado"],
    sabor: ["medio", "forte/intenso"],
    refeicao: ["almoco", "jantar"],
    preparar: ["frito"],
    textura: ["macio", "crocante"],
    temperatura: "quente",
    nome: "Bife à Milanesa Vegano",
    link: "milanesa-de-soja-vegano.htm",
  },
  {
    tipo: "salgado",
    preferencia: ["vegana"],
    tempo: ["medio"],
    dificuldade: ["moderado"],
    sabor: ["suave"],
    refeicao: ["almoco", "jantar"],
    preparar: ["cru"],
    textura: ["macio"],
    temperatura: "frio",
    nome: "Sushi Vegano",
    link: "sushi-sem-peixe-vegano.html",
  },
  {
    tipo: "salgado",
    preferencia: ["vegana"],
    tempo: ["lento"],
    dificuldade: ["moderado"],
    sabor: ["suave"],
    refeicao: ["almoco", "jantar"],
    preparar: ["assado"],
    textura: ["macio", "cremoso"],
    temperatura: "quente",
    nome: "Lasanha Vegana",
    link: "lasanha-de-liquidificador.html",
  },
  {
    tipo: "salgado",
    preferencia: ["vegana"],
    tempo: ["rapido"],
    dificuldade: ["pratico"],
    sabor: ["medio"],
    refeicao: ["lanche", "jantar"],
    preparar: ["assado"],
    textura: ["macio", "cremoso"],
    temperatura: "quente",
    nome: "Torta Vegana de Brócolis",
    link: "torta-vegana.html",
  },
  {
    tipo: "doce",
    preferencia: ["vegana", "sem lactose"],
    tempo: ["medio"],
    dificuldade: ["moderado"],
    sabor: ["suave"],
    refeicao: ["lanche", "petisco"],
    preparar: ["frito"],
    textura: ["macio", "cremoso"],
    temperatura: "quente",
    nome: "Sonho Vegano",
    link: "sonho-vegano.html",
  },
  {
    tipo: "doce",
    preferencia: ["vegana"],
    tempo: ["medio", "rapido"],
    dificuldade: ["pratico"],
    sabor: ["medio"],
    refeicao: ["lanche", "sobremesa"],
    preparar: ["assado"],
    textura: ["macio", "cremoso"],
    temperatura: "quente",
    nome: "Bolo de Chocolate Vegano",
    link: "bolo-chocolate-vegano.html",
  },
  {
    tipo: "doce",
    preferencia: ["vegana"],
    tempo: ["lento", "medio"],
    dificuldade: ["moderado"],
    sabor: ["suave"],
    refeicao: ["lanche", "cafe da manha"],
    preparar: ["cru"],
    textura: ["macio", "cremoso"],
    temperatura: "frio",
    nome: "Cookie de Amendoim Vegano",
    link: "cookie-de-amendoim.html",
  },

  // -------------------- DOCES --------------------
  {
    tipo: "doce",
    preferencia: ["vegetariana", "nenhuma"],
    tempo: ["rapido", "medio"],
    dificuldade: ["pratico"],
    sabor: ["forte/intenso"],
    refeicao: ["lanche", "sobremesa"],
    preparar: ["assado"],
    textura: ["macio"],
    temperatura: "quente",
    nome: "Bolo de Chocolate",
    link: "bolo-chocolate.html",
  },
  {
    tipo: "doce",
    preferencia: ["vegetariana", "nenhuma"],
    tempo: ["rapido", "medio"],
    dificuldade: ["pratico"],
    sabor: ["forte/intenso", "medio"],
    refeicao: ["lanche", "sobremesa"],
    preparar: ["assado"],
    textura: ["macio"],
    temperatura: "quente",
    nome: "Cookie Tradicional",
    link: "cookie.html",
  },
  {
    tipo: "doce",
    preferencia: ["vegetariana", "nenhuma"],
    tempo: ["rapido", "medio"],
    dificuldade: ["moderado"],
    sabor: ["forte/intenso", "medio"],
    refeicao: ["jantar", "sobremesa"],
    preparar: ["assado"],
    textura: ["cremoso"],
    temperatura: "quente",
    nome: "Torta de Limão",
    link: "torta-de-limao.html",
  },
  {
    tipo: "doce",
    preferencia: ["vegetariana", "nenhuma", "sem gluten"],
    tempo: ["rapido", "medio"],
    dificuldade: ["pratico"],
    sabor: ["suave"],
    refeicao: ["jantar", "sobremesa"],
    preparar: ["assado"],
    textura: ["cremoso"],
    temperatura: "frio",
    nome: "Pudim de Leite",
    link: "pudim-de-leite.html",
  },
  {
    tipo: "doce",
    preferencia: ["vegetariana", "nenhuma", "sem gluten"],
    tempo: ["rapido"],
    dificuldade: ["pratico"],
    sabor: ["medio"],
    refeicao: ["sobremesa"],
    preparar: ["cozido"],
    textura: ["macio"],
    temperatura: "frio",
    nome: "Brigadeiro",
    link: "brigadeiro.html",
  },
  {
    tipo: "doce",
    preferencia: ["vegetariana", "nenhuma"],
    tempo: ["rapido", "muito rapido"],
    dificuldade: ["pratico"],
    sabor: ["medio", "suave"],
    refeicao: ["sobremesa"],
    preparar: ["cozido"],
    textura: ["cremoso"],
    temperatura: "frio",
    nome: "Pavê de Chocolate",
    link: "pave-de-chocolate.html",
  },
  {
    tipo: "doce",
    preferencia: ["vegetariana", "nenhuma"],
    tempo: ["rapido", "muito rapido"],
    dificuldade: ["pratico"],
    sabor: ["forte/intenso"],
    refeicao: ["sobremesa"],
    preparar: ["cozido"],
    textura: ["cremoso"],
    temperatura: "frio",
    nome: "Palha Italiana",
    link: "palha-italiana.html",
  },
  {
    tipo: "doce",
    preferencia: ["vegetariana", "nenhuma"],
    tempo: ["rapido", "muito rapido"],
    dificuldade: ["pratico"],
    sabor: ["medio"],
    refeicao: ["sobremesa", "lanche"],
    preparar: ["assado"],
    textura: ["macio"],
    temperatura: "quente",
    nome: "Brownie",
    link: "brownie.html",
  },
];
  // ============================
  // UTIL: normaliza string (remove acento, minuscula, trim)
  // ============================
  function normalizeStr(str) {
    if (str === undefined || str === null) return "";
    // for safety convert to string
    return String(str)
      .normalize("NFD")              // decompose accents
      .replace(/[\u0300-\u036f]/g, "") // remove diacritics
      .replace(/\s+/g, " ")          // collapse multiple spaces
      .trim()
      .toLowerCase();
  }

  // ============================
  // Estado do quiz
  // ============================
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

  function responder(opcaoOriginal) {
    // salva a resposta normalizada (sem acentos, lower case)
    const respostaNormalizada = normalizeStr(opcaoOriginal);
    respostas.push(respostaNormalizada);
    indice++;
    setTimeout(mostrarPergunta, 200);
  }

  // ============================
  // Função inteligente de combinação
  // aceita string ou array no campo da receita
  // ============================
  function combina(valorReceita, respostaNormalizada) {
    // respostas que significam "ignorar filtro"
    const ignores = [
      "nenhuma preferencia", "nao importa", "nenhuma", "nao tenho preferencia", "nao tenho preferências"
    ].map(normalizeStr);

    if (!respostaNormalizada || ignores.includes(respostaNormalizada)) {
      return true; // usuário não quer filtrar por esse campo
    }

    if (valorReceita === undefined || valorReceita === null) return false;

    if (Array.isArray(valorReceita)) {
      const listaNormalizada = valorReceita.map(normalizeStr);
      return listaNormalizada.includes(respostaNormalizada);
    } else {
      return normalizeStr(valorReceita) === respostaNormalizada;
    }
  }

  // ============================
  // Mostrar resultado (filtro)
  // ============================
  function mostrarResultado() {
    // garante que respostas tenha 9 entradas (se não, preenche com "")
    while (respostas.length < perguntas.length) respostas.push("");

    const [
      tipo,
      restricao,
      tempo,
      dificuldade,
      sabor,
      refeicao,
      preparo,
      textura,
      temperatura
    ] = respostas;

    // filtro inteligente: campos da receita são: tipo, preferencia, tempo, dificuldade, sabor, refeicao, preparar, textura, temperatura
    const possiveisReceitas = receitas.filter((r) =>
      combina(r.tipo, tipo) &&
      combina(r.preferencia, restricao) &&
      combina(r.tempo, tempo) &&
      combina(r.dificuldade, dificuldade) &&
      combina(r.sabor, sabor) &&
      combina(r.refeicao, refeicao) &&
      combina(r.preparar, preparo) &&
      combina(r.textura, textura) &&
      combina(r.temperatura, temperatura)
    );

    questionEl.textContent = "Quiz finalizado!";
    optionsEl.innerHTML = "";
    resultBox.style.display = "block";
    recipeResult.innerHTML = ""; // limpa resultados anteriores

    if (possiveisReceitas.length) {
      recipeResult.innerHTML = `<h3>🍴 Recomendamos as seguintes receitas:</h3>`;

      possiveisReceitas.forEach((receita) => {
        const receitaEl = document.createElement("div");
        receitaEl.classList.add("recipe");
        receitaEl.innerHTML = `
          <h4>${receita.nome}</h4>
          <a href="${receita.link}">Ver Receita</a>
        `;
        recipeResult.appendChild(receitaEl);
      });
    } else {
      recipeResult.innerHTML = `<h3>😔 Nenhuma receita combina com suas escolhas.</h3>`;
    }
  }

  refazerBtn.addEventListener("click", () => {
    respostas = [];
    indice = 0;
    resultBox.style.display = "none";
    recipeResult.innerHTML = "";
    mostrarPergunta();
  });

  fecharBtn.addEventListener("click", () => {
    quizContainer.style.display = "none";
    abrirQuiz.style.display = "inline-block";
    respostas = [];
    indice = 0;
    resultBox.style.display = "none";
    recipeResult.innerHTML = "";
  });
});
