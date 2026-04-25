document.addEventListener("DOMContentLoaded", () => {
    
    const quizData = [
        {
            pergunta: "Qual o principal benefício do sistema Lavoura-Pecuária-Floresta (ILPF)?",
            opcoes: [
                "Redução drástica do uso de sementes",
                "Otimização do uso da terra e recuperação de pastagens",
                "Fim completo da necessidade de irrigação",
                "Aumento do consumo de defensivos agrícolas"
            ],
            correta: 1,
            info: "O ILPF integra diferentes sistemas produtivos para melhorar a saúde do solo e o bem-estar animal."
        },
        {
            pergunta: "Como a agricultura de precisão contribui para a sustentabilidade?",
            opcoes: [
                "Substituindo toda a mão de obra humana por robôs",
                "Utilizando aviões para irrigação em larga escala",
                "Aplicando insumos apenas onde e quando são necessários",
                "Aumentando a área de desmatamento para novas plantações"
            ],
            correta: 2,
            info: "Sensores e dados permitem que o produtor economize recursos e proteja o meio ambiente."
        }
    ];

    let currentIdx = 0;
    let score = 0;

    const questionEl = document.getElementById("quiz-question");
    const optionsCont = document.getElementById("options-container");
    const feedbackBox = document.getElementById("quiz-feedback");
    const nextBtn = document.getElementById("next-btn");

    function initQuiz() {
        feedbackBox.style.display = "none";
        nextBtn.style.display = "none";
        
        const q = quizData[currentIdx];
        questionEl.textContent = q.pergunta;
        optionsCont.innerHTML = "";

        q.opcoes.forEach((opt, index) => {
            const btn = document.createElement("button");
            btn.classList.add("option-btn");
            btn.textContent = opt;
            btn.onclick = () => checkAnswer(index);
            optionsCont.appendChild(btn);
        });
    }

    function checkAnswer(selected) {
        const q = quizData[currentIdx];
        const buttons = document.querySelectorAll(".option-btn");
        
        buttons.forEach(b => b.disabled = true);

        feedbackBox.style.display = "block";
        feedbackBox.textContent = q.info;

        if (selected === q.correta) {
            score++;
            buttons[selected].style.background = "#E8F5E9";
            buttons[selected].style.borderColor = "#2E7D32";
            feedbackBox.style.color = "#1B5E20";
        } else {
            buttons[selected].style.background = "#FFEBEE";
            buttons[selected].style.borderColor = "#C62828";
            buttons[q.correta].style.background = "#E8F5E9";
            feedbackBox.style.color = "#C62828";
        }

        nextBtn.style.display = "block";
    }

    nextBtn.onclick = () => {
        currentIdx++;
        if (currentIdx < quizData.length) {
            initQuiz();
        } else {
            showFinalResult();
        }
    };

    function showFinalResult() {
        questionEl.textContent = "Avaliação Concluída";
        optionsCont.innerHTML = `<p style="text-align:center; padding: 20px;">Você demonstrou conhecimento em ${score} de ${quizData.length} temas sustentáveis.</p>`;
        feedbackBox.style.display = "none";
        nextBtn.style.display = "none";
    }

    initQuiz();
});
