import { LitElement, html, css } from "lit";

export class Suma extends LitElement {

    static properties = {
        numero1: { type: String },
        numero2: { type: String },
        numero3: { type: String }
    }
    tonumber(value) {
        const n = Number(value);
        return Number.isFinite(n) ? n : 0;
    }

    render() {
        const num1 = this.tonumber(this.numero1);
        const num2 = this.tonumber(this.numero2);
        const num3 = this.tonumber(this.numero3);
        const suma = num1 + num2 + num3;

        return html`
            <h1>La suma de ${this.numero1}, ${this.numero2} y ${this.numero3} es ${suma}</h1>
        `;
    }
}