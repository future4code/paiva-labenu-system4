import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function getStudentsByHobbies(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const hobbies_id = Number(req.query.hobbies) || "" 
        if (!hobbies_id){
            res.statusCode = 422
            throw "'id de hobbies' 'é obrigatório"
        }
        
        const result = await connection("labenu_system_students_hobbies")
        .select("labenu_system_student.id", "labenu_system_student.name")
        .where("labenu_system_students_hobbies.hobbies_id", "=", `${hobbies_id}`)
        .join("labenu_system_student", "id", "=", "labenu_system_students_hobbies.student_id" )

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