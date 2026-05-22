import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  return { title: article?.title ?? "Artigo", description: article?.abstract ?? "" };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  return (
    <div className="content-container py-section">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-[var(--color-text-dim)]"><li><Link href="/" className="hover:text-[var(--color-text)]">Início</Link></li><li aria-hidden="true">›</li><li><Link href="/artigos" className="hover:text-[var(--color-text)]">Artigos</Link></li><li aria-hidden="true">›</li><li className="text-[var(--color-text-muted)] truncate max-w-[200px]">{article.title}</li></ol></nav>

        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-3">
            {article.tags.map((t) => (<span key={t} className="rounded-full bg-violet-500/10 border border-violet-500/20 px-2.5 py-0.5 text-[10px] font-medium text-violet-300">#{t}</span>))}
          </div>
          <h1 className="font-display text-3xl font-bold text-[var(--color-text)] leading-tight">{article.title}</h1>
          <p className="mt-2 text-sm text-[var(--color-text-dim)]">Por {article.authors.join(", ")} · {article.publishedDate}</p>
          <div className="mt-4 rounded-xl border border-violet-500/10 bg-violet-500/[0.03] p-4">
            <p className="text-xs font-semibold text-violet-300 mb-1">Resumo</p>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{article.abstract}</p>
          </div>
        </header>

        <div className="space-y-4 mb-12">
          {article.content.map((p, i) => (<p key={i} className="text-base leading-[1.9] text-[var(--color-text-muted)]">{p}</p>))}
        </div>

        <section className="border-t border-[var(--color-border-subtle)] pt-8">
          <h2 className="text-sm font-bold text-[var(--color-text)] mb-4">Referências</h2>
          <ul className="space-y-2" role="list">
            {article.references.map((r, i) => (<li key={i} className="text-xs leading-relaxed text-[var(--color-text-dim)] pl-4 border-l-2 border-[var(--color-border-subtle)]">{r}</li>))}
          </ul>
        </section>

        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--color-border-subtle)] pt-8 sm:flex-row sm:justify-between">
          <Link href="/artigos" className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text-muted)]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12,19 5,12 12,5"/></svg>Todos os artigos</Link>
        </div>
      </div>
    </div>
  );
}
