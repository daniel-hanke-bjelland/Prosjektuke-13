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

    // console.log(firstElement.spørsmål);

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

        let quizOmrådet = document.getElementById("quiz-omradet");
        quizOmrådet.style.display = "none";

        let sammendragOmrådet = document.getElementById("sammendrag");

        sammendragOmrådet.style.display = "flex";
        sammendragOmrådet.innerHTML += `<p>Din poengsumm er ${totalscore} av totalt ${quizLengde} mulige poeng.</p>`

    }

   
}

// loadQuiz()

function registrer() {

    console.log("PRØVER Å REGGISTRERE");
    let registrerOmrådet = document.getElementById("quiz-registrer_wrapper1");

    let navn = document.getElementById("input_navn").value;
    console.log(navn);

    if (navn !== "") {
            let bruker = {
            navn
        }
        console.log(bruker);

        localStorage.setItem("bruker", JSON.stringify(bruker));


        registrerOmrådet.style.display = "none";

        let quizOmradet = document.getElementsByClassName("quiz-omradet_wrapper")[0];
        console.log(quizOmradet);

        quizOmradet.style.display = "flex";

        loadQuiz()
    }
}

// function registrerNyBruker() {
//     console.log("PRØVER Å REGISTRERE PÅ NYTT");

//     let quizOmradetWrapper = document.getElementsByClassName("quiz-omradet_wrapper")[0];

//     quizOmradetWrapper.style.display = "none";

//     let registrerOmrådet = document.getElementById("quiz-omradet_wrapper");
//     registrerOmrådet.style.display = "flex";
// }


function startPaNytt() {
    // console.log("Vil starte på nytt med samme burker");

    // let quizOmrådet = document.getElementById("quiz-omradet");
    // quizOmrådet.style.display = "flex";

    // let sammendragOmrådet = document.getElementById("sammendrag");

    // sammendragOmrådet.style.display = "none";

    // nummer = 0;

    // loadQuiz(nummer)

    window.location.reload("./script.js");
}

