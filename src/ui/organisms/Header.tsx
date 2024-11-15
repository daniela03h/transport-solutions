"use client";

import React, { useState } from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { Icon } from "@iconify/react";
import { Modal } from "../atoms/Modal";
import { VehicleForm } from "./VehicleForm";

export const Header = () => {
  const [modal, setModal] = useState(false);
  const handleCloseModal = () => setModal(false);

  return (
    <header className="flex flex-col gap-10 justify-between px-4 py-10">
      <h2 className="font-bold text-2xl">Gestión de vehiculos</h2>
      <div className="flex flex-col gap-4">
        <div className="flex gap-10  justify-between items-center">
          <div className="flex gap-4">
            <label htmlFor="licensePlate">
              Placa
              <Input
                type="search"
                name="licensePlate"
              />
            </label>
            <label htmlFor="year">
            Año
              <Input
                type="search"
                name="year"
              />
            </label>
            <label htmlFor="make">
              Marca
              <Input
                type="search"
                name="make"
              />
            </label>
            <label htmlFor="model">
              Modelo
              <Input
                type="search"
                name="model"
              />
            </label>
          </div>
          <div className="flex gap-4">
            <Button
              text="Filtrar"
              icon={
                <Icon
                  icon="ant-design:filter-outlined"
                  width="20"
                  height="20"
                  color="white"
                />
              }
            />
            <Button
              text="Limpiar"
              color="secondary"
              icon={<Icon icon="mdi:clear" width="20" height="20" />}
            />
          </div>
        </div>
        <div className="flex gap-4 w-1/3">
          <Button
            text="Agregar Vehiculo"
            icon={
              <Icon
                icon="ant-design:filter-outlined"
                width="20"
                height="20"
                color="white"
              />
            }
            onClick={() => setModal(true)}
          />
          <Button
            text="Descargar reporte"
            color="greenButton"
            icon={
              <Icon
                icon="line-md:document-report"
                width="20"
                height="20"
                color="white"
              />
            }
          />
        </div>
        {modal && (
          <Modal propFunction={handleCloseModal}>
            <VehicleForm action="add" propFunction={handleCloseModal} />
          </Modal>
        )}
      </div>
    </header>
  );
};
