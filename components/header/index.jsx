import LocaleSwitcher from '../LocaleSwitcher';
import Menu from './Menu';
import ThemeButton from './ThemeButton';

export default function Header(params) {
  const { mounted } = params;

  return (
    <div className="flex flex-col justify-center px-8">
      <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
        <Menu />
        <div className="flex gap-4">
          <LocaleSwitcher />
          <ThemeButton mounted={mounted} />
        </div>
      </nav>
    </div>
  );
}
