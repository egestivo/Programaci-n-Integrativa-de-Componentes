import { BtnOperacion } from "./components/BtnOperacion";
import { BtnNumero } from "./components/BtnNumero";
import { Calculadora } from "./components/Calculadora";

customElements.define('boton-operacion', BtnOperacion);
customElements.define('boton-numero', BtnNumero);
customElements.define('custom-calculadora', Calculadora);

console.log("Calculadora Lit y Bootstrap lista");