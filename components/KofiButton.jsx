import Image from 'next/image';
import KofiLogo from '../public/static/images/ko-fi/Kofi_icon.png';

export default function KofiButton() {
  return (
    <a
      href="https://ko-fi.com/lukapetro"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-4 rounded-full inline-flex items-center"
    >
      <Image width={55} height={55} src={KofiLogo} alt="" />
      <span>Buy me a coffee</span>
    </a>
  );
}
