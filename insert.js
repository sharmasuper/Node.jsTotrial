const {dbConnect} = require('./mongodb')

const insert = async() =>{
    const data = await dbConnect()
    const result = await data.insertMany([
        {
             'name':"Laddu",
             'Brand':"LaxmiNarayan",
             'price':"500"
        },
        {
            'name':"Ms",
            'Brand':"LaxmiMs",
            'price':"1000"
       }
    ])

    console.log("insert function",result.acknowledged)
} 
insert()
