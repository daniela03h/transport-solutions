"use client";

import { Button } from "@/ui/atoms/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormField } from "../molecules/common/FormField";
import { IVehiclesRequest } from "@/app/core/application/dto/vehicles/vehicles-request.dto";
import { VehiclesService } from "@/app/infrastructure/services/vehicles.service";
import { Account } from "../atoms/Account";

interface IProps {
  action: string;
  idVehicles?: number;
  propFunction: () => void;
}

const vehiclesService = new VehiclesService();

const vehiclesSchema = yup.object().shape({
  make: yup.string().required("El titulo es requerido"),
});

export const VehicleForm: React.FC<IProps> = ({
  action,
  idVehicles,
  propFunction,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IVehiclesRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(vehiclesSchema),
  });

  const handlePost = async (data: IVehiclesRequest) => {};

  const handleEdit = async (data: IVehiclesRequest) => {};

  const onSubmit = action === "add" ? handlePost : handleEdit;

  return (
    <form
      className="w-full max-w-sm mx-auto p-4 space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-semibold text-center">
        Agrega nuevo vehiculo
      </h2>
      <div className="flex gap-2">
        <Account />
        <div className=" flex-col gap-2">
          <div className="flex gap-2">
            <Button text="Cargar" />
            <Button text="Cancelar" color="danger" />
          </div>
          <p className="text-xs text-center">
            Solo se aceptan archivos en formato jpg, png, svg
          </p>
        </div>
      </div>
      <FormField<IVehiclesRequest>
        control={control}
        type="text"
        label="Marca"
        name="make"
        error={errors.make}
        placeholder="Ingresa la marca"
      />
       <FormField<IVehiclesRequest>
        control={control}
        type="text"
        label="Marca"
        name="model"
        error={errors.model}
        placeholder="Ingresa la modelo"
      />
   
      <div className="flex gap-2">
        <Button text="Cancelar" color="secondary"/>
        <Button text={action === "add" ? "Agregar" : "Editar"} />
      </div>
    </form>
  );
};
