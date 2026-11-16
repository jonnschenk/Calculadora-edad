# Calculadora-edad

Aplicación de consola escrita en **TypeScript** que calcula la edad exacta de una persona a partir de su fecha de nacimiento.

## Características

- Calcula la edad en años cumplidos, teniendo en cuenta si la persona ya cumplió años en el año actual (compara mes y día).
- Valida la entrada:
  - Lanza un error si la fecha no es válida.
  - Lanza un error si la fecha de nacimiento es futura.
- Interpreta la fecha en hora local (`T00:00:00`) para evitar desfases de un día por la zona horaria.
- Código con tipado estricto (`strict: true`).

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior
- npm

## Instalación

```bash
git clone <url-del-repositorio>
cd calculadora-edad-typescript
npm install
```

## Uso

Compilar el código TypeScript a JavaScript (se genera en `dist/`):

```bash
npx tsc
```

Ejecutar la aplicación:

```bash
node dist/app.js
```

### Ejemplo de salida

```
Fecha de nacimiento: 2000-05-15 | Edad: 26 años
Fecha de nacimiento: 1995-12-20 | Edad: 30 años
Fecha de nacimiento: 2010-01-10 | Edad: 16 años
Fecha de nacimiento: 2020-08-25 | Edad: 6 años
```

> Las edades dependen de la fecha en que se ejecute el programa.

## Funcionamiento

La función principal es `calcularEdad`:

```ts
function calcularEdad(fechaNacimiento: string): number
```

- **Parámetro:** `fechaNacimiento` en formato `AAAA-MM-DD` (por ejemplo, `"2000-05-15"`).
- **Retorna:** la edad en años cumplidos.
- **Errores:** lanza un `Error` si la fecha es inválida o futura.

Pasos:

1. Convierte el texto en un objeto `Date`.
2. Valida que la fecha sea correcta y que no sea futura.
3. Resta el año de nacimiento al año actual.
4. Si todavía no llega el cumpleaños de este año (mes o día menor), resta un año.

Para probar con otras fechas, edita el arreglo `fechasNacimiento` en [app.ts](app.ts).

## Estructura del proyecto

```
calculadora-edad-typescript/
├── app.ts           # Código fuente
├── dist/            # JavaScript compilado (ignorado por git)
├── tsconfig.json    # Configuración del compilador
├── package.json
└── README.md
```

## Tecnologías

- TypeScript
- Node.js

## Autor

Jonathan M. Ramírez
