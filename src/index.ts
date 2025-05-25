import { DBUser, MySqlDB } from './databases/mysql';
import { Connection } from 'mysql2/promise';

interface Shemas{
    user?: DBUser
}

class App {
    static dbConnection: Connection;
    static bdShemas:Shemas={

    }
    
    constructor(){

    }

    static async initSettings(){
        const dbConnection = new MySqlDB();
        this.dbConnection = await dbConnection.main();
        this.bdShemas.user=new DBUser(this.dbConnection)
    } 
}

export default App;
