import { Router, Request, Response} from "express";
import { database } from "../app";
import { Create_biblioteca_controller } from "../modules/biblioteca/create_biblioteca/create_biblioteca_controller";
const routes = Router();

const create_biblioteca_controller = new Create_biblioteca_controller()

routes.get('/', async (req: Request, res: Response) => {
  const users = await database.user.findMany()
  return res.json({Usuarios: users})
})

routes.post('/', create_biblioteca_controller.handle)

export default routes;