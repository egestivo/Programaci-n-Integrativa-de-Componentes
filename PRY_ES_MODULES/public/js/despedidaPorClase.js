export class DespedidaPorClase extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        
        shadow.innerHTML = `
            <h1>Adiós mundo cruel xd</h1>
        `;
    }
}

customElements.define('despedida-clase', DespedidaPorClase);