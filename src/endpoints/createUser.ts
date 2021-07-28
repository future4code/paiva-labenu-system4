import { Request, Response } from "express";
import { connection } from "../data/connection";
import { getAddressInfo } from "../services/getAdressInfo";
import { userFull} from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, zipcode, number, address  } = req.body

      if (!name || !nickname || !email || !zipcode || !number) {
         res.statusCode = 422
         throw "'name', 'nickname', 'email', 'zipcode', 'number' e 'address' são obrigatórios"
      }
 
  
      const id: string = Date.now().toString()
      const {street, neighborhood, city, state}:any = await getAddressInfo(zipcode)

    const newUser: userFull = { id, name, nickname, email, zipcode, number, address, street, neighborhood, city, state }

      await connection('aula51_users').insert(newUser)

      res.status(201).send("Usuário criado!")

   } catch (error:any) {

      if (typeof error === "string") {

         res.send(error)
      } else {

         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}