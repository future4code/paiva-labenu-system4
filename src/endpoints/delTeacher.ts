import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function delTeacher(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const id = Number(req.query.id)
        if (!id){
            res.statusCode = 422
            throw "'id' 'é obrigatório"
        }
        
        const result = await connection('labenu_system_teacher')
        .delete()
        .where('id', id)
        
        res.status(201).send(`Professor removido do banco de dados`)

    } catch (error: any) {
        if (typeof error === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }

    }
}