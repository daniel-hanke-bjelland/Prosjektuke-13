const quiz = [
    {
        spørsmål: "Hva heter jeg?",
        valg: [
            {
                id: 1,
                label: "Daniel"
            },
            {
                id: 2,
                label: "Furkan"
            },
            {
                id: 3,
                label: "Leonell"
            },
            {
                id: 4,
                label: "Mikael"
            }
        ],
        rikigSvar: 1
    },    
    {
        spørsmål: "Hva heter læreren?",
        valg: [
            {
                id: 1,
                label: "Gøril"
            },
            {
                id: 2,
                label: "Monika"
            },
            {
                id: 3,
                label: "Knut Ivar"
            },
            {
                id: 4,
                label: "Geir"
            }
        ],
        rikigSvar: 2
    },
]


let valgtSvar = false;
let tilbakemeldign = document.getElementById("tilbakemelding");
let nummer = 0;
let totalscore = 0;


function loadQuiz() {
    console.log("Loader Quiz")

    let firstElement = quiz[nummer];

    console.log(firstElement);

    let sprøsmålOmrådet = document.getElementById("sprøsmål");
    let quizButtonOmradet = document.getElementById("quiz_buttonOmradet");
    
    console.log(sprøsmålOmrådet);

    console.log(firstElement.spørsmål);

    sprøsmålOmrådet.textContent += `${firstElement.spørsmål}`;
    
    let knapper = firstElement.valg;
    
    console.log(knapper);

    knapper.forEach(knapp => {
        quizButtonOmradet.innerHTML += `<button id="${knapp.id}" onclick="checkAnswer(${knapp.id},${firstElement.rikigSvar})" >${knapp.label}</button>`
    });
}

function checkAnswer(knappId, rikigSvar) {
    // console.log(buttonId);
    // console.log(buttonId, rikigSvar);


    let erRikig = knappId === rikigSvar;

    console.log(erRikig);

    if (erRikig && !valgtSvar) {
        valgtSvar = true;
        document.getElementById(knappId).classList.add("svar_riktig");
        tilbakemeldign.textContent = "Det er riktig!";
        totalscore++;
        console.log(totalscore);
    } else if (!erRikig && !valgtSvar) {
        valgtSvar = true;
        document.getElementById(knappId).classList.add("svar_feil");
        document.getElementById(rikigSvar).classList.add("svar_riktig");
        tilbakemeldign.textContent = "Det er feil!";
        
    }
    
    
    if (valgtSvar) {
        let nesteKnapp = document.getElementById("neste");
        
        nesteKnapp.innerHTML = `<button onclick="nesteSporsmål()" >Neste</button>`;
    }
}

function nesteSporsmål() {
    nummer++;

    let nextElement = quiz[nummer];
    let sprøsmålOmrådet = document.getElementById("sprøsmål");
    let quizButtonOmradet = document.getElementById("quiz_buttonOmradet");
    let nesteKnapp = document.getElementById("neste");
    
    let quizLengde = quiz.length;
    
    
    if (nummer < quizLengde ) {
        valgtSvar = false;
        
        tilbakemeldign.textContent = "";
        sprøsmålOmrådet.textContent = ``;
        quizButtonOmradet.innerHTML = "";
        nesteKnapp.innerHTML = "";
        
        sprøsmålOmrådet.textContent += `${nextElement.spørsmål}`;
        
        
        let knapper = nextElement.valg;
        console.log(knapper);

        knapper.forEach(knapp => {
            quizButtonOmradet.innerHTML += `<button id="${knapp.id}" onclick="checkAnswer(${knapp.id},${nextElement.rikigSvar})" >${knapp.label}</button>`
        });
    } else {
        console.log("Du har kommet til siste side.");

        let sammendragOmrådet = document.getElementById("sammendrag");
        let quizOmrådet = document.getElementById("quiz-omradet");

        sammendragOmrådet.style.display = "flex";
        sammendragOmrådet.innerHTML += `<h2>Din poengsumm er ${totalscore} av totalt ${quizLengde} mulige poeng.</h2>`

        quizOmrådet.style.display = "none";
    }

   
}

loadQuiz()