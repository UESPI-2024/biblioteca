import { Request, Response} from "express";
import { Create_biblioteca_use_case } from "./create_biblioteca_use_case";

export class Create_biblioteca_controller{
  async handle(req: Request, res: Response) {
    const {name} = req.body
    try{ 
      const create_biblioteca_use_case = new Create_biblioteca_use_case()
      const result = await create_biblioteca_use_case.execute({name})
     return res.json({"Messagem": result})  
    }catch (e){
      return res.status(400).json({message: `Não foi possive criar usuario - ${e}`})
    }
  }
}