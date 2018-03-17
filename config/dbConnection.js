// // Importar o Modulo do MongoDB
 const mongo = require('mongodb');
 const assert = require('assert');

// cria uma Função-variavel para retornar uma conexao quando necessario na APlicação
var connection = () => {
  var db = new mongo.MongoClient(
    new mongo.Server('localhost', 27017),
    {} //config adicionais
  );

  return db;
};




// let teste = connection().connect((err, result) => {
//  let db = result.db('ipro');

//  db.collection('inserts').insertOne({a:1}, function(err, r) {
//   assert.equal(null, err);
//   assert.equal(1, r.insertedCount);

//   // Insert multiple documents
//   db.collection('inserts').insertMany([{a:2}, {a:3}], function(err, r) {
//     assert.equal(null, err);
//     assert.equal(2, r.insertedCount);

//     result.close();
//   });
// });
// });




  module.exports = () => {
    return connection;
  };
