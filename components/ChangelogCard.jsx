import components from 'components/MDXComponents';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function ChangelogCard(changelog) {
  const Component = useMDXComponent(changelog.body.code);

  return (
    <div className="mb-16">
      <h2 className="font-semibold text-2xl mb-4">{changelog.title}</h2>
      <Component components={components} />
    </div>
  );
}
