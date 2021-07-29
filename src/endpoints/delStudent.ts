import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function delStudent(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const id = Number(req.query.id)
        if (!id){
            res.statusCode = 422
            throw "'id' 'é obrigatório"
        }
        
        const result = await connection('labenu_system_student')
        .delete()
        .where('id', id)
        
        res.status(201).send(`O estudante foi expulso`)

    } catch (error: any) {
        if (typeof error === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }

    }
}