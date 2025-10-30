// 1. crear una clase

class SaludarPersona extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    // Método connectedCallback
    connectedCallback() {

        // Obtener atributos
        let nombres = this.getAttribute("nombres") || "NO names";
        let apellidos = this.getAttribute("apellidos") || "NO surnames";
        let edad = parseInt(this.getAttribute("edad")) || 0;
        let sexo = this.getAttribute("sexo") || "NO gender specified";

        // Usar comparador ternario para determinar mayor o menor de edad
        let esMayor = edad >= 18 ? "SI" : "NO";

        this.shadowRoot.innerHTML = `
            <tr>
                <td>${nombres}</td>
                <td>${apellidos}</td>
                <td>${edad}</td>
                <td>${sexo}</td>
                <td>${esMayor}</td>
            </tr>
            `;
    }
}
// 8888888
// 2. Definir el objeto
customElements.define("saludar-persona", SaludarPersona);
