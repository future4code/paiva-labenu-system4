import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function changeClassProgram(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const { id, program } = req.body
        if (!id || !program) {
            res.statusCode = 422
            throw "'id' e 'program' 'são obrigatórios"
        }

        await connection("labenu_system_class")
        .update({ program })
        .where({ id })
  

        res.status(201).send(`Turma alterada para módulo ${program} com sucesso!`)

    } catch (error: any) {

        if (typeof error === "string") {

            res.send(error)
        } else {

            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }

    }
}