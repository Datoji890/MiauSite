(() => {
  const d = window.businessData;
  const C = window.BusinessCalc;
  const tag = type => `<span class="badge ${type}">${d.tags[type]}</span>`;
  const source = text => `<footer class="slide-source">${text}</footer>`;
  const header = (eyebrow, title, subtitle = '') => `<div class="section-head reveal"><p class="eyebrow">${eyebrow}</p><h2>${title}</h2>${subtitle ? `<p class="lead">${subtitle}</p>` : ''}</div>`;
  const metric = (label, value, className = '') => `<div class="metric"><small>${label}</small><strong class="${className}">${value}</strong></div>`;
  const unit = d.products.map(C.product);
  const anchor = unit[0];
  const scenarios = d.scenarios.map(C.scenario);
  const nicheRows = [...d.niches].sort((a, b) => C.nicheScore(b) - C.nicheScore(a));
  const marketRows = [...d.marketplaces].sort((a, b) => C.marketplaceScore(b) - C.marketplaceScore(a));
  const riskLevel = risk => risk.impact * risk.probability >= 16 ? 'Crítico' : risk.impact * risk.probability >= 10 ? 'Alto' : risk.impact * risk.probability >= 6 ? 'Médio' : 'Baixo';
  const riskClass = level => ({ Crítico: 'critical', Alto: 'high', Médio: 'medium', Baixo: 'low' }[level]);
  const slide = (title, content, className = '') => ({ title, html: `<section class="slide ${className}" aria-label="${title}"><div class="slide-inner">${content}</div></section>` });
  const slides = [];

  slides.push(slide('Capa', `
    <div class="hero-grid align-center">
      <div class="reveal"><p class="eyebrow">PLANO ESTRATÉGICO DE INVESTIMENTO · ${d.meta.year}</p><h1>E-COMMERCE<br><span class="accent">GROWTH PLAN</span></h1><p class="lead">Capital inicial de ${C.money(d.finance.initialInvestment)} para validar uma operação marketplace-first em 90 dias.</p><div class="tag-row"><span class="pill">VALIDAÇÃO</span><span class="pill">ESCALA</span><span class="pill">REINVESTIMENTO</span></div></div>
      <div class="hero-visual reveal"><span class="hero-chip">testar → medir</span><span class="hero-chip">margem antes de escala</span><span class="hero-chip">reinvestir vencedores</span></div>
    </div>`));

  slides.push(slide('Visão Geral', `${header('01 · TESE DE INVESTIMENTO', 'Começar pequeno. Aprender rápido.', 'A meta inicial não é volume: é provar produto, canal e margem antes de comprometer mais capital.')}
    <div class="grid-4 reveal">${metric('Capital inicial', C.money(d.finance.initialInvestment))}${metric('Modelo', 'Marketplace-first')}${metric('Horizonte', '90 dias')}${metric('Objetivo', 'Validar e escalar')}</div>
    <div class="process-flow reveal"><span>TESTAR</span><i>→</i><span>MEDIR</span><i>→</i><span>OTIMIZAR</span><i>→</i><span>REINVESTIR</span></div>
    <div class="callout reveal">Princípio: só aumentar estoque e mídia quando margem, giro e aquisição sustentarem a operação.</div>
    ${source(`${tag('assumption')} Estrutura de decisão proposta para a simulação.`)}`));

  slides.push(slide('Oportunidade de Mercado', `${header('02 · CONTEXTO', 'O marketplace reduz a distância até a primeira venda.', 'Oportunidade não elimina concorrência: preço total, prazo, reputação e qualidade operacional continuam decisivos.')}
    <div class="grid-2"><div class="card reveal"><div class="signal-list">${d.marketContext.map(x => `<article><strong>${x.signal}</strong><p>${x.implication}</p></article>`).join('')}</div></div>
    <div class="card reveal"><h3>Leitura executiva</h3><ul class="list compact"><li><span>Entrada</span><b>infraestrutura pronta</b></li><li><span>Vantagem</span><b>intenção já existente</b></li><li><span>Pressão</span><b>comparação imediata</b></li><li><span>Resposta</span><b>kit + conteúdo + serviço</b></li></ul><div class="tag-row">${tag('validate')}</div></div></div>
    ${source(`Fontes institucionais para diligência: ${d.sources.map(s => `${s.name} (${s.year})`).join(' · ')}. Links em docs/sources.md. Sem estatística quantitativa não verificada.`)}`));
  slides.push(slide('Modelo de Negócio', `${header('03 · MODELO', 'Marketplace-first para comprar aprendizado.', 'Usar tráfego, pagamento, logística e reputação existentes antes de financiar uma loja própria.')}
    <div class="business-flow reveal">${['Fornecedor', 'Estoque inicial', 'Marketplace', 'Cliente', 'Receita', 'Margem', 'Reinvestimento', 'Escala'].map((x, i) => `<div class="flow-node"><b>${String(i + 1).padStart(2, '0')}</b><span>${x}</span></div>${i < 7 ? '<i>→</i>' : ''}`).join('')}</div>
    <div class="grid-3 reveal"><div class="card"><h3>O que terceiriza</h3><p class="muted">Aquisição inicial, checkout, pagamento e parte da logística.</p></div><div class="card"><h3>O que controla</h3><p class="muted">Seleção, preço, conteúdo, estoque, atendimento e caixa.</p></div><div class="card"><h3>Gate central</h3><p class="muted">Margem positiva depois de taxas, frete, mídia e devoluções.</p></div></div>
    ${source(`${tag('assumption')} Modelo operacional recomendado para capital limitado.`)}`));

  slides.push(slide('Comparação de Marketplaces', `${header('04 · CANAIS', 'Priorizar um canal. Preparar o segundo.', 'Notas de 0–10 são avaliação estratégica estimada — não representam rankings oficiais.')}
    <div class="table-wrap reveal"><table><thead><tr><th>Marketplace</th><th>Demanda</th><th>Concorrência</th><th>Logística</th><th>Iniciante</th><th>Escala</th><th>Marketing</th><th>Adequação ao capital</th><th>Nota</th></tr></thead><tbody>${marketRows.map(m => `<tr><td><b>${m.name}</b><small>${m.audience}</small></td><td>${m.demand}</td><td>${m.competition}</td><td>${m.logistics}</td><td>${m.beginner}</td><td>${m.scale}</td><td>${m.marketing}</td><td>${m.fit}</td><td class="score">${C.marketplaceScore(m)}</td></tr>`).join('')}</tbody></table></div>
    <div class="callout reveal"><b>Diretriz:</b> iniciar no Mercado Livre para intenção de busca; testar Shopee para kits e preço; abrir Amazon após validar catálogo e operação.</div>
    ${source(`${tag('assumption')} Avaliação estratégica estimada. Critérios: demanda, concorrência inversa, logística, entrada, escala, marketing e aderência ao capital. Confirmar condições nas centrais oficiais (${d.meta.year}).`)}`));

  slides.push(slide('Nichos Promissores', `${header('05 · PORTFÓLIO', 'Casa e organização lidera o shortlist.', 'Concorrência alta reduz a nota; capital baixo, risco controlável e escala elevam a atratividade.')}
    <div class="table-wrap reveal niche-table"><table><thead><tr><th>Categoria</th><th>Demanda</th><th>Margem</th><th>Concorrência</th><th>Capital</th><th>Risco</th><th>Escala</th><th>Nota</th></tr></thead><tbody>${nicheRows.map(n => `<tr><td><b>${n.name}</b></td><td>${n.demand}</td><td>${n.margin}</td><td>${n.competition}</td><td>${n.capital}</td><td>${n.risk}</td><td>${n.scale}</td><td class="score">${C.nicheScore(n)}</td></tr>`).join('')}</tbody></table></div>
    ${source(`${tag('assumption')} Avaliação estratégica estimada (0–10). Nota = média de demanda, margem, capital acessível, baixo risco, escala e concorrência invertida.`)}`));

  slides.push(slide('Produtos Potenciais', `${header('06 · SHORTLIST', 'Nove hipóteses. Cinco testes. Um vencedor.', 'Itens compactos, armazenáveis, pouco frágeis e com potencial para kit recebem prioridade.')}
    <div class="table-wrap reveal product-table"><table><thead><tr><th>Produto</th><th>Compra</th><th>Venda</th><th>Taxas</th><th>Mídia</th><th>Lucro un.</th><th>Margem</th><th>ROI produto</th></tr></thead><tbody>${unit.map(p => `<tr><td><b>${p.name}</b><small>${p.role} · ${p.niche}</small></td><td>${C.money(p.cost)}</td><td>${C.money(p.price)}</td><td>${C.money(p.fee + p.tax)}</td><td>${C.money(p.marketing)}</td><td class="${p.profit >= 0 ? 'positive' : 'negative'}">${C.money(p.profit)}</td><td>${C.pct(p.margin)}</td><td>${C.pct(p.roi)}</td></tr>`).join('')}</tbody></table></div>
    ${source(`${tag('assumption')} Custos, preços, taxas, frete e mídia são premissas editáveis em js/data.js; lucro já desconta embalagem.`)}`));
  
