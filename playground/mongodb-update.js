//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err){
    return console.log ('Unable to connect to Mongodb Server');
  }
  console.log ('Connected to Mongodb Server');

db.collection('Todos').findOneAndUpdate(
  {_id: ew ObjectID('58ee600a4ec0e92ee091b66c')},
  {
    set: {name:'XAXAXA'}
  },
  {
    returnOriginal: false
  }
).then((result)=>{
  console.log(result);
});

//  db.close();
});
