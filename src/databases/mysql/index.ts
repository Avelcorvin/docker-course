import mysql,{Connection} from 'mysql2/promise';

class MySqlDB{
  constructor(){

  }
  async main(){
    var connection = await mysql.createConnection({
      host     : '127.0.0.1',
      user     : 'root',
      password : 'my-secret-pw',
      database : 'MyBd',
    });
    
    connection.connect();
    return connection

  }

}



class DBUser  {
  connection: Connection
  constructor(connection: Connection){
    this.connection = connection;
  }
  
  async addUser(name,password,user){
    try {
      const values = [name,password,user];
      const query = 'INSERT INTO User (`name`, `email`, `password`) VALUES (?, ?, ?)'
      return await this.connection.execute(query,values)
    } catch (error) {
      console.log(error)
      return error
    }
  }

    
  async getAllUsers(){
    try {
      const query = 'SELECT * FROM User';
      return await this.connection.execute(query)
    } catch (error) {
      console.log(error)
      return error
    }
  }
  async getOneUser(name){
    const query = 'SELECT * FROM User  WHERE `name` = ?';
    const values =[name]
    return await this.connection.execute(query,values)
  }



}

export {
  DBUser,
  MySqlDB
}
