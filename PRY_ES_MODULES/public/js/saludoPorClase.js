import { nombres, apellidos } from './saludo.js';

export class SaludoPorClase extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <h1>Hola ${nombres} ${apellidos} Buenas noches</h1>
        `;
        
        
    }
}

customElements.define('saludo-clase', SaludoPorClase);