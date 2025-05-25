import { app } from "../app";
import main from './routes/main'
import todo from './routes/todo'
app.use(main);
app.use(todo);