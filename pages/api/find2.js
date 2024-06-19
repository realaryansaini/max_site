const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.



export default function handler(req, res) {
    const uri = "mongodb+srv://terame:Terame3212@cluster0.mkkuc71.mongodb.net/test";
    const client = new MongoClient(uri);
    const { name } = req.query;
    // console.log(name)

    async function run(name) {
        
          const database = client.db('bot_database');
          const movies = database.collection('movies');
          // Query for a movie that has the title 'Back to the Future'
          // const query = { title: 'Back to the Future' };
          const document_pdisk = await movies.findOne({"_id":2});
      
          // const moviess = movie["movies"]
          const strings_pdisk = document_pdisk['Movie']
      
          let moviesArr = [];
          // let breaked = 0
          let variables = name.toLowerCase()
          for(let i = 0 ; i < strings_pdisk.length ; i++){
            let ss = await strings_pdisk[i].toLowerCase().search(variables)
            
            if(ss != -1){
              moviesArr.push(strings_pdisk[i])
                
            }
            
          }

          if( moviesArr.length != 0){
            // res.send(JSON.stringify(moviesArr))
            res.status(200).json({movies:moviesArr})
          }else{
            // res.send(JSON.stringify("match not found"))
            res.status(200).json({error_message:"not found"})
          }
          // console.log(moviesArr)
          // res.send()
        
      }



run(name)
    
    
}









// // const name = req.params.name;
// async function run() {
//   try {
//     const database = client.db('bot_database');
//     const movies = database.collection('movies');
//     // Query for a movie that has the title 'Back to the Future'
//     // const query = { title: 'Back to the Future' };
//     const document_pdisk = await movies.findOne({"_id":2});

//     // const moviess = movie["movies"]
//     const strings_pdisk = document_pdisk['Movie']

//     let moviesArr = [];
//     // let breaked = 0
//     let variables = req.params.slug.toLowerCase()
//     for(let i = 0 ; i < strings_pdisk.length ; i++){
//       let ss = await strings_pdisk[i].toLowerCase().search(variables)
//       // if(ss != -1 & breaked == 0){
//       //   res.send(JSON.stringify(strings_pdisk[i]))
//       //   // break
//       //   breaked = 1
//       // }
//       if(ss != -1){
//         moviesArr.push(strings_pdisk[i])
          
//       }
//       // if (i == strings_pdisk.length ){
//       //    res.send(JSON.stringify("match not found"))
//       //    break
//       // }
//       // if(i == 1){
//       //   res.send(strings_pdisk[1])
//       // }
//     }
//     if( moviesArr.length != 0){
//       res.send(JSON.stringify(moviesArr))
//     }else{
//       res.send(JSON.stringify("match not found"))
//     }
//     // console.log(moviesArr)
//     // res.send()
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
// });


