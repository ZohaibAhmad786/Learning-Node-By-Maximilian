var mongoose = require("mongoose")

mongoose
  .connect("mongodb://localhost:27017/test", {
    // useNewUrlParser: true,
    // useCreatedIndex: true,
    // useFindAndModify: true,
  }).then(()=>{
    console.log("DB Succesfully connected")
  })


const  exerciseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is Required"],
  },
  content: {
    type: String,
    required: [true, "Title is Required"],
  },
  author: {
    type: String,
    required: [true, "Title is Required"],
  },

})

const Excercise = mongoose.model("Excercise", exerciseSchema)
module.exports= Excercise