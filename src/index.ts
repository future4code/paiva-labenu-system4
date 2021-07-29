import app from "./app"
import createStudent from './endpoints/createStudent'
import createClass from './endpoints/createClass'
import createTeacher from './endpoints/createTeacher'
import addStudentClass from './endpoints/addStudentClass'
import addTeacherClass from './endpoints/addTeacherClass'
import getAgeById from './endpoints/getAgeById'
import delStudent from './endpoints/delStudent'
import delStudentClass from './endpoints/delStudentClass'



app.get('/student/age', getAgeById)
app.post('/student/create', createStudent)
app.post('/teacher/create', createTeacher)
app.post('/class/create', createClass)
app.put('/student/add', addStudentClass)
app.put('/student/remove/class', delStudentClass)
app.put('/teacher/add', addTeacherClass)
app.delete('/student/remove', delStudent)




