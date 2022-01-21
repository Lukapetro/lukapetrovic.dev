import { useEffect, useState } from "react";

import Footer from "./Footer";
import Header from "./header";

const PageTitle = ({ pageTitle }) => {
  return (
    <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
      {pageTitle}
    </h1>
  );
};

export default function Container(params) {
  const [mounted, setMounted] = useState(false);

  const { children, pageTitle, ...customMeta } = params;

  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
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
