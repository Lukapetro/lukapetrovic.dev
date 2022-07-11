import useTranslation from 'next-translate/useTranslation';
import prisma from '../../utils/prisma';

export default function CommentSection() {
  const { t } = useTranslation('blog');

  console.log('t', t('comments'));

  return (
    <div className="mt-4">
      <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-1 text-black dark:text-white">
        {t('comments')}
      </h3>
    </div>
  );
}

export async function getStaticProps() {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updated_at: 'desc'
    }
  });

  const fallbackData = entries.map((entry) => ({
    id: entry.id.toString(),
    body: entry.body,
    created_by: entry.created_by.toString(),
    updated_at: entry.updated_at.toString()
  }));

  return {
    props: {
      fallbackData
    },
    revalidate: 60
  };
}
