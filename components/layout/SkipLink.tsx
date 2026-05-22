/**
 * SkipLink — Link para pular navegação e ir direto ao conteúdo.
 *
 * NOTA PEDAGÓGICA:
 * O skip link é um dos recursos mais simples e mais impactantes de
 * acessibilidade. Pessoas que navegam por teclado ou leitor de tela
 * precisam percorrer todos os links do menu antes de chegar ao conteúdo.
 * O skip link permite pular essa etapa.
 *
 * WCAG 2.1 — Critério 2.4.1 (Bypass Blocks): exige mecanismo para
 * pular blocos de conteúdo repetidos.
 *
 * Este componente fica visualmente oculto até receber foco via teclado.
 */
export function SkipLink() {
  return (
    <a href="#conteudo-principal" className="skip-link">
      Pular para o conteúdo principal
    </a>
  );
}
