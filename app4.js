const elements = [...document.querySelectorAll('.slide')];
      DeckNav.init(elements, slides.map(s => s.title), index => {
        [...document.querySelectorAll('#menuList button')].forEach((button, i) => button.classList.toggle('active', i === index));
        this.chart(index);
        if (index === 19 && !document.querySelector('#simulator').dataset.bound) {
          Simulator.bind(document.querySelector('#simulator'));
          document.querySelector('#simulator').dataset.bound = 'true';
        }
      });
      const hash = Number((location.hash.match(/tela-(\d+)/) || [])[1]);
      if (hash) DeckNav.show(hash - 1);
      document.querySelector('#closeModal').onclick = () => this.closeModal();
      document.querySelector('#modal').onclick = event => { if (event.target.id === 'modal') this.closeModal(); };
      document.addEventListener('click', event => {
        const decision = event.target.closest('[data-decision]')?.dataset.decision;
        if (decision === 'invest') this.openModal('Aprovado para validação', `<p>Aporte autorizado sob os gates definidos: margem líquida mínima de 10%, giro de até 60 dias e CAC inferior à contribuição unitária.</p><div class="callout">Próxima ação: validar fornecedor e tarifas oficiais antes do primeiro pedido.</div>`);
        if (decision === 'review') this.openModal('Revisar antes de aportar', `<p>Atualize custos, taxas, frete, tributação e expectativa de pedidos em <code>js/data.js</code>; depois use o simulador para recalcular o caso.</p>`);
      });
    }
  };
  window.App = App;
  document.addEventListener('DOMContentLoaded', () => App.init());
})();
