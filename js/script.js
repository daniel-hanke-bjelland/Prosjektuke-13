const quiz = [
  {
    spørsmål: "Hvilken enhet måler elektrisk strøm?",
    valg: [
      {
        id: 1,
        label: "Volt",
      },
      {
        id: 2,
        label: "Watt",
      },
      {
        id: 3,
        label: "Ampere",
      },
      {
        id: 4,
        label: "Ohm",
      },
    ],
    rikigSvar: 3,
  },
  {
    spørsmål: "Hva er forskjellen på serie- og parallellkobling?",
    valg: [
      {
        id: 1,
        label: "Serie gir samme spenning over alle komponenter",
      },
      {
        id: 2,
        label: "Parallell gir samme strøm gjennom alle komponenter",
      },
      {
        id: 3,
        label: "Serie deler spenningen mellom komponenter",
      },
      {
        id: 4,
        label: "Ingen forskjell",
      },
    ],
    rikigSvar: 3,
  },
  {
    spørsmål: "Hva er normal kroppstemperatur hos mennesker?",
    valg: [
      {
        id: 1,
        label: "35°C",
      },
      {
        id: 2,
        label: "37°C",
      },
      {
        id: 3,
        label: "39°C",
      },
      {
        id: 4,
        label: "40°C",
      },
    ],
    rikigSvar: 2,
  },
  {
    spørsmål: "Hva betyr kondisjon?",
    valg: [
      {
        id: 1,
        label: "Kroppens evne til å utføre langvarig arbeid",
      },
      {
        id: 2,
        label: "Muskelstyrke",
      },
      {
        id: 3,
        label: "Hurtighet",
      },
      {
        id: 4,
        label: "Fleksibilitet",
      },
    ],
    rikigSvar: 1,
  },
  {
    spørsmål: "Hva betyr opphavsrett?",
    valg: [
      {
        id: 1,
        label: "Hva betyr opphavsrett?",
      },
      {
        id: 2,
        label: "Hva betyr opphavsrett?",
      },
      {
        id: 3,
        label: "HurRett til gratis programvaretighet",
      },
      {
        id: 4,
        label: "Rett til reklame",
      },
    ],
    rikigSvar: 2,
  },
  {
    spørsmål: "Hva er en primærkilde i historie?",
    valg: [
      {
        id: 1,
        label: "En bok skrevet senere",
      },
      {
        id: 2,
        label: "En original kilde fra tiden hendelsen skjedde",
      },
      {
        id: 3,
        label: "En film",
      },
      {
        id: 4,
        label: "En artikkel",
      },
    ],
    rikigSvar: 2,
  },
  {
    spørsmål: "Hva er CRM i salg?",
    valg: [
      {
        id: 1,
        label: "Customer Relationship Management",
      },
      {
        id: 2,
        label: "Computer Retail Machine",
      },
      {
        id: 3,
        label: "Customer Retail Method",
      },
      {
        id: 4,
        label: "Commerce Retail Model",
      },
    ],
    rikigSvar: 1,
  },
  {
    spørsmål: "Hva er hydraulikk?",
    valg: [
      {
        id: 1,
        label: "Kraftoverføring med væske",
      },
      {
        id: 2,
        label: "Kraftoverføring med luft",
      },
      {
        id: 3,
        label: "Elektrisk kraft",
      },
      {
        id: 4,
        label: "Varme",
      },
    ],
    rikigSvar: 1,
  },
  {
    spørsmål: "Hva er en algoritme?",
    valg: [
      {
        id: 1,
        label: "En type datamaskin",
      },
      {
        id: 2,
        label: "En steg-for-steg løsning på et problem",
      },
      {
        id: 3,
        label: "En nettside",
      },
      {
        id: 4,
        label: "En database",
      },
    ],
    rikigSvar: 2,
  },
  {
    spørsmål: "Hva betyr begrepet “dugnad” i norsk kultur?",
    valg: [
      {
        id: 1,
        label: "Frivillig arbeid for fellesskapet",
      },
      {
        id: 2,
        label: "En type mat",
      },
      {
        id: 3,
        label: "En skoleeksamen",
      },
      {
        id: 4,
        label: "En sport",
      },
    ],
    rikigSvar: 1,
  },
  {
    spørsmål: "Hva er et viktig kjennetegn på et godt klassemiljø?",
    valg: [
      {
        id: 1,
        label: "Konkurranse mellom elever",
      },
      {
        id: 2,
        label: "Stillhet i timene",
      },
      {
        id: 3,
        label: "Trygghet og respekt",
      },
      {
        id: 4,
        label: "Strenge regler",
      },
    ],
    rikigSvar: 3,
  },
  {
    spørsmål: "Hva er riktig øvelse?",
    video: [
      {
        id: 1,
        url: "../video/scene_1.mp4",
      },
      {
        id: 2,
        url: "../video/scene_2.mp4",
      },
      {
        id: 3,
        url: "../video/scene_3.mp4",
      },
    ],
    rikigSvar: 2,
  },
];

