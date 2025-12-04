import { LitElement, html, css } from "lit";

export class ActualizarColor extends LitElement {
    static properties = {
        colorTexto: {type: String},
        colorFondo: {type: String}
    }

    constructor() {
        super();
        this.colorFondo = "#7a0000ff";
    }

    actualizarColor(event) {
        const color = event.target.value;
        this.colorFondo = color;
    }

    render () {
        return html `
            <input type=text placeholder="Digita aquí tu color" @input=${this.actualizarColor}>
            <div style="color: ${this.colorTexto}; background-color: ${this.colorFondo}; padding: 10px; margin-top: 10px; width: 100px; height: 50px;">
        `
    }
}