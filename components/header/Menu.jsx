import MobileMenu from './MenuMobile';
import NextLink from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

export default function Menu() {
  const { t } = useTranslation('common');

  return (
    <div className="ml-[-0.60rem]">
      <MobileMenu />
      <NavItem href="/" text="Home" />
      <NavItem href="/projects" text={t('projects')} />
      <NavItem href="/blog" text="Blog" />
      <NavItem href="/about" text="About" />
    </div>
  );
}
