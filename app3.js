slides.push(slide('Riscos e Critérios de Escala/Pausa', `${header('17 · PROTEÇÃO DE CAPITAL', 'Escalar vendas sem margem é escalar prejuízo.', 'Probabilidade × impacto determina prioridade; cada risco precisa de dono e mitigação.')}
    <div class="risk-layout"><div class="table-wrap reveal"><table><thead><tr><th>Risco</th><th>P</th><th>I</th><th>Nível</th><th>Mitigação</th></tr></thead><tbody>${d.risks.map(r => { const level = riskLevel(r); return `<tr><td><b>${r.risk}</b></td><td>${r.probability}</td><td>${r.impact}</td><td><span class="risk-level ${riskClass(level)}">${level}</span></td><td>${r.mitigation}</td></tr>`; }).join('')}</tbody></table></div>
    <div class="card reveal"><h3>Semáforo por SKU</h3><div class="traffic"><article><i class="green"></i><div><b>Escalar</b><p>Margem ≥ 10%, conversão e avaliações estáveis, giro ≤ 60 dias.</p></div></article><article><i class="yellow"></i><div><b>Otimizar</b><p>Indicadores mistos; ajustar oferta antes de repor.</p></div></article><article><i class="red"></i><div><b>Pausar</b><p>Margem negativa, CAC acima da contribuição ou estoque parado.</p></div></article></div><h3>Quando não investir</h3><p class="muted">Não aumentar aporte se ROAS estiver abaixo do equilíbrio, CAC consumir a contribuição ou o estoque não girar.</p></div></div>
    ${source(`${tag('assumption')} Matriz qualitativa de risco. Vermelho é reservado a perdas e pausa.`)}`));

  slides.push(slide('Estratégia de Longo Prazo', `${header('18 · OPCIONALIDADE', 'A loja própria é consequência, não ponto de partida.', 'Cada fase exige que a anterior tenha criado margem, dados e capacidade operacional.')}
    <div class="long-term reveal">${d.longTerm.map((x, i) => `<article><div class="phase-ring">${x.phase}</div><div><h3>${x.focus}</h3><p>${x.result}</p></div>${i < d.longTerm.length - 1 ? '<i>→</i>' : ''}</article>`).join('')}</div>
    <div class="grid-3 reveal"><div class="card"><small>ATIVO 01</small><h3>Dados de demanda</h3></div><div class="card"><small>ATIVO 02</small><h3>Reputação e conteúdo</h3></div><div class="card"><small>ATIVO 03</small><h3>Fornecedor e operação</h3></div></div>
    ${source(`${tag('assumption')} Visão de evolução; avanço condicionado aos gates financeiros e operacionais.`)}`));

  slides.push(slide('Simulador de Investimento', `${header('19 · SIMULADOR', 'Mude uma premissa. Veja o resultado.', 'Receita, custos, lucro, margem, ROI, ROAS e payback são recalculados em tempo real.')}
    <div class="sim-layout" id="simulator"><div class="card sim-controls reveal">${[
      ['capital', 'Capital inicial', 1000, 20000, 500, d.finance.initialInvestment, 'R$'], ['price', 'Preço de venda', 20, 300, 1, d.finance.averageTicket, 'R$'], ['cost', 'Custo do produto', 5, 150, 1, d.finance.productCost, 'R$'], ['feeRate', 'Taxa marketplace', .05, .30, .005, d.finance.marketplaceFeeRate, '%'], ['cac', 'Marketing por venda', 0, 40, 1, d.finance.marketingCost, 'R$'], ['units', 'Quantidade de vendas', 1, 250, 1, 75, 'un.'], ['shipping', 'Custo logístico', 0, 35, 1, d.finance.shippingCost, 'R$']
    ].map(([key, label, min, max, step, value, suffix]) => `<div class="control"><label for="sim-${key}"><span>${label}</span><b><span data-for="${key}">${key === 'feeRate' ? C.pct(value) : C.number(value)}</span> ${suffix}</b></label><input id="sim-${key}" data-sim="${key}" type="range" min="${min}" max="${max}" step="${step}" value="${value}"></div>`).join('')}</div><div class="card reveal"><div class="metric-grid sim-results" data-sim-output></div><div class="callout">O simulador usa tributo, devolução, embalagem e custo fixo definidos em <code>js/calculator.js</code>.</div></div></div>
    ${source(`${tag('projection')} Resultado de simulação, não promessa. Validar tributação e tarifas aplicáveis ao negócio.`)}`));

  slides.push(slide('Recomendação Final', `${header('20 · INVESTMENT COMMITTEE', `Aprovar um teste controlado de ${C.money(d.finance.initialInvestment).replace(',00', '')}.`, 'A recomendação é condicional: executar por 90 dias, medir semanalmente e interromper antes de destruir margem.')}
    <div class="grid-2"><div class="card highlight reveal"><p class="eyebrow">RECOMENDAÇÃO</p><h3 class="recommendation">APROVAR COM GATES</h3><ul class="list"><li><span>Prioridade</span><b>Mercado Livre + 5 SKUs</b></li><li><span>Âncora</span><b>Kit organizador modular</b></li><li><span>Margem mínima</span><b>10% líquida</b></li><li><span>Horizonte</span><b>90 dias</b></li><li><span>Escala</span><b>após giro e CAC sustentáveis</b></li></ul></div>
    <div class="card reveal"><h3>Critérios de interrupção</h3><p class="muted">Margem negativa recorrente; estoque sem giro; CAC acima da contribuição; falhas graves de fornecedor; caixa abaixo da reserva.</p><h3>Decisão</h3><div class="decision-actions"><button class="btn-primary" data-decision="invest">Investir</button><button class="btn-secondary" data-decision="review">Revisar premissas</button></div><div class="download-box"><div><small>PROJETO COMPLETO</small><b>HTML, CSS, JavaScript e documentação</b></div><a class="btn-download" href="downloads/ecommerce-growth-plan.zip" download="ecommerce-growth-plan.zip">Baixar projeto (.zip)</a></div></div></div>
    <div class="closing reveal">“O objetivo inicial não é maximizar faturamento. É descobrir uma operação lucrativa que possa ser escalada.”</div>
    ${source(`${tag('projection')} Recomendação estratégica baseada nas premissas desta apresentação; não constitui garantia de retorno.`)}`));
  const App = {
    initializedCharts: new Set(),
    openModal(title, body) {
      document.querySelector('#modalTitle').textContent = title;
      document.querySelector('#modalBody').innerHTML = body;
      const modal = document.querySelector('#modal');
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.querySelector('#closeModal').focus();
    },
    closeModal() {
      const modal = document.querySelector('#modal');
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    },
    chart(index) {
      if (this.initializedCharts.has(index)) return;
      if (index === 8) document.querySelector('#allocationChart').innerHTML = Charts.donut(d.allocation, C.allocationTotal());
      if (index === 10) document.querySelector('#waterfallChart').innerHTML = Charts.waterfall(sale100);
      if (index === 12) document.querySelector('#scenarioChart').innerHTML = Charts.groupedBars(scenarios);
      if ([8, 10, 12].includes(index)) this.initializedCharts.add(index);
    },
    init() {
      const deck = document.querySelector('#deck');
      deck.innerHTML = slides.map(s => s.html).join('');
      d.meta.totalSlides = slides.length;
      document.querySelector('.menu-head strong').textContent = `${slides.length} telas`;
      document.querySelector('#menuList').innerHTML = slides.map((s, i) => `<button type="button" data-slide="${i}"><b>${String(i + 1).padStart(2, '0')}</b><span>${s.title}</span></button>`).join('');
      
