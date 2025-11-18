
# Guía Oficial de Estilos — Tailwind + CSS Variables

Este documento define **toda la sintaxis oficial** utilizada en el proyecto, basada en el archivo de prueba `tailwind.tsx` y normalizada para que el sistema UI sea consistente, escalable y fácil de mantener.

Las reglas aquí establecidas reemplazan cualquier otra forma alternativa de escribir estilos.

---

## 1. Sistema de colores (oficial)

Se utiliza **exclusivamente** sintaxis con **variables CSS arbitrarias** y la forma corta con paréntesis.

### ✔ Sintaxis correcta

```
bg-(--color-acento-1)
text-(--color-contraste-3)
border-(--color-base-oscura)
hover:bg-(--color-acento-2)
```

### ❌ Sintaxis prohibidas

```
bg-acento1
text-baseClara
bg-[var(--color-acento-1)]
bg-[--color-acento-1]
```

### Notas importantes

- No se utiliza `var()` en ningún caso.
- No se usan colores extendidos en `tailwind.config`.
- Todas las clases deben apuntar directamente a variables CSS reales.

---

## 2. Espaciado (spacing)

Se utiliza únicamente spacing nativo de Tailwind.

### ✔ Sintaxis correcta

```
p-6
px-4
gap-8
mt-10
```

### ❌ No permitido

```
p-(--space-m)
gap-(--gap-s)
```

Razón: No existe un sistema de spacing propio. Tailwind ya provee un sistema sólido y consistente.

---

## 3. Tipografía

Se utiliza el sistema tipográfico nativo del proyecto, controlado por Tailwind.

### ✔ Ejemplo correcto

```
text-xl
font-semibold
leading-tight
```

### Notas

- Aún no hay tipografías externas integradas.
- La guía puede extenderse cuando se defina una fuente en `globals.css`.

---

## 4. Bordes y radios

Bordes y radios usan únicamente las utilidades estándar de Tailwind.

### ✔ Sintaxis correcta

```
border
border-(--color-contraste-2)
rounded-lg
rounded-2xl
```

### Sombra

Se usan shadows **nativos** de Tailwind.

```
shadow-sm
shadow-md
shadow-lg
```

---

## 5. Layout y estructura visual

Se utiliza el sistema estándar de Tailwind para layout.

### ✔ Ejemplos válidos

```
flex
flex-col
items-center
justify-between
grid grid-cols-3 gap-6
container mx-auto max-w-4xl
```

### Notas

- No se usan helpers externos.
- Los contenedores dependen de Tailwind (`container`).
- Grids y flex están permitidos sin restricciones.

---

## 6. Estados: hover, focus, active

Los estados deben usarse **directamente sobre clases que usen variables CSS**.

### ✔ Ejemplos correctos

```
hover:bg-(--color-acento-2)
focus:border-(--color-contraste-4)
```

### ❌ Incorrecto (mezcla sintaxis)

```
hover:bg-acento2
focus:border-acento1
```

---

## 7. Animaciones

Se utiliza **Framer Motion**.

### Patrón recomendado

```tsx
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.25 }}
>
  ...
</motion.div>
```

### Notas

- No se usan animaciones CSS personalizadas.
- Tailwind solo se usa para transitions básicas (`transition`, `duration-200`, etc.).

---

## 8. Componentes UI (shadcn / Radix)

Se acepta el uso de componentes de shadcn/ui.

### Regla fundamental

**Toda personalización visual debe hacerse con variables CSS:**

```
text-(--color-contraste-1)
bg-(--color-base-oscura)
```

No se acepta usar clases derivadas del extend de Tailwind.

---

## 9. Contenedores de sección

Estructura sugerida:

```
<section class="p-8 rounded-xl bg-(--color-base-clara)">
  <h2 class="text-2xl font-bold mb-4 text-(--color-contraste-1)">Título</h2>
  <div class="grid gap-6">
    ...
  </div>
</section>
```

### Reglas

- `section` para bloques grandes.
- `div` para estructura interna.
- Títulos siempre en `text-(--color-contraste-1)` o variables equivalentes.
- Fondos claros para containers.

---

## 10. Botones — Patrón oficial

Los botones deben seguir este patrón base:

```
px-6 py-3 rounded-lg font-semibold shadow-md
bg-(--color-acento-1) text-(--color-base-clara)
hover:bg-(--color-acento-2) transition
```

### Variantes sugeridas

- Primario  
- Secundario  
- Fantasma  
- Deshabilitado

Se documentarán cuando integres tu sistema de botones final.

---

## 11. Inputs — Patrón oficial

