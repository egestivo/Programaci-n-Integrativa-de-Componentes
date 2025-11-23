import {LitElement, html, css} from 'lit';
import bootstrapCss from 'bootstrap5/src/css/bootstrap.min.css?inline';

export class BtnOperacion extends LitElement {

    static properties = {
        operacion: {type: String},
    }

    render() {
        // un switch para el simbolo
        const operacion = this.operacion;
        let signo;
        switch (operacion) {
            case 'suma':
                signo = '+';
                break;
            case 'resta':
                signo = '-';
                break;
            case 'multiplicacion':
                signo = '*';
                break;
            case 'division':
                signo = '/';
                break;
            case 'decimal':
                signo = '.';
                break;
            case 'calcular':
                signo = '=';
                break;
            case 'limpiar':
                signo = 'AC';
                break;
            default:
                signo = 'NaN';
        }

        return html `
        <style>${bootstrapCss}</style>
        <button class="btn btn-warning text-light w-100 btn-lg my-1 font-monospace" data-value="${signo}"><strong>${signo}</strong></button>
        `;
    }
}