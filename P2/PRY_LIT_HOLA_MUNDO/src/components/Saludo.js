import { LitElement, html, css } from "lit";

export class Saludar extends LitElement {

    // si usamos atributos podemos usar esto
    static properties = {
        nombre: { type: String },
        edad: {type: Number}
    }

    render() {
        return html`
            <h2 id="nombre-text">Hola ${this.nombre}, tienes ${this.edad} años</h2>
        `;
    }
}