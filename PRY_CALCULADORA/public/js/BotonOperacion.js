class BotonOperacion extends HTMLElement {
    connectedCallback() {
        const operacion = this.getAttribute('operacion');
        
        let textoBoton = 'CALCULAR'; 
        let signoValue = '';
        
        switch (operacion) {
            case 'suma':
                textoBoton = '+';
                signoValue = '+';
                break;
            case 'resta':
                textoBoton = '-';
                signoValue = '-';
                break;
            case 'multiplicacion':
                textoBoton = '*';
                signoValue = '*';
                break;
            case 'division':
                textoBoton = '/';
                signoValue = '/';
                break;
            default:
                textoBoton = 'OPERAR';
                signoValue = '';
                break;
        }
        
        this.innerHTML = `
        <button data-value="${signoValue}" class="btn btn-light w-100 my-2">${textoBoton}</button>
        `;
    }
}

customElements.define('boton-operacion', BotonOperacion);