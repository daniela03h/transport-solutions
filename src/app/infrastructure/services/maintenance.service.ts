import { HttpClient } from "../utils/client-http";
import { IVehiclesGetResponse } from "@/app/core/application/dto/vehicles/vehicles-get-response.dto";


export class MaintenanceService{
    private httpClient: HttpClient;

    constructor(){
        this.httpClient = new HttpClient();
    }

    async findAllMaintenances(page: number, size: number){
        try{
            const response = this.httpClient.get<IVehiclesGetResponse>(`maintenance?page=${page}&size=${size}`);
            console.log(response)
            return response
        } catch(error){
            console.log(error);
            throw error;
        }
    }
}