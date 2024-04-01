import { database } from "../../../app"
import IUser from "../../../models/IUser"

export class Create_user_use_case{
  async execute(user: IUser): Promise<IUser | string>{
    const find_user = await database.user.findUnique({
      where: { 
        email: user.email
      }
    })
    if(!find_user){
      const new_user = await database.user.create(
        {
          data: user   
        }
      )
      return new_user
    }else{
      return "Já existe usuario cadastrado com esse email"
    }
  }
}