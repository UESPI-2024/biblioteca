import { Router } from "express";
import usuario_routes from './usuario_routes';
import biblioteca_routes from './biblioteca_routes';
import autenticacao_routes from './autenticacao_routes';

const routes = Router();

routes.use('/login', autenticacao_routes)
routes.use('/user', usuario_routes)
routes.use('/biblioteca', biblioteca_routes)


export {routes}