export class BotonOperacion extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
        <link rel="stylesheet" href="./public/vendor/bootstrap/css/bootstrap.min.css">  
        <div class="w-100">
            <button class="btn btn-light w-100 my-2"></button>
        </div>
        `;
    }

    connectedCallback() {
        const operacion = this.getAttribute('operacion');
        const button = this.shadowRoot.querySelector('button');
        
        let textoBoton = 'OPERAR';
        let valorBoton = '';
        
        switch (operacion) {
            case 'suma':
                textoBoton = '+';
                valorBoton = '+';
                break;
            case 'resta':
                textoBoton = '-';
                valorBoton = '-';
                break;
            case 'multiplicacion':
                textoBoton = '*';
                valorBoton = '*';
                break;
            case 'division':
                textoBoton = '/';
                valorBoton = '/';
                break;
        }
        
        button.textContent = textoBoton;
        button.setAttribute('data-value', valorBoton);
    }
}