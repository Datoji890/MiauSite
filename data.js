const businessData = {
  meta: { title: 'E-COMMERCE GROWTH PLAN', subtitle: 'Plano Estratégico de Investimento', currency: 'BRL', locale: 'pt-BR', totalSlides: 21, horizonDays: 90, year: 2026 },
  tags: { real: 'DADO REAL', assumption: 'PREMISSA DE SIMULAÇÃO', projection: 'PROJEÇÃO', validate: 'CONTEXTO A VALIDAR' },
  finance: { initialInvestment: 5000, averageTicket: 89.9, productCost: 32, marketplaceFeeRate: .18, taxRate: .06, shippingCost: 12, packagingCost: 2.5, marketingCost: 13, returnRate: .04, monthlyFixedCost: 350 },
  allocation: [
    { name: 'Estoque', share: .50, color: '#2563eb', objective: 'Validar cinco SKUs com lote curto' },
    { name: 'Marketing / publicidade', share: .15, color: '#7c3aed', objective: 'Comprar dados de conversão mensuráveis' },
    { name: 'Capital de giro', share: .15, color: '#10b981', objective: 'Cobrir repasses, fretes e reposição' },
    { name: 'Embalagem / operação', share: .07, color: '#38bdf8', objective: 'Expedição e apresentação mínima' },
    { name: 'Reserva de emergência', share: .08, color: '#f59e0b', objective: 'Absorver devoluções e desvios' },
    { name: 'Ferramentas / imprevistos', share: .05, color: '#94a3b8', objective: 'Automação leve e contingências' }
  ],
  marketContext: [
    { signal: 'Marketplaces reúnem busca, pagamento, reputação e logística', implication: 'Validar onde já existe intenção de compra' },
    { signal: 'Preço total, prazo, frete e avaliações afetam a decisão', implication: 'A operação integra a proposta de valor' },
    { signal: 'Taxas e políticas variam por categoria, anúncio e programa', implication: 'Conferir simuladores oficiais antes de publicar' },
    { signal: 'Dados setoriais têm períodos e metodologias diferentes', implication: 'Não combinar números sem normalização' }
  ],
  sources: [
    { name: 'Mercado Livre — Central de Vendedores', year: 2026, url: 'https://vendedores.mercadolivre.com.br/' },
    { name: 'Shopee — Central do Vendedor', year: 2026, url: 'https://seller.shopee.com.br/' },
    { name: 'Amazon — Venda na Amazon', year: 2026, url: 'https://venda.amazon.com.br/' },
    { name: 'IBGE — Comércio e estatísticas econômicas', year: 2026, url: 'https://www.ibge.gov.br/estatisticas/economicas/comercio.html' }
  ],
  marketplaces: [
    { name: 'Mercado Livre', demand: 9, competition: 6, logistics: 9, beginner: 7, scale: 9, marketing: 9, fit: 8, audience: 'Busca objetiva e alta intenção' },
    { name: 'Shopee', demand: 8, competition: 7, logistics: 7, beginner: 9, scale: 8, marketing: 8, fit: 9, audience: 'Descoberta, preço e kits' },
    { name: 'Amazon', demand: 8, competition: 6, logistics: 8, beginner: 6, scale: 9, marketing: 7, fit: 7, audience: 'Confiança e conveniência' }
  ],
  niches: [
    { name: 'Casa e organização', demand: 9, margin: 8, competition: 6, capital: 9, risk: 8, scale: 9 },
    { name: 'Beleza e autocuidado', demand: 9, margin: 8, competition: 4, capital: 7, risk: 5, scale: 8 },
    { name: 'Acessórios para celular', demand: 9, margin: 7, competition: 3, capital: 9, risk: 6, scale: 8 },
    { name: 'Pet funcional', demand: 8, margin: 8, competition: 6, capital: 8, risk: 8, scale: 8 },
    { name: 'Fitness em casa', demand: 7, margin: 7, competition: 5, capital: 8, risk: 7, scale: 7 },
    { name: 'Utilidades domésticas', demand: 9, margin: 7, competition: 5, capital: 8, risk: 8, scale: 9 },
    { name: 'Automotivo compacto', demand: 7, margin: 7, competition: 6, capital: 7, risk: 7, scale: 7 },
    { name: 'Eletrônicos / acessórios', demand: 8, margin: 6, competition: 4, capital: 6, risk: 4, scale: 8 },
    { name: 'Infantil funcional', demand: 7, margin: 7, competition: 6, capital: 7, risk: 5, scale: 7 },
    { name: 'Ferramentas leves', demand: 7, margin: 7, competition: 7, capital: 6, risk: 7, scale: 7 },
    { name: 'Home office', demand: 7, margin: 8, competition: 6, capital: 8, risk: 8, scale: 8 }
  ],
  products: [
    { name: 'Kit organizador modular', niche: 'Casa e organização', price: 89.9, cost: 32, feeRate: .18, marketing: 6, shipping: 10, packaging: 2.5, taxRate: .06, role: 'Âncora' },
    { name: 'Organizador de cabos — kit', niche: 'Home office', price: 39.9, cost: 11, feeRate: .18, marketing: 4, shipping: 7, packaging: 1.5, taxRate: .06, role: 'Entrada' },
    { name: 'Tapete coletor pet', niche: 'Pet funcional', price: 69.9, cost: 24, feeRate: .18, marketing: 5, shipping: 9, packaging: 2, taxRate: .06, role: 'Giro' },
    { name: 'Kit potes herméticos', niche: 'Utilidades domésticas', price: 119.9, cost: 48, feeRate: .18, marketing: 8, shipping: 14, packaging: 3.5, taxRate: .06, role: 'Margem' },
    { name: 'Suporte notebook dobrável', niche: 'Home office', price: 79.9, cost: 29, feeRate: .18, marketing: 6, shipping: 9, packaging: 2.5, taxRate: .06, role: 'Giro' },
    { name: 'Necessaire expansível', niche: 'Casa e organização', price: 59.9, cost: 19, feeRate: .18, marketing: 5, shipping: 8, packaging: 2, taxRate: .06, role: 'Complemento' },
    { name: 'Faixa elástica fitness', niche: 'Fitness em casa', price: 49.9, cost: 14, feeRate: .18, marketing: 5, shipping: 7, packaging: 1.5, taxRate: .06, role: 'Entrada' },
    { name: 'Mini kit de ferramentas', niche: 'Ferramentas leves', price: 74.9, cost: 28, feeRate: .18, marketing: 5, shipping: 10, packaging: 2.5, taxRate: .06, role: 'Teste' },
    { name: 'Lixeira veicular compacta', niche: 'Automotivo compacto', price: 44.9, cost: 13, feeRate: .18, marketing: 4, shipping: 7, packaging: 1.5, taxRate: .06, role: 'Teste' }
  ],
  inventoryMix: [
    { product: 'Kit organizador modular', share: .30, price: 89.9, margin: .26, monthlySales: 10, status: 'Prioridade' },
    { product: 'Organizador de cabos — kit', share: .25, price: 39.9, margin: .28, monthlySales: 18, status: 'Validar' },
    { product: 'Tapete coletor pet', share: .20, price: 69.9, margin: .27, monthlySales: 11, status: 'Validar' },
    { product: 'Suporte notebook dobrável', share: .15, price: 79.9, margin: .25, monthlySales: 8, status: 'Teste' },
    { product: 'Necessaire expansível', share: .10, price: 59.9, margin: .29, monthlySales: 7, status: 'Teste' }
  ],
  scenarios: [
    { name: 'Conservador', orders: 40, ticket: 84, productRate: .38, feeRate: .18, taxRate: .06, logisticsRate: .13, marketing: 750, operating: 350, reinvestRate: .50, color: '#ef4444' },
    { name: 'Base', orders: 75, ticket: 89.9, productRate: .356, feeRate: .18, taxRate: .06, logisticsRate: .11, marketing: 750, operating: 350, reinvestRate: .70, color: '#2563eb' },
    { name: 'Otimista', orders: 115, ticket: 94, productRate: .34, feeRate: .17, taxRate: .06, logisticsRate: .10, marketing: 900, operating: 420, reinvestRate: .70, color: '#10b981' }
  ],
  marketing: [
    { channel: 'Marketplace Ads', share: .60, goal: 'Capturar demanda no ponto de compra', metric: 'ROAS e TACOS' },
    { channel: 'Meta Ads', share: .16, goal: 'Testar criativos e remarketing', metric: 'CPA assistido' },
    { channel: 'Google Ads', share: .08, goal: 'Experimento de intenção externa', metric: 'ROAS' },
    { channel: 'Conteúdo orgânico', share: .16, goal: 'Demonstração e prova social', metric: 'CTR e salvamentos' }
  ],
  roadmap: [
    { days: '1–15', title: 'Preparar', actions: 'Amostras, fornecedor, cadastro, preço e criativos', gate: 'Margem unitária positiva' },
    { days: '16–30', title: 'Lançar', actions: 'Publicação, campanhas pequenas e atendimento diário', gate: 'Primeiros pedidos e avaliações' },
    { days: '31–60', title: 'Otimizar', actions: 'Cortar fracos; ajustar kit, preço e mídia', gate: 'CAC e giro sustentáveis' },
    { days: '61–90', title: 'Escalar', actions: 'Repor vencedores e abrir segundo canal', gate: 'Margem líquida ≥ 10%' }
  ],
  kpis: { conversion: .018, stockCoverage: 42 },
  risks: [
    { risk: 'Concorrência / guerra de preço', impact: 4, probability: 4, mitigation: 'Kits, conteúdo e teto de preço mínimo' },
    { risk: 'Taxas e frete', impact: 4, probability: 4, mitigation: 'Simular por anúncio e revisar semanalmente' },
    { risk: 'Estoque parado', impact: 5, probability: 3, mitigation: 'Lote curto, curva ABC e stop-loss' },
    { risk: 'Devoluções', impact: 4, probability: 3, mitigation: 'Fotos, medidas, qualidade e embalagem' },
    { risk: 'Avaliações negativas', impact: 5, probability: 2, mitigation: 'SLA de resposta e inspeção pré-envio' },
    { risk: 'Dependência de marketplace', impact: 5, probability: 3, mitigation: 'Segundo canal após validação' },
    { risk: 'Capital insuficiente', impact: 4, probability: 3, mitigation: 'Reserva, giro curto e sem retirada inicial' },
    { risk: 'Problema com fornecedor', impact: 5, probability: 3, mitigation: 'Amostra e fornecedor alternativo' }
  ],
  longTerm: [
    { phase: '1', focus: 'Marketplace', result: 'Validar produto–canal–margem' },
    { phase: '2', focus: 'Multimarketplace', result: 'Reduzir dependência e ampliar alcance' },
    { phase: '3', focus: 'Marca própria', result: 'Diferenciar oferta e proteger margem' },
    { phase: '4', focus: 'Loja própria', result: 'Construir base e relacionamento direto' },
    { phase: '5', focus: 'Ecossistema', result: 'Conteúdo, recorrência e novos canais' }
  ],
  reinvestment: { inventory: .70, marketing: .20, reserve: .10 },
  formulas: { roi: '(lucro líquido ÷ investimento inicial) × 100', roas: 'receita atribuída à mídia ÷ investimento em mídia', margin: 'lucro líquido ÷ receita', conversion: 'pedidos ÷ visitas', turnover: 'CMV ÷ estoque médio', payback: 'investimento inicial ÷ lucro por ciclo' }
};

