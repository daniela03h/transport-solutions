import { HttpClient } from "../utils/client-http";
import { IVehiclesGetResponse } from "@/app/core/application/dto/vehicles/vehicles-get-response.dto";


export class VehiclesService{
    private httpClient: HttpClient;

    constructor(){
        this.httpClient = new HttpClient();
    }

    async findAllVehicles(page: number, size: number){
        try{
            const response = this.httpClient.get<IVehiclesGetResponse>(`vehicles?page=${page}&size=${size}`);
            console.log(response)
            return response
        } catch(error){
            console.log(error);
            throw error;
        }
    }

    // async postVehicles(url:string, body){
    //     try{
    //         const newProject = await this.httpClient.post(url,body);
    //         alert('Se creo exitosamente');
    //         return newProject;
    //     }catch(error){
    //         console.log(error);
    //         alert("No se pudo crear el proyecto")
    //         throw error
    //     }
    // }

    async deleteVehicles(id:number){
        try{
            const VehicleToDelete = await this.httpClient.delete(`vehicles/${String(id)}`);
            return VehicleToDelete;
        } catch(error){
            console.log(error);
            throw error;
        }
    }

}