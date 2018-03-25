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

    logInto(user, req, res) {
        this._connection.connect((err, client) => {
            const db = client.db(this._dbName);
            db.collection('users').find(user).toArray(function(err, result) {
                let userData = result[0];
                if(userData != undefined) {
                    req.session.autorizado = true;
                    req.session.emailUser = userData.email;
                                        
                }

                if(req.session.autorizado){
                    res.redirect("home");
                  } else {
                    let msg = [{msg: 'Usuraio não encontrado, tente outro!'}];  
                    res.render("login", {validacao: msg, dados: user.email});
                  }
                
                

                client.close();
            });
        });
        
    }

}

module.exports = () => {
    return UserDAO;
  };