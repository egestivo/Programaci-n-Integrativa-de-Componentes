import { diaSemana, hora, diaHOra } from "./despedida.js";

export class DespedidaPorClase extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        diaHOra(this.getAttribute('diaSemana'), this.getAttribute('hora'));

        shadow.innerHTML = `
            <h1>Adios, nos vemos el día ${diaSemana} a las ${hora}</h1>
        `;
    }
}

customElements.define('despedida-clase', DespedidaPorClase);