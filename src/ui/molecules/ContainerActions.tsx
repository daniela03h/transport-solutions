"use client";

import { useRouter } from "next/navigation";
import { Datum } from "@/app/core/application/dto/vehicles/vehicles-get-response.dto";
import { VehiclesService } from "@/app/infrastructure/services/vehicles.service";
import { Icon } from "@iconify/react";

interface ITdActions {
  data: Datum;
}

const useProjectsService = new VehiclesService();

export const ContainerActions: React.FC<ITdActions> = ({ data }) => {
  // const handleDelete = async (id: number) => {
  //   const projectToDelete = await useProjectsService.deleteVehicles(id);
  //   router.refresh();
  //   return projectToDelete;
  // };

  return (
    <div className="flex gap-2">
      <Icon icon="uil:edit" width="20" height="20" />
      <Icon icon="stash:last-updates-solid" width="20" height="20" />
      <button onClick={() => handleDelete(data.id)}>
        <Icon icon="tabler:trash" width="20" height="20" />
      </button>
    </div>
  );
};
