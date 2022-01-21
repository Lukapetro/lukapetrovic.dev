import { useState } from "react";

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = (props) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">
          {props.title}
        </p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{props.children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    {/* <Year>2018</Year>
    <ul>
      <Step title="Started dsmtech.io 🤘🏻">
        Reflecting on my recent job search, I realized there wasn't a
        centralized listing of all the Des Moines tech companies. So...I created
        it.
      </Step>
      <Step title="Joined Hy-Vee 🛒">
        It was time for a change in my career, and Hy-Vee came calling. The best
        part was reducing my commute time by an hour/day.
      </Step>
    </ul> 
    <Divider />*/}
    <Year>2016</Year>
    <ul>
      {/*  <Step title="Graduated College 🎓">
        One of my most cherished accomplishments. I worked my ass off to get
        this degree.
      </Step> */}
      <Step title="Full-Time in Capgemini">
        Mi è stata offerta e ho accettato un'opportunità a tempo pieno con
        Capgemini. La mia prima e vera esperienza lavorativa.
      </Step>
      <Step title="Trasferimento a Milano 🏙">
        Mi sono trasferito a Milano in un classico bilocale. Mi è subito
        piaciuto il mood di questa città.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Erasmus a Barcellona 🔥">
        Una delle esperienze più incredibili che abbia vissuto. 8 mesi
        indimenticabili nella mia città preferita.
      </Step>
    </ul>
    <Divider />
    <Year>2014</Year>
    <ul>
      <Step title="Internship vari">
        Ho collaborato con 2 aziende locali per accumulare qualche esperienza
        sul campo. Un grazie ai ragazzi di Apio per l'opportunità!
      </Step>
    </ul>
    <Divider />
    <Year>2011</Year>
    <ul>
      <Step title="Diploma scuola superiore 🎒">
        Potessi fermare il tempo, resterei per sempre ai tempi della scuola
        superiore. Bei momenti.
      </Step>
      <Step title="Inizio all'Università Politecnica delle Marche 🏫">
        Vista la mia carriera alle superiori, matematica e informatica era
        l'unica strada percorribile, e allora vai di ingegneria informatica.
      </Step>
      <Step title="Imparato a sviluppare ⌨️">
        Corso di programmazione a oggetti. Esame basato sullo sviluppo di
        un'applicazione in team. Ecco la mia prima vera esperienza da
        sviluppatore.
      </Step>
    </ul>
    <Divider />
    <Year>1998</Year>
    <ul>
      <Step title="Primo Computer 🖥️">
        Ricordo moltissime notti passate a giocare a Final Fantasy VII e Age of
        Empires
      </Step>
    </ul>
    <Divider />
    <Year>1993</Year>
    <ul>
      <Step title="Nato 👶🏼 🍼">Beh eccomi qua.</Step>
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Arriva Blue 🐺">
          Un nuovo membro si unisce al branco, un cucciolo di lupo cecoslovacco
          di nome blue.
        </Step>
        <Step title="Joino Twin Yield 📈">
          Mi sono unito al team di una startup che crea portafogli di
          investimento con diversi algoritmi. Indovinate il mio ruolo!
        </Step>
        <Step title="Comprato la prima macchina 🏎️">
          Chi vuole muoversi a piedi? Io no. Inoltre i sedili riscaldati
          d'inverno sono il top.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Joino Gymless 💪">
          La pandemia ha creato anche nuove opportunità. Gymless diventa un
          nuovo modo di allenarsi all'aperto.
        </Step>
        <Step title="Rientro a San Benedetto 🌊">
          Il remote working diventa la base. E' giunto il momento per me di
          tornare al mare a respirare aria fresca. Grazie di tutto Milano.
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Joino Amaris">
          Era il momento di cambiare la mia carriera e Amaris mi ha chiamato.
          Sono entusiasta di affrontare nuove sfide!
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          Mostra di più
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
