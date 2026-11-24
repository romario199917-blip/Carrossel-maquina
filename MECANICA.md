# Máquina de carrossel do @romariorenan.mkt

Manual de operação. Toda execução automática começa lendo este arquivo inteiro, depois `aprendizados.md`, `historico.md` e a fila do dia.

Dono: Romário Renan (Unique Marketing). Meta: 2 carrosséis por dia (eram 4 até 22/11; reduzido em 23/11 a pedido do Romário, porque a produção de 4 estourou o limite de uso do plano), por pelo menos 30 dias a partir de 20/11/2026, para medir crescimento do perfil. Público: empresários, pequenos empresários e quem gosta de marketing, design e negócios.

## Ambiente

- Fuso: America/Sao_Paulo. Pegue data e hora com `TZ=America/Sao_Paulo date`.
- Repositório: `romario199917-blip/Carrossel-maquina` (público). Ele é a memória da máquina: nada fica só na sessão.
- Preparar: `npm install` na raiz (fontes). Chromium e Playwright já vêm instalados; não reinstalar.
- O ambiente não acessa bancos de imagem nem sites fora de GitHub e npm pelo terminal. Pesquisa é com WebSearch e WebFetch.
- Instagram via Windsor.ai (ferramentas `mcp__Windsor_ai__*`, carregar com ToolSearch):
  - Publicar: conector `instagram`, conta `17841429526605421`, ação `create_carousel_post`, parâmetros `{image_urls:[...], caption:"..."}`. De 2 a 10 JPEG públicos, legenda de até 2.200 caracteres.
  - Radar de referências: conector `instagram_public`, campos `account_name, media_timestamp, media_type, media_like_count, media_comments_count, media_permalink, media_caption`. Perfis: vinci.society, tay.ldantas, bomma.mkt, rochaerico, alfredosoares, pedrosobral, thiago.nigro, g4.business, rafaelkiso, tiagotessmann, olivamktig. Vinci, Tay e G4 escondem curtidas; para eles, use comentários.
  - Números do próprio perfil: conector `instagram`; chame `get_fields` antes para ver os campos de alcance, envios, salvamentos e comentários.
- Imagens do post: `https://raw.githubusercontent.com/romario199917-blip/Carrossel-maquina/<SHA do commit>/posts/<pasta>/NN.jpg`. Sempre com o SHA, nunca com `main`.

## Rotina de produção (uma vez por dia, de madrugada)

1. **Estudo.** Ler `aprendizados.md` e `historico.md`. Às segundas, fazer antes o relatório semanal (ver abaixo).
2. **Radar.**
   - Assuntos em alta no mundo e no Brasil nas últimas 24 a 48 horas (WebSearch): notícias, cultura pop, esporte, tecnologia, economia, lançamentos, memes, datas.
   - Novidades de marketing, IA, vendas, tráfego, branding, design, redes sociais, empreendedorismo e finanças.
   - Posts dos perfis de referência nos últimos 3 dias: o que rendeu acima da média de cada perfil (comentários e, quando houver, curtidas) e com que tipo de gancho e estrutura.
   - Salvar o resumo em `radar/AAAA-MM-DD.md`: de 10 a 15 pautas candidatas, cada uma com fonte, link e data.
3. **Filtro.** Escolher as pautas para os horários vazios do dia. Critérios: está em alta agora, tem conexão legítima com marketing ou negócios, existe ângulo que os perfis de referência não usaram, tem fonte confirmada, não repete assunto do `historico.md` dos últimos 14 dias. Variar o dia: no máximo uma pauta do mesmo universo, e misturar assunto do mundo com assunto de mercado.
4. **Roteiro.** Seguir `manual/roteirista.md` à risca, com as sete etapas e o score. Só entra na fila com 85 ou mais e nenhum veto. Se a pauta não chegar lá em duas rodadas, trocar pela próxima candidata. É melhor publicar um a menos do que um fraco.
5. **Design.** Seguir `manual/design.md`. Partir do post de referência mais parecido em `posts/`. Escrever o HTML na raiz do repositório (os caminhos são relativos à raiz), renderizar com `python3 molde/render.py _post.html posts/<data>-<assunto> 3`, mover o HTML para `posts/<pasta>/post.html`. Abrir `contato.png` e pelo menos a capa e o fechamento em tamanho real e conferir a checagem do manual. Corrigir e renderizar de novo até passar.
6. **Legenda.** Padrão do manual. Salvar em `posts/<pasta>/legenda.txt`.
7. **Fila.** Commit e push das imagens. Depois escrever `fila/AAAA-MM-DD.json` com os links (SHA do commit das imagens) e fazer outro commit e push.
8. **Registro.** Atualizar `historico.md` (uma linha por post) e `aprendizados.md` (ver Evolução).
9. **Resumo para o Romário.** Fechar com uma mensagem curta: as pautas do dia, horário de cada uma, capa, score, e o que ficou aguardando aprovação.