let valgtSvar = false;
let tilbakemeldign = document.getElementById("tilbakemelding");
let nummer = 0;
let totalscore = 0;

function loadQuiz() {
  console.log("Loader Quiz");

  let firstElement = quiz[nummer];

  console.log(firstElement);

  let sprøsmålOmrådet = document.getElementById("sprøsmål");
  let quizButtonOmradet = document.getElementById("quiz_buttonOmradet");

  console.log(sprøsmålOmrådet);

  // console.log(firstElement.spørsmål);

  sprøsmålOmrådet.textContent += `${firstElement.spørsmål}`;

  let knapper = firstElement.valg;

  console.log(knapper);

  knapper.forEach((knapp) => {
    quizButtonOmradet.innerHTML += `<button id="${knapp.id}" onclick="checkAnswer(${knapp.id},${firstElement.rikigSvar})" >${knapp.label}</button>`;
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

  let bruker = JSON.parse(localStorage.getItem("bruker"));
  console.log(bruker);
  if (bruker) {
    bruker.poeng = totalscore;
    console.log(bruker);
    localStorage.setItem("bruker", JSON.stringify(bruker));
  }

  if (valgtSvar) {
    let nesteKnapp = document.getElementById("neste");

    nesteKnapp.innerHTML = `<button class="nesteKnapp" onclick="nesteSporsmål()" >Neste</button>`;
  }
}

function nesteSporsmål() {
  nummer++;

  let nextElement = quiz[nummer];
  let sprøsmålOmrådet = document.getElementById("sprøsmål");
  let quizButtonOmradet = document.getElementById("quiz_buttonOmradet");
  let nesteKnapp = document.getElementById("neste");

  let quizLengde = quiz.length;

  if (nummer < quizLengde) {
    valgtSvar = false;

    tilbakemeldign.textContent = "";
    sprøsmålOmrådet.textContent = ``;
    quizButtonOmradet.innerHTML = "";
    nesteKnapp.innerHTML = "";

    sprøsmålOmrådet.textContent += `${nextElement.spørsmål}`;

    let knapper = nextElement.valg;
    let video = nextElement.video;

    if (video) {
      video.forEach((vid) => {
        quizButtonOmradet.innerHTML += `<button id="${vid.id}" onclick="checkAnswer(${vid.id},${nextElement.rikigSvar})" ><video width="320" height="240" controls>
  <source src="${vid.url}" type="video/mp4">
Your browser does not support the video tag.
</video></button>`;
      });
    } else {
      console.log(knapper);

      knapper.forEach((knapp) => {
        quizButtonOmradet.innerHTML += `<button id="${knapp.id}" onclick="checkAnswer(${knapp.id},${nextElement.rikigSvar})" >${knapp.label}</button>`;
      });
    }
  } else {
    console.log("Du har kommet til siste side.");

    let quizOmrådet = document.getElementById("quiz-omradet");
    quizOmrådet.style.display = "none";

    let sammendragOmrådet = document.getElementById("sammendrag");

    let personligSammendrag = document.getElementById("personlig_sammendrag");

    sammendragOmrådet.style.display = "flex";
    personligSammendrag.innerHTML += `<p>Din poengsumm er ${totalscore}, av totalt ${quizLengde} mulige poeng.</p>`;

    let highscoreList = JSON.parse(localStorage.getItem("highscore")) || [];

    let currentUser = JSON.parse(localStorage.getItem("bruker"));

    console.log(currentUser);

    if (currentUser) {
      highscoreList.push(currentUser);
      localStorage.setItem("highscore", JSON.stringify(highscoreList));
    }

    let higscoreOmradet = document.getElementById("highscore");

    console.log(highscoreList);

    highscoreList.slice(0, 5).forEach((person) => {
      console.log(person.navn);
      higscoreOmradet.innerHTML += `<p>${person.navn} har ${person.poeng} poeng</p>`;
    });

    // highscoreList = [...highscoreList,...currentUser]
  }
}

// loadQuiz()

function registrer() {
  console.log("PRØVER Å REGGISTRERE");
  let registrerOmrådet = document.getElementById("quiz-registrer_wrapper1");

  let navn = document.getElementById("input_navn").value;
  console.log(navn);

  if (navn !== "") {
    let bruker = { navn };
    console.log(bruker);

    localStorage.setItem("bruker", JSON.stringify(bruker));

    registrerOmrådet.style.display = "none";

    let quizOmradet = document.getElementsByClassName(
      "quiz-omradet_wrapper",
    )[0];
    console.log(quizOmradet);

    quizOmradet.style.display = "flex";

    loadQuiz();
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
