import { useState } from 'react';

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
    <Year>2016</Year>
    <ul>
      <Step title="Finishing university 🎓">
        It's been an adventure of ups and downs where I've learned a lot of
        things and met fantastic people.
      </Step>
      <Step title="Full-Time in Capgemini">
        I was offered and accepted a full-time opportunity with Capgemini. My
        first and real work experience.
      </Step>
      <Step title="Transfer to Milan  🏙">
        I moved to Milan in a classic two-room apartment. I immediately liked
        the mood of this city.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Erasmus in Barcelona 🔥">
        One of the most incredible experiences I have had. 8 months
        unforgettable in my favorite city.
      </Step>
    </ul>
    <Divider />
    <Year>2014</Year>
    <ul>
      <Step title="Various internships">
        I have worked with 2 local companies to gain some experience in the
        field. Thanks to the folks at Apio for the opportunity!
      </Step>
    </ul>
    <Divider />
    <Year>2011</Year>
    <ul>
      <Step title="High school graduation 🎒">
        If I could stop time, I would stay forever in my high school days. high
        school. Good times.
      </Step>
      <Step title="University start 🏫">
        Given my high school career, math and computer science was the only way
        to go, so go computer engineering.
      </Step>
      <Step title="Learned to develop ⌨️">
        Object Oriented Programming Course. Exam based on the development of an
        application in a team. Here is my first real experience as a developer.
      </Step>
    </ul>
    <Divider />
    <Year>1998</Year>
    <ul>
      <Step title="First Computer 🖥️">
        I remember a lot of nights spent playing Final Fantasy VII and Age of
        Empires
      </Step>
    </ul>
    <Divider />
    <Year>1993</Year>
    <ul>
      <Step title="Born 👶🏼 🍼">Well here I am. Hello world!</Step>
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
      <Year>2022</Year>
      <ul>
        <Step title="Joined Playtomic 🎾">
          It was a crazy start to 2022. I went through a lot of selection
          processes, and in the end I decided to play the game with the role of
          senior frontend engineer with a winning team, vamos Playtomic!
        </Step>
      </ul>
      <ul>
        <Step title="Joined BeConcept Studio 🖥️">
          I accepted a part-time contract with a web agency in Milan, BeConcept
          Studio. A lot of fun is on the way!
        </Step>
      </ul>
      <ul>
        <Step title="Adios Amaris, Welcome FACEIT 🎮">
          Certainly the most significant change this year. After almost 4 years,
          I am leaving amaris, where I was born, to accept a new challenge with
          FACEIT. Keep up the good work!!
        </Step>
      </ul>
      <Divider />
      <Year>2021</Year>
      <ul>
        <Step title="Here comes Blue 🐺">
          A new member joins the pack, a Czechoslovakian wolf pup named Blue.
        </Step>
        <Step title="Joined Twin Yield 📈">
          I joined the team of a startup that creates portfolios of people-based
          investments with different algorithms. Guess what my role is!
        </Step>
        <Step title="Bought my first car 🏎️">
          Who wants to get around on foot? I don't. In addition, the heated
          seats in winter are the top.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Joined Gymless 💪">
          The pandemic has also created new opportunities. Gymless becomes a new
          way to exercise outdoors.
        </Step>
        <Step title="Return to San Benedetto 🌊">
          Remote working becomes the foundation. The time has come for me to
          return to the sea and breathe fresh air. Thanks for everything Milan.
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Joined Amaris">
          It was time for a career change and Amaris called me. I am excited to
          take on new challenges!
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
          Show more
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