Se o radar, o render ou o push falhar, dizer o que falhou no resumo. Nunca inventar dado, fonte ou resultado para fechar o dia.

## Fila e publicação

Horários: 12:00 e 21:00 (desde 24/11/2026; 09:30 e 18:30 estão desligados). Produzir só dois posts por dia, os dois melhores do filtro, e economizar etapas: radar enxuto e no máximo duas rodadas de roteiro por pauta. Nas semanas 1 e 2, rodar os formatos entre os horários para comparar. A partir da semana 3, usar os números do próprio perfil para mover horários (registrar a mudança aqui).

`fila/AAAA-MM-DD.json` é uma lista:

```json
[{"horario":"09:30","pasta":"posts/2026-11-20-gta6-v2","assunto":"...","capa":"...","score":89,
  "sensivel":false,"status":"pronto","imagens":["https://raw.githubusercontent.com/..."],"legenda":"...",
  "media_id":null,"publicado_em":null}]
```

Status: `pronto` (pode publicar), `aguardando-aprovacao` (tema sensível, só publica depois do ok do Romário), `publicado`, `falhou`.

Rotina de publicação (duas vezes por dia): ler a fila de hoje, pegar o item do horário, publicar só se o status for `pronto`, gravar `publicado`, `media_id` e a hora, e fazer push. Nunca publicar duas vezes o mesmo item. Se não houver item pronto, não publicar nada.

A produção só cria posts para horários que ainda não têm item na fila do dia.

## Regras que não mudam sem o Romário

- Tema sensível (política, tragédia, saúde, boato, pessoa famosa em polêmica) entra com tratamento analítico, marcado como sensível, e fica em `aguardando-aprovacao`.
- Todo fato e número com fonte confirmada. Estimativa é dita como estimativa.
- Sem rosto de pessoa real, sem logotipo, sem arte oficial de terceiros, sem texto copiado de outro perfil.
- Cabeçalho com foto, nome, selo e @; canto superior direito vazio; rodapé só com a seta.
- Voz humana, brasileira, direta. Sem clichê de guru e sem cara de IA.

## Evolução constante

A cada execução de produção:

- Do radar: anotar em `aprendizados.md` de 1 a 3 padrões novos vistos nos posts que mais renderam (tipo de gancho, estrutura, tamanho, tema), com o link do exemplo. Padrão, nunca texto.
- Do próprio perfil: quando houver números de posts com mais de 48 horas, comparar com o score e com o horário, e anotar o que os dados dizem.
- Quando um aprendizado aparecer em pelo menos três posts do próprio perfil, pode virar regra: editar `manual/roteirista.md` ou `manual/design.md` e registrar a mudança no fim de `aprendizados.md`, com data e motivo. As regras da seção acima não entram nisso.
- Não repetir a mesma família narrativa nem o mesmo tipo de gancho mais de duas vezes seguidas.

Relatório semanal (segundas): posts da semana com alcance, envios, salvamentos, comentários, score e horário; os três melhores e os três piores; o que muda na semana seguinte; seguidores no início e no fim. Salvar em `relatorios/AAAA-MM-DD.md` e resumir para o Romário.

## Riscos conhecidos

- A conta do Windsor está em período de teste. Se a publicação ou o radar falhar por plano, avisar o Romário na hora.
- O Instagram limita publicações por API em 24 horas. Se recusar, marcar `falhou` e avisar.
