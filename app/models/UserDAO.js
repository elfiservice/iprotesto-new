class UserDAO {
    constructor(connection) {
        this._connection = connection();
        this._dbName = 'iprotesto';

    }

    create(user, req, res) {
        this.checkIfExist(user, req, res);
    }

    checkIfExist(user, req, res) {

        this._connection.connect((err, client) => {
            const db = client.db(this._dbName);
            db.collection('users').find({email: user.email}).toArray(function(err, result) {
                
                if(result.length >= 1) {
                    //console.log('Ja existente');
                    res.send('User already exist!');
                    
                } else {
                    
                    db.collection('users').insertOne(user, (err, result) => {
                        if(err) {
                            console.log(err);       
                        } else {
                            console.log(result.ops);
                            res.send('ir para pagina de Login e confirmacao');      
                        }
                        client.close();  
                    });
                }

                client.close();
            });

            

        });
        
    }

}

module.exports = () => {
    return UserDAO;
  };