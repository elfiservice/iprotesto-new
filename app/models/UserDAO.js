class UserDAO {
    constructor(connection) {
        this._connection = connection();
        this._table = 'iprotesto';

    }

    create(user) {
        this._connection.connect((err, client) => {
            const db = client.db(this._table);
            db.collection('users').insertOne(user, (err, result) => {
                if(err) {
                    console.log(err);       
                }else {
                    console.log(result.ops);      
                }
            });
          });
    }
}



module.exports = () => {
    return UserDAO;
  };