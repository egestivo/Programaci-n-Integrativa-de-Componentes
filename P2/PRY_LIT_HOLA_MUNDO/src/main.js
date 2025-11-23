import {HolaMundo} from './components/HolaMundo.js';
import {AdiosMundo} from './components/AdiosMundo.js';
import {Saludar} from './components/Saludo.js';
import {Suma} from './components/Suma.js';

customElements.define("hola-mundo", HolaMundo);
customElements.define("adios-mundo", AdiosMundo);
customElements.define("saludar-nombre", Saludar);
customElements.define("suma-numeros", Suma);