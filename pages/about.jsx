import Container from "components/Container";
import Link from "next/link";
import Timeline from "components/Timeline";

export default function About() {
  return (
    <Container pageTitle="About Me">
      <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
        <p>
          Ciao, sono Luka. Sono uno sviluppatore fullstack. Attualmente lavoro a
          Amaris come Senior Consultant.
        </p>
        <p>
          Sono cresciuto a San Benedetto del Tronto e ho frequentato ingegneria
          informatica all'università Politecnica delle Marche. Nel tempo libero
          mi piace allenarmi e giocare con il mio lupetto, Blue 🐺
        </p>
      </div>
      <Timeline />
    </Container>
  );
}
