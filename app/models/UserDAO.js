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
                    let msg = [{msg: 'Usuraio ja existente, tente outro!'}];
                    res.render('index',{validacao: msg, dados: user})
                    
                } else {
                    
                    db.collection('users').insertOne(user, (err, result) => {
                        if(err) {
                            //render a error page saying There was a problem during inseting User
                            console.log(err);       
                        } else {
                            console.log(result.ops);
                            //res.render('login', {dados: user});
                            res.redirect('/login');
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