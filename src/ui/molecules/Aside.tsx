import React from "react";
import { Icon } from "@iconify/react";
import IconButton from "../atoms/IconButton";
import { Button } from "../atoms/Button";

export const Aside = () => {
  return (
    <div className="w-1/5 font-bold py-8 px-5">
      <div className="flex gap-2 items-center border-b pb-6">
        <Icon
          icon="fluent:vehicle-car-parking-16-filled"
          width="60"
          height="60"
        />
        <h2>Transport Solutions</h2>
      </div>
      <div className="flex flex-col gap-4 items-center py-10">
        <div className="flex gap-4 items-center rounded-full bg-primary">
          <Icon
            icon="ic:baseline-person"
            width="60"
            height="60"
            color="white"
          />
        </div>
        <p>Kevin Mejia</p>
      </div>
      <div className="flex flex-col gap-8">
          <Button
            text="Vehiculos"
            color="btnVehicle"
            icon={
              <Icon
                icon="ant-design:car-filled"
                width="40"
                height="40"
                color="white"
                className="bg-primary rounded p-1"
              />
            }
          />
        <div className="flex items-center gap-2">
          <div className="flex items-center p-1 rounded shadow-md">
            <IconButton>
              <Icon
                icon="fluent:arrow-enter-16-filled"
                width="30"
                height="30"
              />
            </IconButton>
          </div>
          <button>Cerrar Sesion</button>
        </div>
      </div>
    </div>
  );
};
