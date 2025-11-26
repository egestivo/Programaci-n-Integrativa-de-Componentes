import {LitElement, html} from 'lit';

export class HolaMundo extends LitElement {

    nombre = "Estivosaurio Rex";
    gusto = "dibujar un chingo";

    nombreGusto = this.nombre + " y me gusta " + this.gusto;

    render () {
        return html`
            <h1> Hola, les saluda ${this.nombreGusto} </h1>
        `;
    }
}