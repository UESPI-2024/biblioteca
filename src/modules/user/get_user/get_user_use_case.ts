import { database } from "../../../app"
import IUser from "../../../models/IUser"

export class Get_user_use_case{
  async execute(): Promise<IUser[]>{
    // const users = await database.user.findMany(
    //   {
    //     select: {
    //       name: true,
    //       biblioteca: {
    //         select: {
    //           name: true,
    //         },
    //       },
    //     },
    //   }
    // )
    // return users
    const users = await database.user.findMany({

      include: {
        biblioteca:{
          select: {
            name: true
          }
        }
      }
    })
    return users
  }
}