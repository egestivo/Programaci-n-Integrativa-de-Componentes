class Calculadora extends HTMLElement {
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
                        <button data-value="1" class="btn btn-warning w-100 my-2">1</button>
                    </div>
                    <div class="col-sm-3">
                        <button data-value="2" class="btn btn-warning w-100 my-2">2</button>
                    </div>
                    <div class="col-sm-3">
                        <button data-value="3" class="btn btn-warning w-100 my-2">3</button>
                    </div>
                    <div class="col-sm-3">
                        <button data-value="+" class="btn btn-light w-100 my-2">+</button>
                    </div>
                </div>
                <div class="row mt-1">
                    <div class="col-sm-3">
                        <button data-value="4" class="btn btn-warning w-100 my-2">4</button>
                    </div>
                    <div class="col-sm-3">
                        <button data-value="5" class="btn btn-warning w-100 my-2">5</button>
                    </div>
                    <div class="col-sm-3">
                        <button data-value="6" class="btn btn-warning w-100 my-2">6</button>
                    </div>
                    <div class="col-sm-3">
                        <button data-value="-" class="btn btn-light w-100 my-2">-</button>
                    </div>
                </div>
                <div class="row mt-1">
                    <div class="col-sm-3">
                        <button data-value="7" class="btn btn-warning w-100 my-2">7</button>
                    </div>
                    <div class="col-sm-3">
                        <button data-value="8" class="btn btn-warning w-100 my-2">8</button>
                    </div>
                    <div class="col-sm-3">
                        <button data-value="9" class="btn btn-warning w-100 my-2">9</button>
                    </div>
                    <div class="col-sm-3">
                        <button data-value="*" class="btn btn-light w-100 my-2">*</button>
                    </div>
                </div>
                <div class="row mt-1">
                    <div class="col-sm-3">
                        <button data-value="0" class="btn btn-info w-100 my-2">0</button>
                    </div>
                    <div class="col-sm-6">
                        <button data-value="calcular" class="btn btn-success w-100 my-2">=</button>
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
        const buttons = shadow.querySelectorAll('button');
        
        // variable para la expresión como tal
        let expresion="";

        buttons.forEach(btn => {
            // para cada btn del query que pasó
            // tenemos un evento para el botón al click
            btn.addEventListener('click',() => {

                // en una variable val obtenemos el valor por atributo

                const val = btn.getAttribute('data-value');

                /*
                * el primer if es para calcular con Function
                * es como el intérprete de terminal que suma una cadena (ej. "2+3/3")
                * el segundo if es para limpiar el campo de número
                * y el else final es para simplemente mostrar en el front los
                * números que se presionan
                */
                if(val === "calcular"){
                    expresion = String(Function(`return ${expresion}`)());
                }else if(val === "limpiar"){
                    expresion = "";
                }else{
                    expresion += val;
                }

                // sea cual sea el resultado, lo mostramos en el display capturado
                // con anterioridad
                display.value = expresion;
            })
        })
    }
}

customElements.define('calculadora-basica', Calculadora);
