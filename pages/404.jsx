import Container from 'components/Container';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container title="404 – Luka Petrovic">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          404 – Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          It sounds like you have found something that no longer exists or you
          have typed something wrong. Can you double check the URL? 😬
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white">
            Back to Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
