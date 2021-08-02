import app from "./app"
import createStudent from './endpoints/createStudent'
import createClass from './endpoints/createClass'
import createTeacher from './endpoints/createTeacher'
import addStudentClass from './endpoints/addStudentClass'
import addTeacherClass from './endpoints/addTeacherClass'
import getAgeById from './endpoints/getAgeById'
import delStudent from './endpoints/delStudent'
import delStudentClass from './endpoints/delStudentClass'
import delTeacherClass from "./endpoints/delTeacherClass"
import getStudentsByClass from './endpoints/getStudentsByClass'
import getTeachersByClass from './endpoints/getTeachersByClass'
import getStudentsByHobbies from './endpoints/getStudentsByHobbies'
import changeClassProgram from "./endpoints/changeClassProgram"
import getTeachersByExpertise from './endpoints/getTeacherByExpertise'
import delTeacher from './endpoints/delTeacher'

app.post('/class/create', createClass)
app.put('/class', changeClassProgram)
app.post('/student/create', createStudent)
app.delete('/student/remove', delStudent)
app.put('/student/add', addStudentClass)
app.put('/student/class/remove', delStudentClass)
app.get('/student/age', getAgeById)
app.get('/students/:idclass', getStudentsByClass)
app.get('/students', getStudentsByHobbies)
app.post('/teacher/create', createTeacher)
app.delete('/teacher/remove', delTeacher)
app.put('/teacher/add', addTeacherClass)
app.put('/teacher/class/remove', delTeacherClass)
app.get('/teachers/:idclass', getTeachersByClass)
app.get('/teachers', getTeachersByExpertise)