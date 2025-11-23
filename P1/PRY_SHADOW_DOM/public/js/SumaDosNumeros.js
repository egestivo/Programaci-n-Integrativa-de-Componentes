class SumaDosNumeros extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
        <link rel=stylesheet href="/public/css/SumaDosNumeros.css">
        <div class="container">
            <label for="num1">Ingrese número 1</label>
            <input type="number" id="num1" value="0">
            <label for="num2">Ingrese número 2</label>
            <input type="number" id="num2" value="0">
            <button id="btnCalcular">CALCULAR</button>
            <h3 id="resultado">RESULTADO: </h3>
        </div>
        `;
        
        const num1Input = shadow.getElementById('num1');
        const num2Input = shadow.getElementById('num2');
        const resultadoHTML = shadow.getElementById('resultado');
        const btnCalcular = shadow.getElementById('btnCalcular');

    
        
        btnCalcular.addEventListener('click', () => {
            const operacion = this.getAttribute('operacion');
            
            const num1Value = parseFloat(num1Input.value) || 0;
            const num2Value = parseFloat(num2Input.value) || 0;
            let resultado = 0;

            switch (operacion) {
                case 'suma':
                    resultado = num1Value + num2Value;
                    break;
                case 'resta':
                    resultado = num1Value - num2Value;
                    break;
                case 'multiplicacion':
                    resultado = num1Value * num2Value;
                    break;
                case 'division':
                    resultado = (num2Value !== 0) ? num1Value / num2Value : 'Error: División por cero';
                    break;
                default:
                    resultado = 'Error: Operación no válida';
            }

            resultadoHTML.textContent = `RESULTADO: ${resultado}`;
        });
    }

    connectedCallback() {
        const operacion = this.getAttribute('operacion');
        console.log(operacion);
        
        let textoBoton = 'CALCULAR'; 
        
        switch (operacion) {
            case 'suma':
                textoBoton = 'SUMAR';
                break;
            case 'resta':
                textoBoton = 'RESTAR';
                break;
            case 'multiplicacion':
                textoBoton = 'MULTIPLICAR';
                break;
            case 'division':
                textoBoton = 'DIVIDIR';
                break;
            default:
                textoBoton = 'OPERAR';
                break;
        }
        this.shadowRoot.getElementById('btnCalcular').textContent = textoBoton;
    }
}

customElements.define('suma-dos-numeros', SumaDosNumeros);