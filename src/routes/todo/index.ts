import express, {Application,Router,application} from 'express';
import redis from '../../databases/redis';
import { ejs } from '../../pacakages';
import App from '../..';


const router = express.Router();

const parse=(data)=>{
    if(data){
        return JSON.parse(data)
    }else{
        return []
    }
}

router.post("/todo", async(req,res)=>{
    const {name, email, password} =JSON.parse( req.body)||{};
    const data =  await redis.get('todo');
    await App.bdShemas.user.addUser(name, email, password)
    await redis.setOne('todo',JSON.stringify([...parse(data),{name, email, password}]))
    res.status(200)
});

router.get("/todo",async(req,res)=>{
    const data =  await redis.get('todo')
    const todo =parse(data)
    // console.log(todo)

    const compiled = await ejs.renderFile(__dirname+ '/index.ejs', {todo});
    // console.log(compiled)

    res.send(compiled)
});

export default router;