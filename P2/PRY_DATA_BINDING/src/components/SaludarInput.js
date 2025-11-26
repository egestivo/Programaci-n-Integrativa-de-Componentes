import { LitElement, html } from "lit";
// Import CSS inline so it is applied inside the component's shadow DOM (Vite + Lit)
import styles from './css/SaludarInput.css?inline';

export class SaludarInput extends LitElement {

    constructor() {
        super();
        this.nombre = "";
    }

    static properties = {
        nombre: { type: String }
    }
    
    actualizarNombre (e) {
        this.nombre = e.target.value;
    }

    render() {
        return html `
            <style>${styles}</style>
            <div class="saludar">
                <label class="label">Nombre</label>
                <input class="form-control" @input="${this.actualizarNombre}" placeholder="Escribe tu nombre"/>
                <p class="result">Tu nombre es: ${this.nombre}</p>
            </div>
        `;
    }
}