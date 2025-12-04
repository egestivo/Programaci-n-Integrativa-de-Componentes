import { UserInterface } from "./components/UserInterface.js";
import { UserInterfaceAtributos } from "./components/UserInterfaceAtributos.js";
import { ActualizarColor } from "./components/ActualizarColor.js";

customElements.define("user-interface", UserInterface);
customElements.define("ui-atributos", UserInterfaceAtributos);
customElements.define("actualizar-color", ActualizarColor);