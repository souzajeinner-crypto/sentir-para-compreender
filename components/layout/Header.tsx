"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavItems, type NavItem } from "@/data/navigation";

function DropdownMenu({ item, isActive }: { item: NavItem; isActive: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function close(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`relative flex items-center gap-1 rounded-lg px-2.5 py-2 text-[13px] font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] ${
          isActive ? "text-[var(--text-primary)]" : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/[0.03]"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true">
          <polyline points="6,9 12,15 18,9" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-1 w-56 rounded-xl border border-[var(--border-glass)] bg-[var(--bg-page)]/98 backdrop-blur-xl shadow-lg py-2 z-50">
          {item.children!.map((child) => (
            <Link key={child.href} href={child.href} onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm transition-colors hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring)]">
              <span className="font-medium text-[var(--text-secondary)]">{child.label}</span>
              <span className="block text-xs text-[var(--text-muted)]">{child.description}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => { setMobileMenuOpen(false); }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") { setMobileMenuOpen(false); menuButtonRef.current?.focus(); }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  const isGroupActive = (item: NavItem) => isActive(item.href) || (item.children?.some((c) => isActive(c.href)) ?? false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-glass)] bg-[var(--bg-page)]/92 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-[880px] px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="Sentir para Compreender — Página inicial">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand-violet)] to-[#4A1FB8] shadow-glow" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17a2 2 0 002 2h4a2 2 0 002-2v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z" />
                <path d="M10 21h4" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="block text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">Sentir</span>
              <span className="block text-[9px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">Para Compreender</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-0.5" role="list">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  {item.children ? (
                    <DropdownMenu item={item} isActive={isGroupActive(item)} />
                  ) : (
                    <Link href={item.href}
                      className={`relative rounded-lg px-2.5 py-2 text-[13px] font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] ${
                        isActive(item.href)
                          ? "text-[var(--text-primary)]"
                          : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/[0.03]"
                      }`}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] rounded-full bg-[var(--accent-magenta)]" aria-hidden="true" />
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link href="/acessibilidade"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[var(--border-glass)] px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--text-primary)] transition-all hover:border-[var(--brand-violet)] hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="4" r="1.5" fill="currentColor" stroke="none"/>
                <path d="M7 8l5 1 5-1M12 9v4M9 20l3-7 3 7"/>
              </svg>
              Acessibilidade
            </Link>

            {/* Mobile menu button */}
            <button ref={menuButtonRef} type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-[var(--text-muted)] transition-colors hover:bg-white/[0.03] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] lg:hidden"
              aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                {mobileMenuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-[var(--border-glass)] pb-4 pt-3 lg:hidden max-h-[80vh] overflow-y-auto">
            <ul className="space-y-1" role="list">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  {item.children ? (
                    <div>
                      <button onClick={() => setMobileExpanded(mobileExpanded === item.href ? null : item.href)}
                        className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                          isGroupActive(item) ? "bg-violet-950/50 text-[var(--text-primary)]" : "text-[var(--text-muted)] hover:bg-white/[0.03]"
                        }`}>
                        <span>{item.label}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${mobileExpanded === item.href ? "rotate-180" : ""}`}><polyline points="6,9 12,15 18,9"/></svg>
                      </button>
                      {mobileExpanded === item.href && (
                        <ul className="ml-4 mt-1 space-y-0.5 border-l-2 border-violet-500/20 pl-3">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link href={child.href} className={`block rounded-lg px-3 py-2 text-sm ${isActive(child.href) ? "text-violet-300 bg-violet-500/5" : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"}`}>{child.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href} className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive(item.href) ? "bg-violet-950/50 text-[var(--text-primary)]" : "text-[var(--text-muted)] hover:bg-white/[0.03]"
                    }`} aria-current={isActive(item.href) ? "page" : undefined}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
