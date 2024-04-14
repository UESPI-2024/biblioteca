import { Router, Request, Response} from "express";
import { database } from "../app";
import { Autenticaca_controller } from "../modules/autenicacao/autenticacao_controller";
const routes = Router();

const autenicacao_controller = new Autenticaca_controller()



routes.post('/', autenicacao_controller.handle)

export default routes;