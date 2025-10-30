class BotonOperacion extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
        <link rel="stylesheet" href="./public/vendor/bootstrap/css/bootstrap.min.css">  
        <div class="w-100">
            <button id="btnCalcular" class="btn btn-light w-100 my-2">CALCULAR</button>
        </div>
        `;
        
        const disp = shadow.getElementById('txt_numero');
        const btnCalcular = shadow.getElementById('btnCalcular');

    
        
        btnCalcular.addEventListener('click', () => {
            disp.textContent += btnCalcular.getAttribute('data-value');
        });
    }

    connectedCallback() {
        const operacion = this.getAttribute('operacion');
        console.log(operacion);
        
        let textoBoton = 'CALCULAR'; 
        
        switch (operacion) {
            case 'suma':
                textoBoton = '+';
                break;
            case 'resta':
                textoBoton = '-';
                break;
            case 'multiplicacion':
                textoBoton = '*';
                break;
            case 'division':
                textoBoton = '/';
                break;
            default:
                textoBoton = 'OPERAR';
                break;
        }
        this.shadowRoot.getElementById('btnCalcular').textContent = textoBoton;
    }
}

customElements.define('boton-operacion', BotonOperacion);