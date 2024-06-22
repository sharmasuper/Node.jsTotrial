const mongoose = require('mongoose')
const {Schema} = mongoose
mongoose.connect('mongodb://localhost:27017/myNewDatabase').then(()=>{
    console.log("mongoose connected successfully")
}).catch((err)=>{
    console.log("mongoose connected err",err)
})

//create schema 
const customIdSchema = new Schema({
    _id : Number  //_id : false means _id is disable
})

const customIdModel = mongoose.model('CustomIdModel',customIdSchema)


async function customIdExample(_id){
    try{
        const customDoc = new customIdModel({_id});
        await customDoc.save();
              
        console.log("id is that",customDoc._id) 

    }catch(err){
        console.log("show err custom Id",err)
    }
}

customIdExample("10")

/////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHATGPT EXAMPLE  ---- chatgpt example ========\\\\
///////////////////////////////////////////////////////////////


const mongoose = require('mongoose');
const { Schema } = mongoose;

// Connect to MongoDB (update the URI with your connection string)
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

// Overwriting Mongoose's default _id with your own _id
const customIdSchema = new Schema({
  _id: Number // Overwrite Mongoose's default _id
});

const CustomIdModel = mongoose.model('CustomIdModel', customIdSchema);

async function customIdExample() {
  try {
    const customDoc = new CustomIdModel();
    // This will throw an error because _id is not set
    await customDoc.save(); 
  } catch (err) {
    console.error('Error:', err.message); // document must have an _id before saving
  }

  const customDoc = new CustomIdModel({ _id: 1 });
  await customDoc.save(); // Works because _id is set
  console.log('Saved customDoc with _id:', customDoc._id);
}

// Disabling _id in subdocuments
const nestedSchemaWithoutId = new Schema(
  { name: String },
  { _id: false } // Disable _id
);

const schemaWithSubdocs = new Schema({
  subdoc: nestedSchemaWithoutId,
  docArray: [nestedSchemaWithoutId]
});

const Test = mongoose.model('Test', schemaWithSubdocs);

async function subdocsExample() {
  await Test.create({
    subdoc: { name: 'test 1' },
    docArray: [{ name: 'test 2' }]
  });

  const result = await Test.findOne().lean();
  console.log('Result:', result);
}

// Disable _id using alternative syntax
const alternativeNestedSchemaWithoutId = new Schema({
  _id: false, // Disable _id
  name: String
});

const alternativeSchemaWithSubdocs = new Schema({
  subdoc: alternativeNestedSchemaWithoutId,
  docArray: [alternativeNestedSchemaWithoutId]
});

const AlternativeTest = mongoose.model('AlternativeTest', alternativeSchemaWithSubdocs);

async function alternativeSubdocsExample() {
  await AlternativeTest.create({
    subdoc: { name: 'test 1' },
    docArray: [{ name: 'test 2' }]
  });

  const result = await AlternativeTest.findOne().lean();
  console.log('Result:', result);
}

// Run examples
async function runExamples() {
  await mongoose.connection.dropDatabase(); // Clear the database before running examples

  await customIdExample();
  await subdocsExample();
  await alternativeSubdocsExample();

  mongoose.disconnect();
}

runExamples().catch(err => console.error(err));
















