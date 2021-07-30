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

app.post('/class/create', createClass)
app.put('/class', changeClassProgram)
app.post('/student/create', createStudent)
app.put('/student/add', addStudentClass)
app.get('/student/age', getAgeById)
app.delete('/student/remove', delStudent)
app.get('/students/:idclass', getStudentsByClass)
app.put('/student/class/remove', delStudentClass)
app.post('/teacher/create', createTeacher)
app.put('/teacher/add', addTeacherClass)
app.put('/teacher/class/remove', delTeacherClass)
app.get('/teachers/:idclass', getTeachersByClass)
app.get('/students', getStudentsByHobbies)
app.get('/teachers', getTeachersByExpertise)