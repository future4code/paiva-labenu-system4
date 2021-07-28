import { Request, Response } from "express";
import { connection } from "../data/connection";
import { student} from "../types";

export default async function createStudent(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { id, name, email, birthdate, class_id } = req.body

      if (!id || !name || !email || !birthdate|| !class_id ) {
         res.statusCode = 422
         throw "'id', 'name', 'email', 'birthdate' e 'class_id'são obrigatórios"
      }
 
  
     

    const newStudent: student = { id, name, email, birthdate, class_id }

      await connection('labenu_system_student').insert(newStudent)

      res.status(201).send("Novo aluno inserido")

   } catch (error:any) {

      if (typeof error === "string") {

         res.send(error)
      } else {

         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}