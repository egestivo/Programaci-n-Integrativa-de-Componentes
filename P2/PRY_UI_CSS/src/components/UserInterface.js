import { LitElement, html, css } from "lit";

export class UserInterface extends LitElement {

    static styles = css `
        button {
            background-color: var(--color-fondo, #6200ea);
            color: var(--color-texto, #b32f8bff);
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
        }
    `

    render() {
        return html `
            <button>Botón Troll</button>
        `
    }
}