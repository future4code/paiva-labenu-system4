import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function getAgeById(
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
        .select('birthdate', 'name')
        .where('id', id)
        
        const nameStudent = result[0].name
        console.log(nameStudent, "MEU NOME AQUI EIN!!")
        const age = new Date().getFullYear() - new Date(result[0].birthdate).getFullYear()

        res.status(201).send(`A idade do(a) aluno(a): ${nameStudent} é ${age} anos`)

    } catch (error: any) {
        if (typeof error === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }

    }
}