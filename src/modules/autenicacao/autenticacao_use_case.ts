import { database } from "../../app";
import generateAuthToken from "../../utils/generateAuthToken";

export class Autenticacao_use_case{
  async execute(email:string, password:string){
    const user = await database.user.findUnique({
      where: {email:email}
    })

    if (!user){
      return "Usuario não exise"
    }

    if (user.password == password){
      return generateAuthToken({id: user.id, name: user.name })
    }else{
      return 'Senha invalida'
    }
  }
}