import { IVehiclesGetResponse } from "@/app/core/application/dto/vehicles/vehicles-get-response.dto";
import { Aside } from "../molecules/Aside";
import { Header } from "../organisms/Header";
import { Table } from "../organisms/Table";
import Pagination from "../molecules/Pagination";

interface IProps {
  vehicles: IVehiclesGetResponse;
}

export const VehicleTemplate: React.FC<IProps> = ({ vehicles }) => {
  return (
    <div className="w-full h-screen flex">
      <Aside />
      <main>
        <Header />
        <Table vehicles={vehicles.data} />
        <Pagination data={vehicles} />
      </main>
    </div>
  );
};
