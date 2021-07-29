import app from "./app"
import createStudent from './endpoints/createStudent'
import createClass from './endpoints/createClass'
import createTeacher from './endpoints/createTeacher'
import addStudentClass from './endpoints/addStudentClass'
import addTeacherClass from './endpoints/addTeacherClass'
import getAgeById from './endpoints/getAgeById'

app.get('/student/age', getAgeById)
app.post('/student/create', createStudent)
app.post('/class/create', createClass)
app.post('/teacher/create', createTeacher)
app.put('/student/add', addStudentClass)
app.put('/teacher/add', addTeacherClass)


