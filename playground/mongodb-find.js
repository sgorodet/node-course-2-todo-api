//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err){
    return console.log ('Unable to connect to Mongodb Server');
  }
  console.log ('Connected to Mongodb Server');

// db.collection ('Todos').find({_id: new ObjectID('58ee647e0d3a53caaa6eae4f')})
// .toArray().then((docs)=>{
//   console.log('Todos');
//   console.log (JSON.stringify (docs, undefined, 2))
// }, (err)=>{
//   console.log('Unable to fetch tokens.', err);
// });
// db.collection ('Todos').find()
//   .count().then((count)=>{
//   console.log(`Todos count: ${count}`);
//   console.log (JSON.stringify (docs, undefined, 2))
// }, (err)=>{
//   console.log('Unable to fetch tokens.', err);
// });
db.collection ('Users').find({name: 'Sana Raytman'})
 .count().then((count)=>{
   console.log(`Sana Raytman ${count}`);
 }, (err)=>{
   console.log('Unable to fetch tokens.', err);
});



//  db.close();
});
