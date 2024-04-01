import express, {Express} from "express"
import { routes } from "./router";
import { PrismaClient } from "@prisma/client";

class App{
  app: Express;
  database: PrismaClient;

  constructor(){
    this.database = new PrismaClient();
    this.app = express();
    this.middleware();
    this.router();
  }
  
  middleware(){
    this.app.use(express.json())
  }

  router (){
    this.app.use(routes)
  }
}

const {app, database} = new App();

export {app, database}