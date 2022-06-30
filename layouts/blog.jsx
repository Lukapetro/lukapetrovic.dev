import { format, parseISO } from 'date-fns';

import Container from 'components/Container';
import Image from 'next/image';
import KofiButton from '../components/KofiButton';
import ClapsButton from '../components/ClapsButton';
import ViewCounter from 'components/ViewCounter';
import TagsList from 'components/tags/TagsList';

export default function BlogLayout({ children, post }) {
  return (
    <Container
      title={`${post.title} – Luka Petrovic`}
      description={post.summary}
      image={`https://lukapetrovic.dev${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-10">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <h2 className="text-gray-500">{post.summary}</h2>

        <div className="my-2">
          <TagsList tags={post.tags} />
        </div>
        <Image alt="image" height={375} width={685} src={post.image} />
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="LP"
              height={24}
              width={24}
              src={'/avatar.png'}
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {'Luka Petrovic / '}
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {post.readingTime.text}
            {` • `}
            <ViewCounter slug={post.slug} />
          </p>
        </div>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
      </article>
      <div className="flex w-full justify-between items-end">
        <ClapsButton slug={post.slug} />
        <KofiButton />
      </div>
    </Container>
  );
}
