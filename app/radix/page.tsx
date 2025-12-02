"use client";

import * as React from "react";
import SelectCustom from "@/components/ui/SelectCustom";

// ✅ Componente principal
const FormElements: React.FC = () => {
  return (
    <>
      {/* Forms */}
      <section className="bg-baseOscura p-6 rounded-lg shadow-lg w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-contraste1">
          Form Elements
        </h2>
        <div className="space-y-4 max-w-3xl">
         

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

        </div>
      </section>
    </>
  );
};

export default FormElements;
