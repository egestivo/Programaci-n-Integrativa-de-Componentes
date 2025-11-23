import {LitElement, html, css} from 'lit';
import bootstrapCss from 'bootstrap5/src/css/bootstrap.min.css?inline';

export class BtnNumero extends LitElement {

    static properties = {
        numero: {type: Number},
    }

    // funcioń para validar que sea número o devuelve 0
    isNumber(value) {
        const n = Number (value);
        return Number.isFinite(n) ? n : 0;
    }

    render() {
        const numero = this.isNumber(this.numero);

            return html `
            <style>${bootstrapCss}</style>
            <button class="btn btn-success text-light w-100 btn-lg my-1 font-monospace" data-value="${numero}"><strong>${numero}</strong</button>
            `;
    }
}