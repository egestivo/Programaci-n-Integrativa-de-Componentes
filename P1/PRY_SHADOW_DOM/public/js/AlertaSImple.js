class AlertaSimple extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
        <link rel="stylesheet" href="/public/css/AlertaSimple.css">
            <div class="alerta-simple">
                <h1>ALERTA SIMPLE - COMPONENTE WEB CON SHADOW DOM</h1>
                <p>Este es un componente Shadow DOM</p>
            </div>
        `;
    }
}

customElements.define('alerta-simple', AlertaSimple);