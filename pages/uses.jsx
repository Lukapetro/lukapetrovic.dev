import Container from 'components/Container';
import { allUses } from '.contentlayer/generated';
import components from 'components/MDXComponents';
import { pick } from 'contentlayer/client';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function Uses({ uses }) {
  const Component = useMDXComponent(uses[0].body.code);

  return (
    <Container
      pageTitle="Uses"
      title="Uses – Luka Petrovic"
      description="Hardware and software that I use daily"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          <Component
            components={{
              ...components
            }}
          />
        </div>
      </article>
    </Container>
  );
}

export async function getStaticProps() {
  const uses = allUses.map((use) => pick(use, ['title', 'body']));

  return { props: { uses } };
}
