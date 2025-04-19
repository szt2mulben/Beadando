import { useState, useEffect } from 'react';
import './index.css';

const fullQuestionSet = [
  {
    question: "Melyik évben lett Magyarország EU-tagállam?",
    answers: ["1999", "2004", "2010", "1990"],
    correct: "2004"
  },
  {
    question: "Ki írta a 'Bűn és bűnhődés' című regényt?",
    answers: ["Tolsztoj", "Dosztojevszkij", "Gogol", "Puskin"],
    correct: "Dosztojevszkij"
  },
  {
    question: "Milyen színű a nátriumlángfestés?",
    answers: ["Zöld", "Sárga", "Kék", "Piros"],
    correct: "Sárga"
  },
  {
    question: "Mi a DNS feladata?",
    answers: ["Energiatermelés", "Hormontermelés", "Információtárolás", "Mozgáskoordináció"],
    correct: "Információtárolás"
  },
  {
    question: "Melyik bolygón van a legnagyobb ismert vulkán?",
    answers: ["Föld", "Mars", "Jupiter", "Vénusz"],
    correct: "Mars"
  },
  {
    question: "Mikor volt az 1848-as forradalom Magyarországon?",
    answers: ["1848", "1918", "1956", "1990"],
    correct: "1848"
  },
  {
    question: "Ki volt Magyarország első köztársasági elnöke 1989 után?",
    answers: ["Göncz Árpád", "Orbán Viktor", "Németh Miklós", "Kádár János"],
    correct: "Göncz Árpád"
  },
  {
    question: "Ki írta a 'Tóték' című drámát?",
    answers: ["Örkény István", "Móricz Zsigmond", "Karinthy Frigyes", "Kosztolányi Dezső"],
    correct: "Örkény István"
  },
  {
    question: "Melyik mű nem József Attila verse?",
    answers: ["Tiszta szívvel", "Mama", "Altató", "Szeptember végén"],
    correct: "Szeptember végén"
  },
  {
    question: "Mi a víz kémiai képlete?",
    answers: ["CO2", "H2O", "NaCl", "CH4"],
    correct: "H2O"
  },
  {
    question: "Melyik elem szimbóluma az Fe?",
    answers: ["Foszfor", "Fluor", "Vas", "Fém"],
    correct: "Vas"
  },
  {
    question: "Melyik a világ legnagyobb sivataga?",
    answers: ["Szahara", "Góbi", "Antarktisz", "Kalahári"],
    correct: "Antarktisz"
  },
  {
    question: "Melyik kontinensen található a Kilimandzsáró?",
    answers: ["Afrika", "Ázsia", "Dél-Amerika", "Ausztrália"],
    correct: "Afrika"
  },
  {
    question: "Mi az első tíz prímszám összege?",
    answers: ["60", "100", "129", "77"],
    correct: "129"
  },
  {
    question: "Mennyi 5 faktoriális (5!)?",
    answers: ["25", "100", "120", "60"],
    correct: "120"
  },
  {
    question: "Melyik szerv termeli az inzulint?",
    answers: ["Máj", "Hasnyálmirigy", "Gyomor", "Lép"],
    correct: "Hasnyálmirigy"
  },
  {
    question: "Mi a sejthártya feladata?",
    answers: ["Energiatermelés", "Anyagszállítás szabályozása", "DNS-tárolás", "Hormontermelés"],
    correct: "Anyagszállítás szabályozása"
  },
  {
    question: "Mi a HTML fő célja?",
    answers: ["Stílus meghatározása", "Weboldalak szerkezeti leírása", "Adatbázis-kezelés", "Képmanipuláció"],
    correct: "Weboldalak szerkezeti leírása"
  },
  {
    question: "Mi a JavaScript rövidítése?",
    answers: ["JVS", "JS", "JAVA", "JSP"],
    correct: "JS"
  },
  {
    question: "Mi Magyarország hivatalos pénzneme?",
    answers: ["Euró", "Dollár", "Forint", "Korona"],
    correct: "Forint"
  },
  {
    question: "Hány fokos szög a derékszög?",
    answers: ["45", "90", "60", "180"],
    correct: "90"
  },
  {
    question: "Mi a Naprendszer központi égiteste?",
    answers: ["A Mars", "A Hold", "A Föld", "A Nap"],
    correct: "A Nap"
  },
  {
    question: "Mi az emberi test legnagyobb szerve?",
    answers: ["Tüdő", "Máj", "Bőr", "Vese"],
    correct: "Bőr"
  },
  {
    question: "Melyik magyar ember találmánya a golyóstoll?",
    answers: ["Rubik Ernő", "Bíró László", "Jedlik Ányos", "Irinyi János"],
    correct: "Bíró László"
  },
  {
    question: "Mi a legismertebb DNS-hez kapcsolódó kémiai szerkezet?",
    answers: ["Kettős hélix", "Spirálhártya", "Riboszómák", "Kromatidák"],
    correct: "Kettős hélix"
  },
  {
    question: "Melyik a leggyorsabb szárazföldi állat?",
    answers: ["Oroszlán", "Antilop", "Gepárd", "Strucc"],
    correct: "Gepárd"
  },
  {
    question: "Mi a pi (π) értéke két tizedesjegyre kerekítve?",
    answers: ["3.12", "3.14", "3.16", "3.18"],
    correct: "3.14"
  },
  {
    question: "Ki volt a Harry Potter könyvek szerzője?",
    answers: ["J.R.R. Tolkien", "Stephen King", "J.K. Rowling", "George R.R. Martin"],
    correct: "J.K. Rowling"
  },
  {
    question: "Melyik szám NEM prímszám?",
    answers: ["2", "3", "5", "9"],
    correct: "9"
  },
  {
    question: "Melyik szerv felelős a vér szűréséért az emberi testben?",
    answers: ["Tüdő", "Máj", "Lép", "Vese"],
    correct: "Vese"
  },
  {
    question: "Mi a hivatalos nyelve Brazíliának?",
    answers: ["Spanyol", "Angol", "Portugál", "Francia"],
    correct: "Portugál"
  },
  {
    question: "Melyik az emberi test legkisebb csontja?",
    answers: ["Ujjperc", "Lábközép csont", "Kengyelcsont", "Kulcscsont"],
    correct: "Kengyelcsont"
  },
  {
    question: "Melyik égitest tart a leghosszabb ideig egy fordulatot?",
    answers: ["Nap", "Hold", "Föld", "Vénusz"],
    correct: "Vénusz"
  },
  {
    question: "Hány perc egy óra?",
    answers: ["100", "30", "60", "120"],
    correct: "60"
  },
  {
    question: "Mi volt az első élőlény az űrben?",
    answers: ["Ember", "Majom", "Kutya", "Egér"],
    correct: "Kutya"
  },
  {
    question: "Mi a fővárosa Kanadának?",
    answers: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    correct: "Ottawa"
  },
  {
    question: "Mi az emberi vér legfontosabb szállító molekulája?",
    answers: ["Inzulin", "Hemoglobin", "DNS", "Fehérje"],
    correct: "Hemoglobin"
  },
  {
    question: "Melyik országban található a Colosseum?",
    answers: ["Franciaország", "Spanyolország", "Görögország", "Olaszország"],
    correct: "Olaszország"
  },
  {
    question: "Melyik a legnépesebb ország a világon?",
    answers: ["India", "Kína", "USA", "Indonézia"],
    correct: "India"
  }
];


