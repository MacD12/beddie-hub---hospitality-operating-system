import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articles } from '@/components/articles';
import { Article } from '@/views/Article';

const SITE = 'https://www.beddiehub.com';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: 'Article not found' };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/resources/${article.slug}` },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      url: `/resources/${article.slug}`,
    },
    twitter: { card: 'summary_large_image', title: article.title, description: article.excerpt },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const url = `${SITE}/resources/${article.slug}`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.excerpt,
      author: { '@type': 'Person', name: article.author },
      publisher: { '@type': 'Organization', name: 'Beddie Hub' },
      articleSection: article.tag,
      mainEntityOfPage: url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE}/resources` },
        { '@type': 'ListItem', position: 3, name: article.title, item: url },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Article slug={article.slug} />
    </>
  );
}
