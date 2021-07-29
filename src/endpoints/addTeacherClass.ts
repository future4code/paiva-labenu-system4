import { Request, Response } from "express";
import { connection } from "../data/connection";
import { student } from "../types";

export default async function addStudentClass(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const { id, class_id } = req.body
        if (!id || !class_id) {
            res.statusCode = 422
            throw "'id' e 'class_id' 'são obrigatórios"
        }

        const altClass = await connection("labenu_system_teacher")
            .update({ class_id })

            .where({ id });

        res.status(201).send("Professor inserido na turma")

    } catch (error: any) {

        if (typeof error === "string") {

            res.send(error)
        } else {

            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }

    }
}