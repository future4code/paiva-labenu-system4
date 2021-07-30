import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function getTeachersByHobbies(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const expertise_id = Number(req.query.expertise) || "" 
        if (!expertise_id){
            res.statusCode = 422
            throw "'id de expertise' 'é obrigatório"
        }
        
        const result = await connection("labenu_system_teachers_expertise")
        .select("labenu_system_teacher.id", "labenu_system_teacher.name")
        .where("labenu_system_teachers_expertise.expertise_id", "=", `${expertise_id}`)
        .join("labenu_system_teacher", "id", "=", "labenu_system_teachers_expertise.teacher_id" )

          res.status(200).send(result)

    } catch (error: any) {
        if (typeof error === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
}