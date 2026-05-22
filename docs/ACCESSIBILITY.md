# Acessibilidade — Sentir para Compreender

## Baseline

- WCAG 2.1 AA como exigência mínima
- Checagem complementar contra WCAG 2.2 quando possível

## Recursos Implementados

### Módulo 1 (Estrutura Base)
- [x] `lang="pt-BR"` no `<html>`
- [x] Skip link funcional
- [x] Landmarks semânticos (`header`, `main`, `footer`, `nav`)
- [x] Foco visível em todos os elementos interativos
- [x] `aria-current="page"` no item de menu ativo
- [x] `aria-expanded` no menu mobile
- [x] Escape fecha menu mobile
- [x] Trap de foco no menu mobile
- [x] Sem `maximum-scale=1` no viewport (permite zoom)
- [x] CSS custom properties para alto contraste (preparado)
- [x] `prefers-reduced-motion` respeitado

### Módulos futuros
- [ ] Alto contraste toggle (Módulo 10)
- [ ] Ajuste de fonte (Módulo 10)
- [ ] VLibras (Módulo 10)
- [ ] Player de áudio acessível (Módulo 5)
- [ ] Modo sensorial reduzido (Módulo 10)

## Ferramentas de Teste

- axe-core (testes automatizados)
- Lighthouse (auditoria)
- Navegação por teclado (teste manual)
- NVDA / VoiceOver (teste com leitor de tela)
