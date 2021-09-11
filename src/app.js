const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/ronald")
.then(()=> console.log("Connected"))
.catch((err) =>console.log(err))

const userData = new mongoose.Schema({
    name : String,
    age : Number,
    address : String,
    date : {
        type : Date,
        default: Date.now
    }
});

const Userlist = new mongoose.model("User",userData);

const insertingData =async () =>{
    try{
        const data= new Userlist(
            {
                name : "Ronald",
                age : 20,
                address :"30 Mazumnagar Society",

            }
        )
        const result = await data.save();
        console.log(result);

    }
    catch(err)
    {
        console.log(err)
    }
}
insertingData();
 