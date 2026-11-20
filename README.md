# Carrossel Máquina

Molde, biblioteca e posts dos carrosséis do @romariorenan.mkt.

- `molde/modelo-aprovado.html`: referência do design aprovado em 20/11/2026 (7 modelos de slide).
- `molde/render.py`: gera as imagens em 1080×1350 (JPEG). Uso: `python3 molde/render.py <post.html> <pasta-de-saida> 3`
- `marca/`: foto de perfil, lacre e luz de folhagem.
- `biblioteca/`: fundos, luz, objetos e gravuras usados nas artes.
- `posts/<data-assunto>/`: o HTML do post, as imagens finais e a legenda.
- `MECANICA.md`: manual de operação da máquina. `manual/`: roteiro e design. `fila/`: posts do dia. `historico.md` e `aprendizados.md`: memória.

Fontes via npm: `@fontsource/instrument-serif`, `@fontsource-variable/dm-sans`, `@fontsource/pinyon-script`.
Os caminhos dentro dos HTML são relativos à raiz do repositório.
