import { Router, Request, Response} from "express";
import { database } from "../app";
import { Create_user_controller } from "../modules/user/create_user/create_user_controller";
import { Get_user_controller } from "../modules/user/get_user/get_user_controller";
import private_route from "../middleware/private_route";
const routes = Router();

// CRUD
// C - Create
// R - Ready
// U - Update
// D - Delete


const create_user_controler = new Create_user_controller()
const get_user_controler = new Get_user_controller()

routes.get('/', private_route,get_user_controler.handle)

routes.post('/', create_user_controler.handle)

routes.put('/:id', async (req: Request, res: Response) => {
  const {id} = (req.params)
  const { name} = req.body
  const user = await database.user.update({
    where: {id: parseInt(id)},
    data: {
      name: name
    }
  })
  if (user){
    return res.json({Usuarios: user})
  }else{
    return res.status(404).json({Mesagem: 'Não foi possivel atualizar'})

  }
})

routes.delete('/:id', async (req: Request, res: Response) => {
  const {id} = (req.params)
  try{
    const user = await database.user.delete({
      where: {id: parseInt(id)}
    })
    return res.json({Mesagem: 'Usuario deletad com sucesso'})
  }catch(err){
    return res.status(404).json({Mesagem: `Não foi possivel deletar - ${err}`})

  }
})

export default routes;