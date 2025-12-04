import { LitElement, html, unsafeCSS } from "lit";
import bstpStyles from 'bootstrap/dist/css/bootstrap.min.css?inline';

export class Hijo extends LitElement {
    static styles = [
        unsafeCSS(bstpStyles),
    ]

    // creamos el método
    enviarMensaje(e) {
        this.dispatchEvent(new CustomEvent('mensaje-hijo', {
            detail: { mensaje: e.target.value },
            bubbles: true,
            composed: true,
        }));
    }

    render() {
        return html `
            <div class="row justify-content-center mt-4">
                <input @input=${this.enviarMensaje} 
                class="form-control" 
                type="text" 
                placeholder="Escribe un mensaje">
            </div>
        `
    }
}
