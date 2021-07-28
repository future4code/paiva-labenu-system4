import { connection } from "./connection"
import student from "./student.json"
import hobbies from "./hobbies.json"
import teacher from "./teacher.json"
import expertise from "./expertise.json"
import class_labenu from "./class.json"


const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`

   CREATE TABLE labenu_system_student(
      id INT PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      email VARCHAR(50) UNIQUE NOT NULL,
      birthdate DATE NOT NULL,
      class_id INT NOT NULL
      FOREIGN KEY (class_id) REFERENCES class(id)
      );

      CREATE TABLE labenu_system_hobbies(
      id INT PRIMARY KEY,           
      name VARCHAR(255) NOT NULL,
     );

      CREATE TABLE labenu_system_teacher(
      id INT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      bithdate DATE NOT NULL,
      class_id INT NOT NULL
      FOREIGN KEY (turma_id) REFERNCES turma(id)
      );

      CREATE TABLE labenu_system_expertise(
      id INT PRIMARY KEY,
      name ENUM('React', 'Redux', 'CSS', 'Tests', Typescript', 'POO', 'Backend'
      );
            
      CREATE TABLE labenu_system_class(
      id INT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      start_date DATE NOT NULL,
      end_date DATE NOT NULL,
      program ENUM ('1','2','3','4','5','6','7') DEFAULT '0'
      type ENUM('full-time','night') DEFAULT 'full-time'
      );
           
`)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const insertStudents = () => connection("labenu_system_student")
   .insert(student)
   .then(() => { console.log("Novo aluno inserido") })
   .catch(printError)

const insertTeachers = () => connection("labenu_system_teacher")
   .insert(teacher)
   .then(() => { console.log("novo professor inserido") })
   .catch(printError)

   const insertHobbies = () => connection("labenu_system_hobbies")
   .insert(hobbies)
   .then(() => { console.log("hobbies inseridos") })
   .catch(printError)

   const insertExpertise = () => connection("labenu_system_expertise")
   .insert(expertise)
   .then(() => { console.log("especialidade inserida") })
   .catch(printError)

   const insertClass = () => connection("labenu_system_class")
   .insert(class_labenu)
   .then(() => { console.log("nova turma inserida") })
   .catch(printError)


const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertStudents)
   .then(insertTeachers)
   .then(insertHobbies)
   .then(insertExpertise)
   .then(insertClass)
   .finally(closeConnection)