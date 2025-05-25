import express, { Application, Router } from 'express';
import path from 'path'
import todo from './src/routes/todo'
import main from './src/routes/main'
import users from './src/routes/users'
import bodyParser from 'body-parser';
import App from './src';



export const app: Application = express();
const PORT = process.env.PORT || 80;
console.log(PORT)
app.set('view engine', 'pug');
app.use(bodyParser.json({
    limit: '100mb'
}));
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '100mb',
    parameterLimit: 50000,

}));

app.use('/public', express.static(path.join(__dirname, '/public')))
app.use(todo)
app.use(main)
app.use(users)

app.listen(PORT, async () => {
    await App.initSettings()
    console.log("Hello world")
})










