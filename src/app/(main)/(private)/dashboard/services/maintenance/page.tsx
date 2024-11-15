import { VehiclesService } from '@/app/infrastructure/services/vehicles.service';
import { VehicleTemplate } from '@/ui/template/VehicleTemplate'
import React from 'react'

interface IProps {
  searchParams: {
    page: string;
    size: string;
    name: string;
  };
}

const vehiclesService = new VehiclesService();

export default async function MaintaenancePage({ searchParams }: IProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const size = searchParams.size ? parseInt(searchParams.size) : 5;
  const response = await vehiclesService.findAllVehicles(page, size);

  console.log(response)
  return (
    <VehicleTemplate vehicles={response}/>
  )
}