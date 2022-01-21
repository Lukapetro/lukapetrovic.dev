import Container from "components/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container title="404 – Lee Robinson">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          404 – Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Sembra che che tu abbia trovato qualcosa che non esiste più o abbia
          scritto qualcosa di sbagliato. Puoi controllare due volte l'URL?
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white">
            Ritorna alla Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
