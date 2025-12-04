import { LitElement, html, css } from "lit";

export class UserInterfaceAtributos extends LitElement {
    static properties = {
        nombre: {type: String},
        color: {type: String},
        fondo: {type: String}
    }

    constructor() {
        super();
        this.nombre = "SlenderMan";
        this.color = "black";
        this.fondo = "white";
    }

    static styles = css `
        button {
            background-color: var(--btn-fondo, #ffffff);
            color : var(--btn-color, #000000);
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
        }
    `

    render() {
            return html `
                <button style="--btn-color: ${this.color}; --btn-fondo:${this.fondo};">${this.nombre}</button>
        `

    }
}