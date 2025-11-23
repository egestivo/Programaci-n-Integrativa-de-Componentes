export class BotonNumero extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
        <link rel="stylesheet" href="./public/vendor/bootstrap/css/bootstrap.min.css">  
        <div class="w-100">
            <button class="btn btn-warning w-100 my-2"></button>
        </div>
        `;
    }

    connectedCallback() {
        const numero = this.getAttribute('numero');
        const button = this.shadowRoot.querySelector('button');
        button.textContent = numero;
        button.setAttribute('data-value', numero);
    }
}
