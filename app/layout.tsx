import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Header, Footer, SkipLink } from "@/components/layout";
import { siteConfig } from "@/data/site";
import "@/styles/globals.css";

/* Fontes via next/font — auto-hospedadas, sem layout shift */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.subtitle}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name }],
  keywords: [
    "avaliação psicológica",
    "deficiência",
    "acessibilidade",
    "inclusão",
    "psicologia",
    "WCAG",
    "acessibilidade digital",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col antialiased">
        {/* Ruído sutil sobre tudo */}
        <div className="grain" aria-hidden="true" />

        {/* Aurora — orbs animados no fundo */}
        <div className="aurora" aria-hidden="true">
          <div className="aurora-orb" />
          <div className="aurora-orb" />
          <div className="aurora-orb" />
          <div className="aurora-orb" />
          <div className="aurora-orb" />
        </div>

        <SkipLink />
        <Header />

        {/* Conteúdo acima da aurora */}
        <main
          id="conteudo-principal"
          className="page-content flex-1"
        >
          {children}
        </main>

        <Footer />

        {/* Scroll reveal — ativa .visible quando elemento entra na viewport */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var obs = new IntersectionObserver(function(entries) {
                  entries.forEach(function(entry) {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                  });
                }, { threshold: 0.12 });
                function init() {
                  document.querySelectorAll('.reveal').forEach(function(el) {
                    obs.observe(el);
                  });
                }
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', init);
                } else {
                  init();
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
