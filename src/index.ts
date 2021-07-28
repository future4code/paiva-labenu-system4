import app from "./app"
import createStudent from './endpoints/createStudent'
import createClass from './endpoints/createClass'
import createTeacher from './endpoints/createTeacher'

app.post('/student/create', createStudent)
app.post('/class/create', createClass)
app.post('/teacher/create', createTeacher)