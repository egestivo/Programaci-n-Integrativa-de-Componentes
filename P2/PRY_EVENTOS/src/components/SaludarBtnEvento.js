import { LitElement, html, css, unsafeCSS } from 'lit';
import bstpStyles from 'bootstrap/dist/css/bootstrap.min.css?inline';

export class SaludarBtnEvento extends LitElement {

    static styles = [
        unsafeCSS(bstpStyles),
    ];

    static properties = {
        mensaje: { type: String },
    }

    constructor() {
        super();
        this.mensaje = '';
    }

    // siempre crear antes del render la función a usar
    funcionSaludar() {
        this.mensaje = 'Sonic! Buenas noches :v';
    }

    render() {
        return html`
            <div class="row justify-content-center mt-5">
                <button @click=${this.funcionSaludar} class="p-3 font-monospace btn btn-dark text-light">
                    CLICK AQUÍ PARA MOSTRAR SALUDO
                </button>
                <h3 class="mt-3 font-monospace text-success text-danger text-center fw-bold">${this.mensaje}</h3>
            </div>
        `;
    }
}
