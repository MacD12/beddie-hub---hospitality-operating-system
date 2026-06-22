import React from 'react';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { FinalCTA } from '../components/FinalCTA';
import { Link } from '../components/router';
import { articles, type Block } from '../components/articles';

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
  const article = articles.find((a) => a.slug === params?.slug);

  if (!article) {
    return (
      <section className="pt-44 pb-32 px-4 lg:px-6 max-w-[1600px] mx-auto text-center">
        <p className="text-sm font-semibold text-emerald-700 uppercase tracking-[0.2em] mb-4">404</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">Article not found.</h1>
        <Link to="/resources" className="inline-flex items-center bg-[#2d2d2d] text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-colors">
          <ArrowLeft className="mr-2 w-5 h-5" /> Back to resources
        </Link>
      </section>
    );
  }

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <article className="pt-32 md:pt-40 pb-10 px-4 lg:px-6 max-w-3xl mx-auto">
        <Link to="/resources" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-emerald-700 transition-colors mb-8 group">
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> All resources
        </Link>

        <span className="inline-flex items-center text-xs font-bold uppercase tracking-wide bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full mb-6">{article.tag}</span>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">{article.title}</h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-8">{article.excerpt}</p>

        <div className="flex items-center gap-4 pb-8 border-b border-gray-100">
          <span className="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold">
            {article.author.split(' ').map((n) => n[0]).join('')}
          </span>
          <div className="text-sm">
            <p className="font-semibold text-gray-900">{article.author}</p>
            <p className="text-gray-500 flex items-center gap-2">
              {article.date} <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
            </p>
          </div>
        </div>

        <div className="mt-2">{article.content.map(renderBlock)}</div>
      </article>

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
                    <span>{post.readTime}</span>
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
