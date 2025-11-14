"use client";

import * as React from "react";
import SelectCustom from "@/components/ui/SelectCustom";

// ✅ Componente principal
const FormElements: React.FC = () => {
  return (
    <>
      {/* Forms */}
      <section className="bg-baseOscura p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-contraste1">
          Form Elements
        </h2>

        <div className="space-y-4 max-w-md">
          {/* Input */}
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

          {/* Select contrastado */}
          <div>
            <label className="block text-sm font-medium text-contraste2 mb-2">
              Select contrastado
            </label>
            <select className="w-full px-4 py-2 border-2 border-(--color-acento-2) rounded-lg bg-(--color-contraste-2) text-(--color-base-oscura) transition-all duration-200">
              <option>Opción 1</option>
              <option>Opción 2</option>
              <option>Opción 3</option>
            </select>
          </div>

          {/* Select con paleta principal */}
          <div>
            <label className="block text-sm font-medium text-contraste2 mb-2">
              Select con paleta MAREVOX
            </label>
            <select className="w-full px-4 py-2 border border-(--color-acento-1) rounded-lg bg-baseMedia text-contraste1 focus:ring-2 focus:ring-(--color-acento-2) focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md">
              <option className="bg-baseOscura text-baseClara hover:bg-(--color-acento-1)">
                Opción 1
              </option>
              <option>Opción 2</option>
              <option>Opción 3</option>
            </select>
          </div>

          {/* Select minimalista */}
          <div>
            <label className="block text-sm font-medium text-contraste2 mb-2">
              Select minimalista
            </label>
            <select className="w-full px-3 py-2 border border-(--color-contraste-4) rounded-md bg-transparent text-contraste3 focus:border-(--color-acento-1) focus:ring-0 transition-colors duration-200">
              <option>Opción 1</option>
              <option>Opción 2</option>
              <option>Opción 3</option>
            </select>
          </div>

          {/* Textarea */}
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
    </>
  );
};

export default FormElements;
