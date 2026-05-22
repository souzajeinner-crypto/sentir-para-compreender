import Link from "next/link";
import { selfRegTools } from "@/data/children-area";

export default function AutorregulacaoPage() {
  return (
    <div className="content-container py-section">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-[var(--color-text-dim)]"><li><Link href="/" className="hover:text-[var(--color-text)]">Início</Link></li><li aria-hidden="true">›</li><li><Link href="/infantil" className="hover:text-[var(--color-text)]">Área Infantil</Link></li><li aria-hidden="true">›</li><li className="text-[var(--color-text-muted)]">Calma</li></ol></nav>

        <header className="text-center mb-10">
          <div className="text-4xl mb-3" aria-hidden="true">🧘</div>
          <h1 className="font-display text-3xl font-bold text-white">Ferramentas de Calma</h1>
          <p className="mt-2 text-sm text-[var(--color-text-muted)] max-w-md mx-auto">Quando tudo parece demais, essas atividades podem ajudar a encontrar um pouquinho de paz.</p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2">
          {selfRegTools.map((t) => (
            <div key={t.id} className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-panel)] p-6 transition-all hover:border-violet-500/15">
              <span className="text-3xl mb-3 block" aria-hidden="true">{t.emoji}</span>
              <h2 className="font-display text-lg font-bold" style={{ color: t.color }}>{t.title}</h2>
              <p className="mt-2 text-sm leading-[1.7] text-[var(--color-text-muted)]">{t.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-violet-500/10 bg-violet-500/[0.03] p-6 text-center max-w-md mx-auto">
          <p className="text-sm italic text-violet-300/70">Lembre-se: você não precisa resolver tudo agora. Respire. Você está fazendo o seu melhor. 💜</p>
        </div>
      </div>
    </div>
  );
}
