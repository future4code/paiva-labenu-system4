import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function delStudentClass(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const id = Number(req.query.id)
        if(isNaN(id)){
          throw new Error('Id precisa ser um numero valido.')
        }
    
        await connection('labenu_system_student')
          .update({class_id: null})
          .where('id', id)
    
        res.status(200).send('Removido da classe.')
    } catch (error: any) {
        if (typeof error === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }

    }
}