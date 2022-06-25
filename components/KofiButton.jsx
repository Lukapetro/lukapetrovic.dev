import Image from 'next/image';
import KofiLogo from '../public/static/images/ko-fi/Kofi_icon.png';

export default function KofiButton() {
  return (
    <a
      href="https://ko-fi.com/lukapetro"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-2 rounded-full inline-flex items-center h-10"
    >
      <Image width={50} height={50} src={KofiLogo} alt="" />
      <span>Buy me a coffee</span>
    </a>
  );
}
