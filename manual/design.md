# Design dos carrosséis do @romariorenan.mkt

Padrão visual aprovado pelo Romário em 20/11/2026. Mantenha este nível de acabamento em todo carrossel. Varie de leve entre um post e outro e, quando fizer sentido, inclua um detalhe ligado ao assunto.

A linguagem mistura minimalismo, sofisticação e um leve ar retrô: serifa editorial grande, poucos elementos, textura de papel, luz suave e quadros translúcidos.

## Formato e produção

- Slide de 1080×1350 px (4:5). Margem lateral de 84 px.
- Arte feita em HTML/CSS e renderizada com Playwright (Chromium) em escala 3, depois reduzida para 1080×1350 com filtro LANCZOS. Exportar em JPEG de qualidade 92 para publicar.
- Nunca usar IA generativa de imagem para texto ou identidade.
- Molde de referência: `molde/modelo-aprovado.html`. Para paleta padrão, usar `molde/kit.js` (mesmo CSS e modelos; ver `posts/2026-11-20-google-ads-ajuste/post.html`). O `report()` do kit acusa texto fora da margem (LARG), perto da seta (ALT) e vazando do cartão (VAZA). Repositório do projeto: `romario199917-blip/Carrossel-maquina`.

## Fontes

Todas via pacotes `@fontsource` (npm):

- Título: **Instrument Serif** 400, normal e itálico. Caixa baixa, `letter-spacing:-.035em`, `line-height:.9`, sem quebra automática.
- Texto e rótulos: **DM Sans** variável. Corpo em 400, destaque em 700.
- Cursiva: **Pinyon Script**, só para uma palavra ou frase curta de vez em quando.

Ao declarar a fonte no CSS, não use o nome `Serif` (colide com a palavra-chave genérica). Use um nome próprio, como `ISerif`.

Tamanhos:

- Título: de 150 a 210 px. Palavra-chave gigante de capa: até 400 px. Número de dado: até 640 px.
- Corpo: de 34 a 38 px. Nunca abaixo de 30 px.
- Rótulo em caixa alta: 22 a 23 px, `letter-spacing:.2em`.
- Ajuste automático: se uma linha de título passar da área útil, reduzir a fonte de 3 em 3 px até caber. Rodar só depois de `document.fonts.ready`.

## Paleta

| Tema | Fundo | Texto | Texto suave | Destaque (itálico, linhas) |
|---|---|---|---|---|
| Creme | `#EFE8DA` | `#2A1B12` | `#7A6A5B` | `#A38563`, acento bordô `#6B1F28` |
| Café | `#2A1D15` | `#F4EDDF` | `#B9A894` | `#CDB38E` |
| Bordô | `#3A1016` | `#F6EEE1` | `#CDB0A8` | `#D9BE9B` |
| Musgo | `#343A29` | `#F2EDDD` | `#BFC0A8` | `#DCD0A8` |

Alternar os temas dentro do carrossel (por exemplo: café, creme, bordô, musgo, café, creme). Não repetir o mesmo tema em dois slides seguidos.

## Camadas de fundo (de baixo para cima)

1. Cor do tema ou imagem de fundo da biblioteca, escurecida (`brightness(.55)` a `.62`).
2. Luz: um `radial-gradient` claro num canto superior e um escuro no canto inferior oposto.
3. Opcional: sombra de folhagem em cinza, `mix-blend-mode:soft-light`, opacidade de .55 a .75.
4. Relevo de papel: SVG com `feTurbulence` (baseFrequency .55, 4 oitavas) mais `feDiffuseLighting`. Em tema claro, `multiply` a 50%. Em tema escuro, `soft-light` a 55%.
5. Opcional: marca d'água. Uma letra, número ou sinal gigante em serifa, com opacidade de 5 a 6%.

## Elementos fixos

- **Cabeçalho** (canto superior esquerdo, em todos os slides): foto de perfil redonda de 88 px com anel fino, "Romário Renan" em negrito com o selo azul ao lado, e `@romariorenan.mkt` abaixo em tom suave.
- **Canto superior direito: vazio.** Não colocar título nem rótulo ali.
- **Rodapé: só a seta**, dentro de um círculo de 92 px com borda fina, no canto inferior direito. Sem numeração de página, sem "Nº", sem texto. O último slide não tem seta.

## Componentes

Usar no máximo dois por slide.

