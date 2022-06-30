import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales.filter((locale) => locale !== activeLocale);

  return (
    <>
      {otherLocales.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <Link
            key={locale}
            href={{ pathname, query }}
            as={asPath}
            locale={locale}
          >
            <Image src={`/${locale}.png`} alt="lang" height={34} width={34} />
          </Link>
        );
      })}
    </>
  );
}