businessData.allocation.forEach(item => { item.value = businessData.finance.initialInvestment * item.share; });
const marketingBudget = businessData.finance.initialInvestment * businessData.allocation.find(item => item.name === 'Marketing / publicidade').share;
businessData.marketing.forEach(item => { item.value = marketingBudget * item.share; });

window.businessData = businessData;
window.BusinessCalc = {
  money: value => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value) || 0),
  pct: value => new Intl.NumberFormat('pt-BR', { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(Number(value) || 0),
  number: value => new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(Number(value) || 0),
  product: product => {
    const fee = product.price * product.feeRate;
    const tax = product.price * product.taxRate;
    const profit = product.price - product.cost - fee - tax - product.shipping - product.packaging - product.marketing;
    return { ...product, fee, tax, profit, margin: profit / product.price, roi: profit / product.cost };
  },
  scenario: scenario => {
    const revenue = scenario.orders * scenario.ticket;
    const product = revenue * scenario.productRate;
    const fees = revenue * scenario.feeRate;
    const tax = revenue * scenario.taxRate;
    const logistics = revenue * scenario.logisticsRate;
    const profit = revenue - product - fees - tax - logistics - scenario.marketing - scenario.operating;
    const roi = profit / businessData.finance.initialInvestment;
    return { ...scenario, revenue, product, fees, tax, logistics, profit, margin: revenue ? profit / revenue : 0, roi, payback: profit > 0 ? businessData.finance.initialInvestment / profit : null, reinvested: Math.max(0, profit * scenario.reinvestRate), roas: scenario.marketing ? revenue / scenario.marketing : 0 };
  },
  nicheScore: niche => Math.round((niche.demand + niche.margin + niche.capital + niche.risk + niche.scale + (11 - niche.competition)) / 6 * 10) / 10,
  marketplaceScore: market => Math.round((market.demand + (11 - market.competition) + market.logistics + market.beginner + market.scale + market.marketing + market.fit) / 7 * 10) / 10,
  allocationTotal: () => businessData.allocation.reduce((sum, item) => sum + item.value, 0),
  marketingTotal: () => businessData.marketing.reduce((sum, item) => sum + item.value, 0),
  allocationScale: capital => businessData.allocation.map(item => ({ ...item, value: capital * item.share })),
  inventoryRows: capital => {
    const budget = capital * .5;
    return businessData.inventoryMix.map((item, index) => {
      const product = businessData.products.find(p => p.name === item.product);
      const stockValue = budget * item.share;
      const units = Math.max(1, Math.floor(stockValue / product.cost));
      const monthlyUnits = Math.min(units, item.monthlySales);
      const unit = BusinessCalc.product(product);
      return { ...item, stockValue, units, monthlyUnits, estimatedProfit: monthlyUnits * unit.profit, margin: unit.margin, index };
    });
  }
};