- **Itálico suave:** uma palavra ou linha do título em itálico, na cor de destaque.
- **Caixa de seleção:** palavra-chave com fundo translúcido, contorno fino e quatro alças quadradas nos cantos.
- **Palavra em desfoque:** a palavra se desfaz para a direita, com uma cópia borrada por baixo.
- **Cartão de vidro:** fundo translúcido, borda de 1,5 px, raio de 36 px, brilho na borda superior e sombra projetada.
- **Cartão claro sobre fundo escuro:** creme sólido com sombra forte, para o lado "certo" de uma comparação.
- **Pílula:** etiqueta arredondada em caixa alta espaçada. A principal pode ter borda mais forte.
- **Linha em L:** fio vertical e horizontal ligando um texto pequeno ao título.
- **Número em degradê:** creme para bronze, com sombra projetada.
- **Lacre de cera:** recorte do envelope, com cerca de 130 px, preso na borda de um cartão.
- **Gravura ou objeto da biblioteca:** em tema claro, usar `mix-blend-mode:multiply` com leve sépia.

## Modelos de slide

- **Capa A (tipográfica):** texto centralizado, pílula no topo, três linhas médias e a palavra-chave gigante em degradê. Linha de apoio no rodapé esquerdo.
- **Capa B (com elemento):** título grande à esquerda, caixa de seleção na palavra-chave e um objeto da biblioteca entrando pelo canto inferior direito, inclinado e com sombra.
- **Texto:** parágrafo pequeno no alto, linha em L e título grande alinhado à direita.
- **Dado:** número gigante e cartão de vidro com a explicação.
- **Comparação:** título e dois cartões lado a lado (vidro e creme).
- **Lista:** cartão de vidro com título centralizado e itens numerados em itálico, separados por fios.
- **Fechamento:** frase em serifa, complemento em cursiva, texto curto e botão em pílula com o pedido (enviar, salvar ou comentar).

Usar a Capa A quando não houver imagem boa para a pauta. Usar a Capa B quando houver um elemento ligado ao tema.

## Variação e camada de assunto

Regra aprovada em 20/11/2026 com o post do GTA 6 (`posts/2026-11-20-gta6-v2/post.html` é o exemplo de referência): o branding do Romário fica na frente e o assunto entra só em detalhes e efeitos.

O que nunca muda: cabeçalho, canto superior direito vazio, rodapé só com a seta, serifa nos títulos, cursiva no complemento, cartões de vidro arredondados, corpo em DM Sans.

O que o assunto pode trazer (no máximo três traços por post, fortes na capa e no fechamento, leves nos slides do meio):

1. **Cor.** Trocar a paleta padrão por uma paleta do universo do tema, mantendo a alternância entre fundos escuros e o creme. No GTA 6: degradê de pôr do sol (roxo, rosa, laranja) e roxo noturno. O número em degradê e os itálicos seguem a paleta do tema.
2. **Um elemento de cenário** em silhueta ou sombra, desenhado em código. No GTA 6: coqueiros (`molde/coqueiro.js`). Tem que parecer com o original: olhar o desenho em tamanho grande antes de aplicar.
3. **Selos pequenos** numa fonte que lembre o tema, só em rótulos curtos (até 3 palavras, 34 a 38 px). No GTA 6: "Missão 01", "Missão cumprida", "Placar", e cinco estrelas ao lado do rótulo do cartão.

O que foi testado e reprovado: fonte temática em palavra grande ou com contorno grosso, sol listrado, cantoneiras nos cartões, título inclinado. Ficou exagerado. Na dúvida, menos.

Limites: não reproduzir logotipo, arte oficial, personagem nem rosto. Evocar o universo com cor, cenário genérico e tipografia parecida.

Assunto sem universo visual próprio (tráfego, vendas, gestão): usar a paleta padrão e um objeto, gravura ou marca d'água da biblioteca que tenha relação real com o tema. Se nada combinar, não forçar.

Variar de leve entre um post e outro: ordem dos temas, posição da luz, componente de destaque, alinhamento e marca d'água.

## Imagens

- Fontes permitidas: a biblioteca do Romário (fundos, luz, objetos recortados, gravuras), ilustração desenhada em código e imagens que ele enviar.
- O ambiente de execução não baixa imagens de bancos externos. Só alcança o GitHub.
- Não usar rosto de pessoa real nem logotipo de marca na arte. O nome pode aparecer no texto.
- Não usar na arte do perfil pessoal os fundos com a marca d'água UNQ. Eles pertencem à agência.

## Checagem antes de entregar

1. Nenhum texto passa da margem de 84 px nem encosta em outro elemento.
2. Corpo de texto com 30 px ou mais.
3. Cabeçalho presente, canto direito vazio, rodapé só com a seta.
4. Temas alternados e no máximo dois componentes de destaque por slide.
5. Olhar a imagem final renderizada, não só o código.