const { MongoClient } = require("mongodb");



export default function handler(req, res) {

const uri = "mongodb+srv://terame:Terame3212@cluster0.mkkuc71.mongodb.net/test";

const client = new MongoClient(uri);
// const name = req.params.name;
async function run() {
  try {
    const database = client.db('bot_database');
    const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    // const query = { title: 'Back to the Future' };
    const document_pdisk = await movies.findOne({"_id":2});

    // const moviess = movie["movies"]
    var strings_pdisk = document_pdisk['Movie']

    let moviesArr = [];
    let breaked = 0
    let variables = req.query.name.toLowerCase()
    for(let i = 0 ; i < strings_pdisk.length ; i++){
      let ss = await strings_pdisk[i].toLowerCase().search(variables)
      // if(ss != -1 & breaked == 0){
      //   res.send(JSON.stringify(strings_pdisk[i]))
      //   // break
      //   breaked = 1
      // }
      if(ss != -1){
        moviesArr.push(strings_pdisk[i])
          
      }
      // if (i == strings_pdisk.length ){
      //    res.send(JSON.stringify("match not found"))
      //    break
      // }
      // if(i == 1){
      //   res.send(strings_pdisk[1])
      // }
    }
    if( moviesArr.length != 0){
      res.status(200).json({"movie":moviesArr})
    }else{
      res.status(200).json({"error":"not found"})
    }
    // console.log(moviesArr)
    // res.send()
  } finally {
    // Ensures that the client will close when you finish/error
   //  await client.close();
  }
}
// run().catch(console.dir);
//    console.log(req.query.name)
   // res.status(200).json({name:req.query.name})
}