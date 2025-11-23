# Calculadora (Lit + Bootstrap) - Estiven Oña

# Descripción breve
-----------------
Calculadora funcional con Web Components usando Lit.
Permite introducir números y operaciones básicas (+ - * /), usar punto decimal y evaluar la expresión con `=`. El display muestra la expresión actual y el resultado.

# Qué contiene
------------
- `src/components/Calculadora.js`: componente contenedor que renderiza la UI y enlaza los botones.
- `src/components/BtnNumero.js`: componente para botones numéricos (expone `data-value`).
- `src/components/BtnOperacion.js`: componente para botones de operación (incluye el punto decimal y expone `data-value`).
- `src/main.js`: registra los custom elements y arranca la calculadora poniendo en práctica ES Modules

# Herramientas Usadas
-----------------------------------
- Lit (Web Components): para encapsular cada botón y la calculadora en su propio Shadow DOM.
- Bootstrap 5: usado para estilos — se importa inline dentro de cada shadow root para que las reglas se apliquen correctamente a los componentes.
- Vite: gestor de desarrollo (usa `npm run dev`).

# ¿Por qué el 'await' en Calculadora.js?
---------------------------------------------
Los componentes de botón son también LitElements con Shadow DOM propio. En el componente padre (`Calculadora`) necesitamos acceder al `shadowRoot` de cada hijo para leer el `button` interno y añadir listeners.
Si lo hacemos demasiado pronto (por ejemplo en `connectedCallback`) el `shadowRoot` del hijo puede no existir aún y la consulta falla. Por eso en `firstUpdated()` usamos bucles `for..of` y, cuando un hijo expone `updateComplete`, hacemos `await child.updateComplete` antes de acceder a `child.shadowRoot`.
Esto garantiza que cada hijo haya terminado su primer render y evita errores de tiempo (y los famosos "botones que no responden"). En pocas es para que todo se realice de manera
sincrónica.

# Cómo probar
-----------
1. Las dependencias ya se incluyen al no ser muy pesadas
2. Levanta servidor de desarrollo dentro de la ruta del proyecto:

```bash
npm run dev
```

# Notas rápidas
------------
- Si en algún momento el display muestra `Error`, pulsar cualquier número reemplaza el `Error` por el nuevo valor.
- El punto decimal está manejado por el botón correspondiente y los botones exponen `data-value` para poder capturar los valores
y usarlos correctamente.
