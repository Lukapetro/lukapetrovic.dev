import getConfig from 'next/config';
import Link from 'next/link';
import ExternalLink from './ExternalLink';

export default function Footer() {
  const { publicRuntimeConfig } = getConfig();

  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-4">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-8 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              About
            </a>
          </Link>
          <Link href="/uses">
            <a className="text-gray-500 hover:text-gray-600 transition">Uses</a>
          </Link>

          {/* <Link href="/travel-timeline">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Travels
            </a>
          </Link> */}
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink
            href="https://www.linkedin.com/in/lucapetro/"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Linkedin
          </ExternalLink>
          <ExternalLink
            className="text-gray-500 hover:text-gray-600 transition"
            href="https://github.com/Lukapetro"
          >
            GitHub
          </ExternalLink>
          <ExternalLink
            className="text-gray-500 hover:text-gray-600 transition"
            href="https://read.cv/lukapetro"
          >
            Resume
          </ExternalLink>
          {/* <Link href="/privacy">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Privacy
            </a>
          </Link> */}
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/projects">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Projects
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 hover:text-gray-600 transition">Blog</a>
          </Link>
          <Link href="/blog/tags">
            <a className="text-gray-500 hover:text-gray-600 transition">Tags</a>
          </Link>
          <Link href="/changelog">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Changelog
            </a>
          </Link>
        </div>
      </div>
      <div className="text-gray-300 dark:text-gray-700 text-xs pb-8 text-center flex justify-center">
        Made with ❤️ - Version: {publicRuntimeConfig?.version}
      </div>
    </footer>
  );
}
