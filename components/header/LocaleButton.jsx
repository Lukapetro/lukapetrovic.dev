import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LocaleButton(params) {
  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <Link href="" locale={router.locale === 'en' ? 'it' : 'en'}>
      {router.locale === 'en' ? (
        <Image alt="UK" height={35} width={35} src="/static/images/uk.png" />
      ) : (
        <Image alt="IT" height={35} width={35} src="/static/images/italy.png" />
      )}
    </Link>
  );
}
