import { LitElement, html, unsafeCSS } from "lit";
import bstpStyles from 'bootstrap/dist/css/bootstrap.min.css?inline';

export class Padre extends LitElement {
    static styles = [
        unsafeCSS(bstpStyles),
    ]

    static properties = {
        texto: { type: String },
    }


    constructor() {
        super();
        this.texto = 'Aún no tengo mensajes';
    }

    mostrarTexto(e) {
        this.texto = e.detail.mensaje;
    }

    render() {
        return html `
                <componente-hijo @mensaje-hijo=${this.mostrarTexto}></componente-hijo>
            <div class="row justify-content-center text-center mt-4">
                <h1 class="mt-4">Componente Padre</h1>
                <p class="fw-bold">Mensaje del hijo: ${this.texto}</p>
            </div>
        `;
    }
}