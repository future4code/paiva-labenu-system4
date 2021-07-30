import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function getStudentsByClass(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const class_id = Number(req.params.idclass) || ""
        if (!class_id){
            res.statusCode = 422
            throw "'class_id' 'é obrigatório"
        }
        console.log(class_id)
        
        const result = await connection.raw(`SELECT name, class_id
            FROM labenu_system_student
            WHERE class_id = ${class_id}`)

        res.status(200).send(result[0])

    } catch (error: any) {
        if (typeof error === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }

    }
}