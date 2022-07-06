import Image from 'next/image';
import Link from 'next/link';
import Aside from './mdx/Aside';
import Code from './mdx/Code';
import HighlightedText from './mdx/HighlightedText';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
  Aside: Aside,
  HighlightedText: HighlightedText,
  Code: Code
};

export default MDXComponents;
