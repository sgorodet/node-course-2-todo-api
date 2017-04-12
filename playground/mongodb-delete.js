//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err){
    return console.log ('Unable to connect to Mongodb Server');
  }
  console.log ('Connected to Mongodb Server');

//deleteMany
// db.collection('Users').deleteMany({
//   name: 'Sana Raytman'
// }).then ((result)=>{
//   console.log (result);
// })

//deleteOne
db.collection('Users').deleteOne({
  _id: new ObjectID("58ee6265b3281b0228c12f71")
}).then ((result)=>{
  console.log (result);
})

//findOneAndDelete
// db.collection('Todos').findOneAndDelete({
//  completed : false
// }).then ((result)=>{
//   console.log (result);
// })

//  db.close();
});
