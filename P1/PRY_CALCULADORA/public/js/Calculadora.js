import { BotonOperacion } from "./BotonOperacion.js";
import { BotonNumero } from "./BotonNumero.js";

customElements.define('boton-operacion', BotonOperacion);
customElements.define('boton-numero', BotonNumero);

export class Calculadora extends HTMLElement {
    constructor(){
        super()
        const shadow = this.attachShadow({mode: 'open'});

        shadow.innerHTML = `
        <link rel="stylesheet" href="./public/vendor/bootstrap/css/bootstrap.min.css">
        <div class="card bg-dark">
            <div class="card-header">
                <input disabled type="text" class="txt-input form-control form-lg"
                autofocus placeholder="Ingrese Número" id="txt_numero">
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
                    <div class="col-sm-6">
                        <button data-value="calcular" class="btn btn-success w-100 h-100 my-2">=</button>
                    </div>
                    <div class="col-sm-3">
                    <boton-operacion operacion="division"></boton-operacion>
                    </div>
                </div>
                <div class="row mt-1">
                    <div class="col-sm-12">
                        <button data-value="limpiar" class="btn btn-danger w-100 h-100 my-3">LIMPIAR</button>
                    </div>
                </div>
            </div>
        </div>
        `;

        // tenemos el display de número
        const display = shadow.getElementById('txt_numero');
        
        // luego con queryall obtenemos todos los elementos: button
        //const buttons = shadow.querySelectorAll('button');
        const botonesNumero = shadow.querySelectorAll('boton-numero');
        const botonesOperacion = shadow.querySelectorAll('boton-operacion');
        
        // variable para la expresión como tal
        let expresion="";

        // buttons.forEach(btn => {
        //     // para cada btn del query que pasó
        //     // tenemos un evento para el botón al click
        //     btn.addEventListener('click',() => {

        //         // en una variable val obtenemos el valor por atributo

        //         const val = btn.getAttribute('data-value');

        //         /*
        //         * el primer if es para calcular con Function
        //         * es como el intérprete de terminal que suma una cadena (ej. "2+3/3")
        //         * el segundo if es para limpiar el campo de número
        //         * y el else final es para simplemente mostrar en el front los
        //         * números que se presionan
        //         */
        //         if(val === "calcular"){
        //             expresion = String(Function(`return ${expresion}`)());
        //         }else if(val === "limpiar"){
        //             expresion = "";
        //         }else{
        //             expresion += val;
        //         }

        //         // sea cual sea el resultado, lo mostramos en el display capturado
        //         // con anterioridad
        //         display.value = expresion;
        //     })
        // })

        botonesNumero.forEach(btnNum => {
            const btn = btnNum.shadowRoot.querySelector('button');
            btn.addEventListener('click', () => {
                const val = btn.getAttribute('data-value');
                if(val === "calcular"){
                    expresion = String(Function(`return ${expresion}`)());
                }else if(val === "limpiar"){
                    expresion = "";
                }else{
                    expresion += val;
                }
                display.value = expresion;
            });
        });

        botonesOperacion.forEach(btnOp => {
            const btn = btnOp.shadowRoot.querySelector('button');
            btn.addEventListener('click', () => {
                const val = btn.getAttribute('data-value');
                expresion += val;
                display.value = expresion;
            });
        });

        const botonesAccion = shadow.querySelectorAll('button');
        botonesAccion.forEach(btn => {
            btn.addEventListener('click', () => {
                const val = btn.getAttribute('data-value');
                if(val === "calcular"){
                    expresion = String(Function(`return ${expresion}`)());
                }else if(val === "limpiar"){
                    expresion = "";
                }
                display.value = expresion;
            });
        });
    }
}
