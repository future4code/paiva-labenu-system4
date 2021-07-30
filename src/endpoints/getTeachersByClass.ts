import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function getTeachersByClass(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const class_id = Number(req.params.idclass) || ""
        if (!class_id){
            res.statusCode = 422
            throw "'class_id' 'é obrigatório"
        }
        
        const result = await connection.raw(`SELECT name, class_id
            FROM labenu_system_teacher
            WHERE class_id = ${class_id}`)

        res.status(201).send(result[0])

    } catch (error: any) {
        if (typeof error === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }

    }
}