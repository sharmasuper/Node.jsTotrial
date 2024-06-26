// The selectPopulatedPaths method in Mongoose allows you to 
// selectively populate certain paths of a document. 
// This is useful when you want to control which fields get 
// populated based on specific conditions.


const mongoose = require('mongoose') 
const {Schema} = mongoose   

mongoose.connect('mongodb://localhost:27017/test') 
.then(()=>{ 
    console.log("mongoose connected successfully")
})
.catch((error)=>{
    console.log("show error ",error)
})

const authorSchema = new Schema({
    name : String,
    bio : String
})

const bookSchema = new Schema({
    title : String,
    author : {
        type : Schema.Types.ObjectId,
        ref : 'Author'
    },
    content : String
})

const Author = mongoose.model('Author',authorSchema)
const Book = mongoose.model('Book',bookSchema)

const runFun = async() =>{ 
   try{
    await Author.deleteMany({})
    await Book.deleteMany({}) 
     const author = new Author ({
        name : "John Doe",
        bio : "John is seasoned author with multiple bestsellers"
     });
     await author.save()
     //book user 
     const book = new Book({
        title : 'First Book',
        author : author._id,
        content : 'This is the content of the first book'
     });
     await book.save() 
     
     console.log(book)
    //control which field get populated 
    const findBook = await Book.findOne({title : "First Book"}).populate('author')
    //jab mai populate nahi likuga tab mujai user ki id melegi or jab likuga tab user ka docs melega
  //second method
  // const findBook = await Book.findOne({title:"First Book"}).populate({path:'author',select:'name'});
  console.log("findBook schema",findBook) 
    //esai jo select karai vo milaga chahai id or name or bio
    //populate only the name field of the auther
    // const populatedBook = await findBook.selectPopulatedPaths('author', 'name').execPopulate()
    //  console.log("Populated book with selected paths ",populatedBook)
    // Populate only the name field of the author
    const findBooksSpecial = await Book.findOne({title:"First Book"}).populate({path:'author',select:['name','bio']});
    
    console.log("Populated book with selected paths ",findBooksSpecial)
   //esai bhi kar sktai h
   }catch(error){
    console.log("shoe error ",error)
   }

}
runFun()
