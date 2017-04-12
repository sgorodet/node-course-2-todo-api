//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err){
    return console.log ('Unable to connect to Mongodb Server');
  }
  console.log ('Connected to Mongodb Server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do 1',
  //   completed: false
  // }, (err, result)=>{
  //   if (err){
  //     return console.log ('Unable to insert to do', err);
  //   }
  //   console.log (JSON.stringify(result.ops, undefined, 2));
  // });
  // db.collection('Users').insertOne({
  //   name: 'Sana Raytman',
  //   age: 101,
  //   localtion: 'Chicago'
  // }, (err, result)=>{
  //   if (err){
  //     return console.log ('Unable to insert to do', err);
  //   }
  //   console.log (JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.close();
});
