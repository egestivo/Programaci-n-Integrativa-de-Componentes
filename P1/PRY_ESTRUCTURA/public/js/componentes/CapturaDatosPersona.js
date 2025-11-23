class CapturaDatosPersona extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <fieldset>
        <input type="text" id="txt_apellidos" placeholder="Ingrese sus apellidos">
        <input type="text" id="txt_nombres" placeholder="Ingrese sus nombres">
        <input type="number" id="txt_edad" placeholder="Ingrese su edad">
        <input type="text" id="txt_sexo" placeholder="Ingrese su sexo">
        <button type="button" id="btn_enviar">ENVIAR</button>
        <p id="txt_resultado">Hola soy Estivo, y tengo 21 añitos.</p>
        </fieldset>
        `;

        let nombres = this.querySelector('#txt_nombres');
        let apellidos = this.querySelector('#txt_apellidos');
        let edadInput = this.querySelector('#txt_edad');
        let btn_enviar = this.querySelector('#btn_enviar');
        let resultado = this.querySelector('#txt_resultado');
        let sexo = this.querySelector('#txt_sexo');
        
        btn_enviar.addEventListener('click', function(){
            let edadValor = parseInt(edadInput.value);
            let esMayor; 
            if (edadValor >= 18) {
                esMayor = "Mayor";
            } else if (edadValor > 0) { 
                esMayor = "Menor";
            } else {
                esMayor = "Edad no válida";
            }
            resultado.innerHTML = `Hola soy ${nombres.value} ${apellidos.value} y mi edad es ${edadValor} años <br> Por tanto soy ${esMayor} de edad`;
        });
    }
}

customElements.define('capturar-datos', CapturaDatosPersona);