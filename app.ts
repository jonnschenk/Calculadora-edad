
function calcularEdad(fechaNacimiento: string): number {
  const nacimiento: Date = new Date(`${fechaNacimiento}T00:00:00`);
  const hoy: Date = new Date();

  if (isNaN(nacimiento.getTime())) {
    throw new Error("La fecha de nacimiento no es válida.");
  }

  if (nacimiento > hoy) {
    throw new Error("La fecha de nacimiento no puede ser futura.");
  }

  let edad: number = hoy.getFullYear() - nacimiento.getFullYear();

  const mesActual: number = hoy.getMonth();
  const mesNacimiento: number = nacimiento.getMonth();

  if (
    mesActual < mesNacimiento ||
    (mesActual === mesNacimiento &&
      hoy.getDate() < nacimiento.getDate())
  ) {
    edad--;
  }

  return edad;
}

// Pruebas de la aplicación
const fechasNacimiento: string[] = [
  "2000-05-15",
  "1995-12-20",
  "2010-01-10",
  "2020-08-25"
];

fechasNacimiento.forEach((fecha: string): void => {
  const edad: number = calcularEdad(fecha);
  console.log(`Fecha de nacimiento: ${fecha} | Edad: ${edad} años`);
});
