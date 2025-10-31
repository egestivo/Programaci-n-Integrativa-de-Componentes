import { diaSemana, hora } from "./despedida.js";

export class DespedidaPorClase extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        
        shadow.innerHTML = `
            <h1>Adios, nos vemos el día ${diaSemana} a las ${hora}</h1>
        `;
    }
}

customElements.define('despedida-clase', DespedidaPorClase);