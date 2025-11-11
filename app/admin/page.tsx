import { ReactNode } from "react"



export default function RoutinesPage() {
  return (
    <div className="bg-base-media p-6 rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-contraste-1">
        Bienvenido al Panel de Rutinas
      </h2>
      <p className="mb-6 text-contraste-2">
        Aquí podrás gestionar rutinas y entrenamientos personalizados.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-lg mb-2">Usuarios</h3>
          <p className="text-contraste-3 text-sm">
            Ver y administrar todos los usuarios registrados.
          </p>
        </div>

        <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-lg mb-2">Contenidos</h3>
          <p className="text-contraste-3 text-sm">
            Crear, editar o eliminar rutinas y publicaciones.
          </p>
        </div>

        <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-lg mb-2">Configuraciones</h3>
          <p className="text-contraste-3 text-sm">
            Ajustes generales de la aplicación y parámetros del sistema.
          </p>
        </div>
      </section>
    </div>
  )
}
