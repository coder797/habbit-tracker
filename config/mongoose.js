const mongoose=require('mongoose');

// mongoose.connect('mongodb://localhost/habit_tracker');
mongoose.connect('mongodb+srv://rishabh997:krishna@cluster0.elso0f3.mongodb.net/tracker?retryWrites=true&w=majority');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to Mongo db"));

db.once('open',function(){
        console.log("connected to database :: mongo db");
});

module.exports=db;
