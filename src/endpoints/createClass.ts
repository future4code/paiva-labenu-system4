import { Request, Response } from "express";
import { connection } from "../data/connection";
import { getAddressInfo } from "../services/getAdressInfo";
import {class_labenu} from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { id, name, start_date, end_date, program } = req.body
      let type :'full-time'|'night' = "full-time"

      if (!id || !name || !start_date || !end_date) {
         res.statusCode = 422
         throw "'id', 'name', 'start_date ', 'end_date')'são obrigatórios"
      }
      if (name.includes('-na-night')){
         type= 'night'
      }
        
    const newClass: class_labenu = {id, name, start_date, end_date, program,type }

      await connection('labenu_system_class').insert(newClass)

      res.status(201).send("Nova turma inserida!")

   } catch (error:any) {

      if (typeof error === "string") {

         res.send(error)
      } else {

         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}