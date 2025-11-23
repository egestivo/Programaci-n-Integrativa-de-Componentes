import {LitElement, html, css} from 'lit';
import bootstrapCss from 'bootstrap5/src/css/bootstrap.min.css?inline';

export class Calculadora extends LitElement {

    constructor() {
        super();
        this.expresion = "";
    }

    async firstUpdated() {
        const display = this.renderRoot.getElementById('txt_numero');
        const botonesNumero = this.renderRoot.querySelectorAll('boton-numero');
        const botonesOperacion = this.renderRoot.querySelectorAll('boton-operacion');

        // iteramos por cada número para ver cuál se presiona
        for (const btnNum of botonesNumero) {
            // esperar por el hijo para que termine de renderizar si es un LitElement
            if (btnNum.updateComplete) await btnNum.updateComplete;
            // en este caso, obtener el botón dentro del shadow DOM
            const btn = btnNum.shadowRoot && btnNum.shadowRoot.querySelector('button');
            // si el btn no existe, continuar con el siguiente
            if (!btn) continue;
            btn.addEventListener('click', () => {
                const val = btn.getAttribute('data-value');
                // Si antes había un error, reemplazarlo al pulsar cualquier número
                if (this.expresion === 'Error') {
                    this.expresion = String(val);
                } else {
                    this.expresion += String(val);
                }
                if (display) {
                    display.value = this.expresion;
                    // esto no lo pusimos antes, pero si lo queremos usar en
                    // otra cosa, funcionaría bien para obtener el value
                    display.setAttribute('value', this.expresion);
                }
            });
        }

        // iteramos por cada operación para ver cuál se presiona
        for (const btnOp of botonesOperacion) {
            if (btnOp.updateComplete) await btnOp.updateComplete;
            const btn = btnOp.shadowRoot && btnOp.shadowRoot.querySelector('button');
            if (!btn) continue;
            btn.addEventListener('click', () => {
                const val = btn.getAttribute('data-value');
                if (val === '=') {
                    try {
                        this.expresion = String(Function(`return ${this.expresion}`)());
                    } catch (e) {
                        this.expresion = 'Error';
                    }
                } else if (val === 'AC') {
                    this.expresion = '';
                } else {
                    this.expresion += String(val);
                }
                if (display) {
                    display.value = this.expresion;
                    display.setAttribute('value', this.expresion);
                }
            });
        }
    }

    render() {
        return html `
        <style>${bootstrapCss}</style>
        <div class="d-flex justify-content-center mt-3">
            <div class="card bg-dark shadow p-3 mb-5 rounded" style="max-width:480px; width:100%;">
                <div class="card-header mt-2">
                    <input disabled type="text" class="form-control form-control-lg text-end"
                    autofocus id="txt_numero">
                </div>
            <div class="card-body">
                <div class="row my-1">
                    <div class="col-sm-3">
                        <boton-numero numero="1"></boton-numero>
                    </div>
                    <div class="col-sm-3">
                        <boton-numero numero="2"></boton-numero>
                    </div>
                    <div class="col-sm-3">
                        <boton-numero numero="3"></boton-numero>
                    </div>
                    <div class="col-sm-3">
                        <boton-operacion operacion="suma"></boton-operacion>
                    </div>
                </div>
                <div class="row mt-1">
                    <div class="col-sm-3">
                        <boton-numero numero="4"></boton-numero>
                    </div>
                    <div class="col-sm-3">
                        <boton-numero numero="5"></boton-numero>
                    </div>
                    <div class="col-sm-3">
                        <boton-numero numero="6"></boton-numero>
                    </div>
                    <div class="col-sm-3">
                        <boton-operacion operacion="resta"></boton-operacion>
                    </div>
                </div>
                <div class="row mt-1">
                    <div class="col-sm-3">
                        <boton-numero numero="7"></boton-numero>
                    </div>
                    <div class="col-sm-3">
                        <boton-numero numero="8"></boton-numero>
                    </div>
                    <div class="col-sm-3">
                        <boton-numero numero="9"></boton-numero>
                    </div>
                    <div class="col-sm-3">
                        <boton-operacion operacion="multiplicacion"></boton-operacion>
                    </div>
                </div>
                <div class="row mt-1">
                    <div class="col-sm-3">
                        <boton-numero numero="0"></boton-numero>
                    </div>
                    <div class="col-sm-3">
                        <boton-operacion operacion="decimal"></boton-operacion>
                    </div>
                    <div class="col-sm-3">
                        <boton-operacion operacion="calcular"></boton-operacion>
                    </div>
                    <div class="col-sm-3">
                        <boton-operacion operacion="division"></boton-operacion>
                    </div>
                </div>
                <div class="row mt-1">
                    <div class="col-sm-12">
                        <boton-operacion operacion="limpiar"></boton-operacion>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;

    }

}
