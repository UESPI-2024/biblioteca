import { Request, Response} from "express";
import { Get_user_use_case } from "./get_user_use_case";

export class Get_user_controller{
  async handle(req: Request, res: Response) {
    try{ 
      const get_user_use_case = new Get_user_use_case()
      const result = await get_user_use_case.execute()
     return res.json({result})  
    }catch (e){
      return res.status(400).json({message: `Não foi possive buscar usuarios - ${e}`})
    }
  }
}