"use client";

import SelectCustom from "@/components/ui/SelectCustom"; // ⬅️ trae el select full customizado

export default function TailwindTestPage() {
  return (
    <div className="min-h-screen bg-baseClara">
      {/* Header */}
      <header className="bg-baseMedia rounded-lg text-contraste1 p-6">
        <h1 className="text-4xl font-bold text-center">
          Tailwind CSS Test Page
        </h1>
        <p className="text-center mt-2 text-contraste3">
          Testing all Tailwind features and custom colors
        </p>
      </header>

      {/* Esta página tenía conflictos entre utilidades bg y text definidas en globals.css, 
      lo que generaba inconsistencias al reemplazarlas por clases de Tailwind. 
      Se migraron las clases personalizadas a camelCase para mantener coherencia, ya que 
      aunque Tailwind permite claves con guiones entre comillas en tailwind.config, esas claves 
      no son interpretadas correctamente en tiempo de ejecución y las clases resultantes 
      no se renderizan en el cliente. */}

      <div className="container mx-auto p-6 space-y-8">
        {/* Custom Color Palette */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-contraste1">
            Paleta de Colores
          </h2>

          {/* Bases */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2 text-contraste2">
              Bases (Fondos)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-baseOscura p-4 rounded text-contraste1 text-center">
                <div className="font-semibold">Base Oscura</div>
                <div className="text-sm">#ECE2D4</div>
              </div>
              <div className="bg-baseMedia p-4 rounded text-contraste1 text-center">
                <div className="font-semibold">Base Media</div>
                <div className="text-sm">#F8F1E7</div>
              </div>
              <div className="bg-baseClara p-4 rounded text-contraste1 text-center shadow-lg">
                <div className="font-semibold">Base Clara</div>
                <div className="text-sm">#FCF8F3</div>
              </div>
            </div>
          </div>

          {/* Acentos */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2 text-contraste2">
              Acentos
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div className="bg-acento1 p-4 rounded text-contraste1 text-center">
                <div className="font-semibold">Acento 1</div>
                <div className="text-sm">#E69F45</div>
              </div>
              <div className="bg-acento2 p-4 rounded text-baseOscura text-center">
                <div className="font-semibold">Acento 2</div>
                <div className="text-sm">#F35530</div>
              </div>
            </div>
          </div>

          {/* Contrastes */}
          <div>
            <h3 className="text-lg font-medium mb-2 text-contraste2">
              Textos (Contraste)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded bg-baseMedia text-contraste1 text-center border border-contraste2">
                <div className="font-semibold">Contraste 1</div>
                <div className="text-sm">#222222</div>
              </div>

              <div className="p-4 rounded bg-baseMedia text-contraste2 text-center border border-contraste2">
                <div className="font-semibold">Contraste 2</div>
                <div className="text-sm">#3B3B3B</div>
              </div>

              <div className="p-4 rounded bg-baseMedia text-contraste3 text-center border border-contraste2">
                <div className="font-semibold">Contraste 3</div>
                <div className="text-sm">#515151</div>
              </div>

              <div className="p-4 rounded bg-baseMedia text-contraste4 text-center border border-contraste2">
                <div className="font-semibold">Contraste 4</div>
                <div className="text-sm">#626262</div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="bg-baseClara p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-contraste1">
            Typography
          </h2>

          <div className="space-y-4">
            {/* Headings principales: contraste1 */}
            <h1 className="text-5xl font-bold text-contraste1">Heading 1</h1>
            <h2 className="text-4xl font-semibold text-contraste1">
              Heading 2
            </h2>
            <h3 className="text-3xl font-medium text-contraste2">Heading 3</h3>

            {/* Body */}
            <p className="text-lg text-contraste3 leading-relaxed">
              This is a paragraph with regular text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>

            {/* Caption */}
            <p className="text-sm text-contraste4 italic">
              This is smaller italic text for captions or secondary information.
            </p>

            {/* Acento como énfasis opcional */}
            <p className="text-lg">
              You can also{" "}
              <span className="text-acento2 font-semibold">highlight text</span>{" "}
              inside body content.
            </p>
          </div>
        </section>

        {/* Buttons SEGUIR CON ESTA SECCIÓN REVISAR ACCIONES HOOVER DE BOTONES MAS TEXTO EN HOVER  */}
        <section className="bg-baseMedia p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-contraste1">
            Buttons
          </h2>
          <div className="flex flex-wrap gap-4">
            {/**
             * Usamos colores mediante CSS Custom Properties (variables) en lugar de las clases
             * generadas por Tailwind (ej: bg-acento1), porque la UI utiliza un sistema de tema
             * dinámico definido en :root con --color-*.
             *
             * Tailwind interpreta la sintaxis "bg-(--variable)" como un valor arbitrario basado en
             * variables CSS. Esto permite que el color pueda cambiar en runtime sin necesidad de
             * recompilar Tailwind.
             *
             * Formato sintáctico:
             *   bg-(--nombre-variable)           → background-color: var(--nombre-variable)
             *   hover:bg-(--nombre-variable)     → background-color: var(--nombre-variable) en hover
             *   hover:text-(--nombre-variable)   → color: var(--nombre-variable) en hover
             *
             * Ventajas:
             * - Permite theming dinámico (ej: modo oscuro, branding dinámico)
             * - Mantiene compatibilidad con utilidades de Tailwind (hover, transition, scale, etc.)
             * - Evita sobrescribir clases Tailwind en CSS global
             *
             * Nota: ESLint/Prettier convierte automáticamente la sintaxis recomendada
             *       bg-[var(--color-acento-1)] → bg-(--color-acento-1)
             *       (misma funcionalidad, distinto parsing)
             */}

            {/*   // ! IMPORTANTE: Problema con Radix UI y las variantes de Tailwind
                  //
                  // Al importar el componente <SelectCustom> basado en Radix UI, los botones dejaron
                  // de reaccionar a hover/scale/transition. Esto se debe a que Radix inyecta estilos
                  // por defecto (desde @radix-ui/themes y primitives) que aplican:
                  //
                  //   * `button { all: unset; }`
                  //   * Normalización agresiva sobre :focus, :hover y propiedades interactivas
                  //   * Resets globales que tienen mayor especificidad que las utilidades de Tailwind
                  //
                  // Estos resets afectan a **TODOS los botones de la página**, incluso los que NO
                  // pertenecen al Select, dejando sin efecto:
                  //
                  //   - hover:bg-*
                  //   - hover:scale-*
                  //   - transition-*
                  //   - focus:ring-*
                  //
                  // 💡 SOLUCIÓN:
                  // Se deshabilitó temporalmente la importación:
                  //
                  //     ? import SelectCustom from "@/components/ui/SelectCustom";
                  //
                  // Con esto, desaparecen los resets globales de Radix y los botones vuelven a
                  // funcionar con su sintaxis tailwind normal.
                  //
                  // ✔️ Confirmado: el problema no era el JSX ni la sintaxis de clases, sino los
                  //    estilos globales que Radix inyecta al cargar el componente.
                  //``` */}

            <button className="bg-(--color-acento-1) hover:bg-(--color-acento-2) hover:text-(--color-base-oscura) px-6 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:scale-105">
              Primary Button
            </button>
            <button className=" bg-(--color-acento-2) hover:bg-(--color-acento-1) hover:text-(--color-contraste-1) px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Secondary Button
            </button>
            <button
              onClick={() => console.log("Outline button pressed")}
              className="bg-transparent border-2 border-(--color-contraste-1) text-(--color-contraste-4) hover:bg-(--color-acento-1) hover:text-(--color-contraste-1) px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Outline Button
            </button>

            <button
              onClick={() => console.log("Dark button pressed")}
              className="bg-(--color-base-clara) hover:bg-(--color-base-oscura) text-(--color-contraste-2) hover:text-(--color-contraste-1) px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Dark Button
            </button>
          </div>
        </section>

        {/* ===================================== Cards ============================================================================= */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-contraste1">Cards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-baseClara border border-baseOscura rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-acento1 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-contraste1 mb-2">
                Card Title 1
              </h3>
              <p className="text-contraste3">
                This is a sample card with custom styling using your color
                palette.
              </p>
            </div>
            <div className="bg-baseClara border border-baseOscura rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-acento2 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-contraste1 mb-2">
                Card Title 2
              </h3>
              <p className="text-contraste3">
                Another card demonstrating consistent design patterns.
              </p>
            </div>

            {/*
            // Se usa border-(--color-contraste-4) para aplicar el color desde la variable CSS, 
            // ya que Tailwind no resuelve colores personalizados en bordes sin esta sintaxis.
            */}

            <div className="bg-baseClara border-4 border-(--color-contraste-4) rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-baseOscura rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-contraste1 mb-2">
                Card Title 3
              </h3>
              <p className="text-contraste3">
                Third card showing the flexibility of the design system.
              </p>
            </div>
          </div>
        </section>

        {/* Layout & Spacing */}
        <section className="bg-baseOscura p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-contraste1">
            Layout & Spacing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Crea un layout responsivo con CSS Grid: 1 columna en móvil, 2 en pantallas medianas y 
            4 en grandes, con espacio uniforme entre elementos. */}

            <div className="bg-acento1 p-4 rounded text-(--color-base-clara) text-center font-semibold shadow-xl">
              Grid Item 1
            </div>
            <div className="bg-acento2 p-4 rounded text-(--color-base-clara) text-center font-semibold">
              Grid Item 2
            </div>
            <div className="bg-(--color-contraste-1) p-4 rounded text-(--color-base-clara) text-center font-semibold">
              Grid Item 3
            </div>
            <div className="bg-(--color-contraste-4) p-4 rounded text-(--color-base-oscura) text-center font-semibold">
              Grid Item 4
            </div>
          </div>
        </section>

        {/* Forms */}
        <section className="bg-baseOscura p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-contraste1">
            Form Elements
          </h2>
          <div className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-medium text-contraste2 mb-2">
                Text Input
              </label>
              <input
                type="text"
                placeholder="Enter text here"
                className="w-full px-4 py-2 border border-baseOscura rounded-lg focus:ring-2 focus:ring-acento1 focus:border-transparent outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-contraste2 mb-2">
                Select Dropdown
              </label>
              <select
                className="w-full px-4 py-2 border border-(--color-acento-2) rounded-lg focus:ring-2 focus:ring-(--color-acento-1) focus:border-(--color-contraste-4) 
              outline-solid outline-(--color-base-clara) focus:outline-2 focus:outline-(--color-acento-1) outline-offset-2 transition-all duration-200"
              >
                <option className="bg-baseOscura p-6 rounded-lg shadow-lg hover:bg-(--color-acento-2)">
                  Option 1
                </option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            {/* css de las opciones ******    INCORPORAR RADIX ACA   ************************************************************/}

            {/* Select con Radix (personalizado) */}
            <div>
              <label className="block text-sm font-medium text-contraste2 mb-2">
                Select Radix (con estilos Aye)
              </label>
              <SelectCustom
                options={[
                  { value: "opcion1", label: "Opción 1" },
                  { value: "opcion2", label: "Opción 2" },
                  { value: "opcion3", label: "Opción 3" },
                ]}
                placeholder="Elegí una opción"
                onValueChange={(v: string) => console.log("Seleccionaste:", v)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-contraste2 mb-2">
                Textarea
              </label>
              <textarea
                placeholder="Enter your message"
                rows={4}
                className="w-full px-4 py-2 border border-baseOscura rounded-lg focus:ring-2 focus:ring-acento1 focus:border-transparent outline-none transition-all duration-200 resize-none"
              ></textarea>
            </div>
          </div>
        </section>

        {/* Responsive Design Test */}
        <section className="bg-baseMedia p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-contraste1">
            Responsive Design
          </h2>
          <div className="bg-acento1 text-baseClara p-6 rounded-lg text-center">
            <p className="block sm:hidden text-lg font-semibold">
              📱 Mobile View (&lt; 640px)
            </p>
            <p className="hidden sm:block md:hidden text-lg font-semibold">
              📱 Small Tablet (640px - 768px)
            </p>
            <p className="hidden md:block lg:hidden text-lg font-semibold">
              💻 Tablet (768px - 1024px)
            </p>
            <p className="hidden lg:block xl:hidden text-lg font-semibold">
              🖥️ Desktop (1024px - 1280px)
            </p>
            <p className="hidden xl:block text-lg font-semibold">
              🖥️ Large Desktop (&gt; 1280px)
            </p>
          </div>
        </section>

        {/* Animations & Transitions */}
        <section className="bg-white/90 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-contraste1">
            Animations & Transitions
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="bg-acento1 text-baseClara p-4 rounded-lg hover:rotate-3 transition-transform duration-300 cursor-pointer">
              Hover to Rotate
            </div>
            <div className="bg-acento2 text-baseClara p-4 rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
              Hover to Scale
            </div>
            <div className="bg-contraste2 text-baseClara p-4 rounded-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              Hover for Shadow
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-contraste1 text-baseClara p-6 mt-8">
        <div className="text-center">
          <p className="text-lg font-semibold">Tailwind CSS Integration Test</p>
          <p className="text-baseOscura mt-2">
            All styles are working correctly! ✅
          </p>
        </div>
      </footer>
    </div>
  );
}
