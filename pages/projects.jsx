import Container from "components/Container";
import Link from "next/link";

export default function Projects() {
  return (
    <Container pageTitle="Progetti">
      <div className="mb-8">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This is my personal dashboard, built with Next.js API routes deployed
          as serverless functions. I use this dashboard to track various metrics
          across platforms like Unsplash, YouTube, GitHub, and more. Want to
          build your own? Check out my&nbsp;
          <Link href="/blog/fetching-data-with-swr">
            <a className="text-gray-900 dark:text-gray-100 underline">
              blog series.
            </a>
          </Link>
        </p>
      </div>
    </Container>
  );
}