function getRandomQuestions(amount) {
  const shuffled = [...fullQuestionSet].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, amount);
}

function App() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setQuestions(getRandomQuestions(5));
  }, []);

  const handleAnswer = (answer) => {
    setSelected(answer);
    if (answer === questions[current].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const restart = () => {
    setQuestions(getRandomQuestions(5));
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
  };

  if (questions.length === 0) return <div className="container"><p>Betöltés...</p></div>;

  return (
    <div className="container">
      {!showResult ? (
        <>
          <h1>Kvíz játék</h1>
          <p>{questions[current].question}</p>
          <div className="answers">
            {questions[current].answers.map((ans, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(ans)}
                className={
                  selected
                    ? ans === questions[current].correct
                      ? 'correct'
                      : ans === selected
                      ? 'incorrect'
                      : ''
                    : ''
                }
                disabled={!!selected}
              >
                {ans}
              </button>
            ))}
          </div>
          {selected && (
            <button className="next" onClick={handleNext}>
              Következő
            </button>
          )}
        </>
      ) : (
        <>
          <h2>🎉 Végeredmény</h2>
          <p>Helyes válaszok: {score} / {questions.length}</p>
          <button className="next" onClick={restart}>Újrakezdés új kérdésekkel</button>
        </>
      )}
    </div>
  );
}

export default App;