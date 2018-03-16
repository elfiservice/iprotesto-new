// class UserDAO {
//     constructor(connection) {
//         this._connection = connection();
//     }

//     create(user) {
//         this._connection.open( (err, mongoClient) => {
//             mongoClient.collection("users", (err, collection) => {
//                 collection.insert(user);

//                 mongoClient.close();
//             });
//         });
//     }
// }

function UserDAO(connection) {
    this._connection = connection();
  }
  
  UserDAO.prototype.create = function(usuario) {
    //funcai open fornecida pelo objeto mongo.Db
    this._connection.open( (err, mongoClient) => {
      //estabelecida a conexao, agora podemos manipular os docs dentro do bd
      mongoClient.collection("users", (err, collection) => {
  
  
        collection.insert(usuario);
  
        mongoClient.close();
      });
    });
  }


module.exports = () => {
    return UserDAO;
  };