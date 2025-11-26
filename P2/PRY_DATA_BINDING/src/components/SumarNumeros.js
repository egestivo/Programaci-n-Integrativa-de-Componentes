import { LitElement, html } from "lit";
import styles from './css/SumarNumeros.css?inline';

export class SumarNumeros extends LitElement {
    constructor() {
        super();
        this.numero1 = 0;
        this.numero2 = 0;
        this.resultado = 0;
    }

    static properties = {
        numero1: { type: Number },
        numero2: { type: Number },
        resultado: { type: Number }
    }

    actualizarNumeros (e) {
        const id = e.target.id;
        const valor = Number(e.target.value);
        // validamos que sea un número 
        if (!isNaN(valor)) {
            if (id === 'num1') {
                this.numero1 = valor;
            } else if (id === 'num2') {
                this.numero2 = valor;
            }
        }else {
            //si no es un numero, por defecto se asigna 0
            if (id === 'num1') {
                this.numero1 = 0;
            }
            else if (id === 'num2') {
                this.numero2 = 0;
            }
        }
        this.resultado = this.numero1 + this.numero2;
    }

    render() {
        return html `
            <style>${styles}</style>
            <div class="sumar-numeros">
                <label class="label">Número 1:</label>
                <input class="form-control" id="num1" type="number" @input="${this.actualizarNumeros}" placeholder="Num 1"/>
                <label class="label">Número 2:</label>
                <input class="form-control" id="num2" type="number" @input="${this.actualizarNumeros}" placeholder="Num 2"/>
                <p class="result">Resultado: ${this.resultado}</p>
            </div>
        `;
    }
}