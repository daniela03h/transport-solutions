import { Datum } from "@/app/core/application/dto/vehicles/vehicles-get-response.dto";
import { ContainerActions } from "../molecules/ContainerActions";

interface IProps {
  vehicles: Datum[];
}

export const Table: React.FC<IProps> = ({ vehicles }) => {
  return (
    <section className="m-10">
      <table className="min-w-full bg-white shadow-lg rounded">
        <thead className="border-b-2">
          <tr>
            <th className="px-6 py-3 text-center">Foto</th>
            <th className="px-6 py-3 text-center">Marca</th>
            <th className="px-6 py-3 text-center">Modelo</th>
            <th className="px-6 py-3 text-center">Año</th>
            <th className="px-6 py-3 text-center">Placa</th>
            <th className="px-6 py-3 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {vehicles?.map((vehicle: Datum) => (
            <tr key={vehicle.id} className="border-b">
              <td className="px-6 py-4">{vehicle.photo}</td>
              <td className="px-6 py-4">{vehicle.make}</td>
              <td className="px-6 py-4">{vehicle.model}</td>
              <td className="px-6 py-4">{String(vehicle.year)}</td>
              <td className="px-6 py-4">{vehicle.licensePlate}</td>
              <td>
                <ContainerActions data={vehicle} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};