import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, Clock, Share2 } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { FinalCTA } from '../components/FinalCTA';
import { Link } from '../components/router';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArticleProgress } from '../components/ArticleProgress';
import { useToast } from '../components/Toast';
import { articles, readLabel, type Block } from '../components/articles';

const renderBlock = (block: Block, i: number) => {
  switch (block.type) {
    case 'h2':
      return <h2 key={i} className="text-2xl md:text-3xl font-semibold tracking-tight mt-12 mb-4">{block.text}</h2>;
    case 'quote':
      return (
        <blockquote key={i} className="my-10 border-l-4 border-emerald-500 pl-6 text-xl md:text-2xl font-medium text-gray-800 leading-snug">
          "{block.text}"
        </blockquote>
      );
    case 'ul':
      return (
        <ul key={i} className="my-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg text-gray-700">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return <p key={i} className="my-5 text-lg text-gray-700 leading-relaxed">{block.text}</p>;
  }
};

export const Article: React.FC<{ params?: Record<string, string> }> = ({ params }) => {
  const toast = useToast();
  const articleRef = useRef<HTMLElement>(null);
  const article = articles.find((a) => a.slug === params?.slug);

  if (!article) {
    return (
      <section className="pt-44 pb-32 px-4 lg:px-6 max-w-[1600px] mx-auto text-center">
        <p className="text-sm font-semibold text-emerald-700 uppercase tracking-[0.2em] mb-4">404</p>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">Article not found.</h1>
        <Link to="/resources" className="inline-flex items-center bg-[#2d2d2d] text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-colors">
          <ArrowLeft className="mr-2 w-5 h-5" /> Back to resources
        </Link>
      </section>
    );
  }

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);
  const index = articles.findIndex((a) => a.slug === article.slug);
  const prev = articles[index - 1];
  const next = articles[index + 1];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast('Link copied to clipboard!');
    } catch {
      toast('Press Ctrl+C to copy the link');
    }
  };

  return (
    <>
      <ArticleProgress targetRef={articleRef} />
      <article ref={articleRef} className="pt-32 md:pt-40 pb-10 px-4 lg:px-6 max-w-3xl mx-auto">
        <Breadcrumbs
          items={[{ label: 'Home', to: '/' }, { label: 'Resources', to: '/resources' }, { label: article.tag, to: `/resources?type=${encodeURIComponent(article.tag)}` }, { label: article.title }]}
          className="mb-8"
        />
        <Link to="/resources" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-emerald-700 transition-colors mb-8 group">
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> All resources
        </Link>

        <span className="inline-flex items-center text-xs font-bold uppercase tracking-wide bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full mb-6">{article.tag}</span>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">{article.title}</h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-8">{article.excerpt}</p>

        <div className="flex items-center gap-4 pb-8 border-b border-gray-100">
          <span className="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold">
            {article.author.split(' ').map((n) => n[0]).join('')}
          </span>
          <div className="text-sm">
            <p className="font-semibold text-gray-900">{article.author}</p>
            <p className="text-gray-500 flex items-center gap-2">
              {article.date} <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {readLabel(article)}</span>
            </p>
          </div>
          <button
            onClick={copyLink}
            className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-emerald-700 border border-gray-200 hover:border-emerald-200 hover:bg-emerald-50/50 rounded-full px-4 py-2 transition-colors"
          >
            <Share2 className="w-4 h-4" /> <span className="hidden sm:inline">Copy link</span>
          </button>
        </div>

        <div className="mt-2">{article.content.map(renderBlock)}</div>
      </article>

      {(prev || next) && (
        <nav aria-label="Article navigation" className="max-w-3xl mx-auto px-4 lg:px-6 mt-12 pt-8 border-t border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prev ? (
              <Link to={`/resources/${prev.slug}`} className="group bg-[#f5f5f5] rounded-2xl p-6 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300">
                <span className="inline-flex items-center text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  <ArrowLeft className="w-3.5 h-3.5 mr-1.5 group-hover:-translate-x-1 transition-transform" /> Previous
                </span>
                <p className="font-semibold text-gray-900 leading-snug group-hover:text-emerald-800 transition-colors">{prev.title}</p>
              </Link>
            ) : (
              <span className="hidden sm:block" />
            )}
            {next && (
              <Link to={`/resources/${next.slug}`} className="group bg-[#f5f5f5] rounded-2xl p-6 sm:text-right hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300">
                <span className="inline-flex items-center text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 sm:justify-end sm:w-full">
                  Next <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <p className="font-semibold text-gray-900 leading-snug group-hover:text-emerald-800 transition-colors">{next.title}</p>
              </Link>
            )}
          </div>
        </nav>
      )}

      {related.length > 0 && (
        <Reveal>
          <section className="py-16 px-4 lg:px-6 max-w-[1600px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">Keep reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((post) => (
                <Link
                  key={post.slug}
                  to={`/resources/${post.slug}`}
                  className="group bg-[#f5f5f5] rounded-3xl p-8 flex flex-col min-h-[220px] hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.25)] hover:-translate-y-1.5 transition-all duration-500"
                >
                  <span className="inline-flex w-fit items-center text-xs font-bold uppercase tracking-wide bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full mb-6">{post.tag}</span>
                  <h3 className="text-2xl font-semibold leading-snug mb-auto group-hover:text-emerald-800 transition-colors">{post.title}</h3>
                  <div className="flex items-center justify-between mt-8 text-sm text-gray-500">
                    <span>{readLabel(post)}</span>
                    <ArrowRight className="w-5 h-5 text-gray-900 group-hover:translate-x-1 group-hover:text-emerald-700 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </Reveal>
      )}

      <Reveal><FinalCTA /></Reveal>
    </>
  );
};
