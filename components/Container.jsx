import { useEffect, useState } from 'react';

import Footer from './Footer';
import Head from 'next/head';
import Header from './header';
import { useRouter } from 'next/router';

const PageTitle = ({ pageTitle }) => {
  return (
    <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
      {pageTitle}
    </h1>
  );
};

export default function Container(params) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const { children, pageTitle, ...customMeta } = params;

  useEffect(() => setMounted(true), []);

  const meta = {
    title: 'Luka Petrovic – Developer.',
    description: `Fullstack developer, JavaScript enthusiast.`,
    image: 'https://leerob.io/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://lukapetro.io${router.asPath}`}
        />
        <link rel="canonical" href={`https://lukapetro.io${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Luka Petrovic" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Header mounted={mounted} />
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
      >
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
          <PageTitle pageTitle={pageTitle} />
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}
