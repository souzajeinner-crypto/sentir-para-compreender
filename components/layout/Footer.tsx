import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-glass)]" role="contentinfo">
      <div className="mx-auto w-full max-w-[880px] px-5 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left — logo + copyright */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand-violet)] to-[#4A1FB8] text-[8px] font-bold text-white" aria-hidden="true">C</div>
            <p className="text-xs text-[var(--text-muted)]">© 2026 Sentir para Compreender — Projeto acadêmico</p>
          </div>

          {/* Center — links */}
          <nav aria-label="Links do rodapé" className="flex items-center gap-5">
            <Link href="/acessibilidade" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">Acessibilidade</Link>
            <Link href="/sobre" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">Créditos</Link>
            <Link href="/artigos" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">Referências</Link>
          </nav>

          {/* Right — social icons */}
          <div className="flex items-center gap-2.5">
            {[
              { label: "Instagram", d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" },
              { label: "YouTube", d: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.6C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
              { label: "Email", d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm16 2l-8 5-8-5v2l8 5 8-5V6z" },
            ].map((icon) => (
              <a key={icon.label} href="#" aria-label={icon.label}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border-glass)] text-[var(--text-muted)] transition-all hover:border-[var(--brand-violet)] hover:text-[var(--text-primary)]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={icon.d}/></svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
