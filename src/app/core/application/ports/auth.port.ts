import { ILoginRequest } from "../dto/login-request.dto";
import { ILoginResponse } from "../dto/login-response.dto";

export interface PAuth {
  /**
   * 
   * @param req 
   */
  login(req: ILoginRequest): Promise<ILoginResponse>
  
}