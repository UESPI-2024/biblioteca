import { database } from "../../../app"
import IBiblioteca from "../../../models/IBiblioteca"

export class Create_biblioteca_use_case{
  async execute(biblioteca: IBiblioteca): Promise<IBiblioteca | string>{
   const new_biblioteca = await database.biblioteca.create(
        {
          data: biblioteca   
        }
      )
      return new_biblioteca
  }
}