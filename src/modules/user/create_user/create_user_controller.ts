import { Request, Response} from "express";
import { Create_user_use_case } from "./create_user_use_case";

export class Create_user_controller{
  async handle(req: Request, res: Response) {
    const {email, password, name,idade, biblioteca_id,admin } = req.body
    try{ 
      const create_user_use_case = new Create_user_use_case()
      const result = await create_user_use_case.execute({email, password, name, idade, biblioteca_id, admin})
     return res.json({"Messagem": result})  
    }catch (e){
      return res.status(400).json({message: `Não foi possive criar usuario - ${e}`})
    }
  }
}