Patrón inicial recomendado:

```
w-full px-4 py-3 rounded-lg border
border-(--color-contraste-3)
focus:border-(--color-acento-1)
```

---

## 12. Estructura semántica general

Siempre preferir:

- `section` para grupos de contenido  
- `article` para elementos autónomos  
- `header` / `footer` según corresponda  
- `main` en layouts principales

Evitar `<div>` innecesarios.

---

## 13. Reglas para combinar sintaxis

### ✔ Correcto

```
px-8 py-6 rounded-xl bg-(--color-base-media)
```

### ❌ Incorrecto

```
bg-baseMedia    // no permitido
text-[var(--color-acento-2)]  // no permitido
```

---

## 14. Radix UI Select (Guía de uso y estilos)

Esta sección documenta el uso del **Radix UI Select**, que incorporaste únicamente para reemplazar el `<select>` nativo con una versión más estilizada y controlable.

### 14.1. Instalación necesaria

El componente funciona con las librerías estándar de Radix:

```bash
npm install @radix-ui/react-select
```

---

### 14.2. Estructura del componente en tu proyecto

Tu archivo principal es:

```
/components/ui/SelectCustom.tsx
```

Y los estilos están en:

```
/components/ui/select-styles.css
```

---

### 14.3. Ejemplo base del SelectCustom

```tsx
// SelectCustom.tsx
import * as Select from "@radix-ui/react-select";
import "./select-styles.css";

export default function SelectCustom({ label, value, onValueChange, options = [] }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm text-gray-300">{label}</label>}

      <Select.Root value={value} onValueChange={onValueChange}>
        <Select.Trigger className="select-trigger" aria-label={label}>
          <Select.Value />
          <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="select-content">
            <Select.Viewport className="select-viewport">
              {options.map((opt) => (
                <Select.Item
                  key={opt.value}
                  value={opt.value}
                  className="select-item"
                >
                  <Select.ItemText>{opt.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
```

---

### 14.4. Estilos utilizados `select-styles.css`

```css
.select-trigger {
  @apply bg-contraste-2 text-white w-full px-3 py-2 rounded-md flex items-center justify-between border border-contraste-3;
}

.select-content {
  @apply bg-contraste-2 border border-contraste-3 rounded-md shadow-lg;
}

.select-viewport {
  @apply p-1;
}

.select-item {
  @apply px-3 py-2 text-white cursor-pointer rounded hover:bg-contraste-3;
}
```

---

### 14.5. Uso recomendado en formularios

Ejemplo práctico:

```tsx
<SelectCustom
  label="Nivel"
  value={level}
  onValueChange={setLevel}
  options=[
    { label: "Principiante", value: "beginner" },
    { label: "Intermedio", value: "intermediate" },
    { label: "Avanzado", value: "advanced" }
  ]
/>
```

---

### 14.6. Buenas prácticas

- Mantener el CSS separado, tal como está ahora. El archivo `select-styles.css` debe contener TODO el CSS específico del Select; evita mezclar estilos globales o inline en los componentes.

- Evitar estilos duplicados: si un estilo ya existe en `select-styles.css` o en una clase utilitaria de Tailwind, reutilizalo en lugar de volver a definirlo.

- Preferir variables CSS para colores y estados (ya definido en la guía): `var(--color-*)` sólo en el CSS del select y referenciado desde las clases del proyecto con la sintaxis corta (ej. `bg-(--color-acento-1)`).

- Nombres consistentes: usar convenciones tipo `SelectTrigger`, `SelectContent`, `SelectItem` o sus variantes kebab/camel consistentes entre CSS y JSX para facilitar búsquedas y mantenimiento.

- Accesibilidad: asegurar `aria-label` en `Select.Trigger` cuando no haya `label` visible; comprobar keyboard navigation y que el foco sea claramente visible (outline/box-shadow con variables de color).

- Evitar `all: unset` o resets globales que puedan afectar otros componentes. Si Radix inyecta resets, scopealos o sobrescribilos únicamente dentro del selector del componente.

- Documentar cambios: cualquier ajuste estético del select debe registrarse en la PR (qué se cambió, por qué y capturas antes/después).

- Test visual: revisar estados hover, focus, highlight, selección y scroll; probar en mobile y desktop para confirmar tamaños y toques.

- API del componente: mantener `options` como array de `{ value, label }`, exponer `onValueChange`, `placeholder` y `defaultValue` para facilitar la reutilización.

- No usar colores hex/rgba directamente en el CSS del select; siempre usar variables para mantener theming.

Fin de la sección 14.
