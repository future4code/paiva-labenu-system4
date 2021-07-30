import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function delTeacherClass(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const id = Number(req.query.id)
        if(isNaN(id)){
          throw new Error('Id must be a number.')
        }
    
       await connection('labenu_system_teacher')
          .update({class_id: null})
          .where('id', id)
     

      

        res.status(200).send(`Removed from class.`)
    } catch (error: any) {
        if (typeof error === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }

    }
}