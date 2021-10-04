const MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://hung2209:IceTYY0GA2z4Daxr@cluster0.29mim.mongodb.net/bai4?retryWrites=true&w=majority";
var mongo = new MongoClient(url, { useNewUrlParser: true });
mongo.connect((err, db) => {
    if (err) throw err;
    console.log("done");
    var dbo = db.db("bai4");
    // khởi tạo bảng mongodbs

        // dbo.createCollection("Person",(err,res)=>{
        //     if(err) throw err;
        //     console.log("Khoi tao thanh cong");
        //     console.log(res);
        // })


    // insert obj,array cho mongodb

        // var arr = [
        //     {
        //         name:"Hung",
        //         age:19
        //     },
        //     {
        //         name:"Bach",
        //         age:18
        //     }
        // ]
        //var obj = {name:"Nguyen Van A", age : 20};
        // // insert 1 obj
            // dbo.collection("Person").insertOne(obj,(err,res)=>{
            //     if(err) throw err;
            //     console.log("Insert obj thanh cong....");
            //     console.log(res);
            // })
        // // insert 1 arr
            // dbo.collection("Person").insertMany(arr,(err,res)=>{
            //     if(err) throw err;
            //     console.log("Insert Array thanh cong....");
            //     console.log(res);
            // })
    


    // // read data mongodb

    //     dbo.collection("Person").find().toArray((err,objs)=>{
    //         if(err) throw err;
    //         if(objs.length != 0)
    //             console.log("Doc du lieu thanh cong....");
    //         console.log(objs);
    //     })


    // update du lieu 
    var oleValue = {name:"Tada"};
    var newValueObj= {
        $set : {name:"Nguyen Van A", age:12},
    };
    // var newValueArray = [
    //     {$set : [
    //         {name: "Manh", age:18},
    //         {name: "Huong", age:18},
    //         {name: "Chanh", age:18},
    //         {name: "Cam", age:18},
    //     ]}
    // ]
    //     //update 1 du lieu

            dbo.collection("Person").updateOne(oleValue,newValueObj,(err,res)=>{
                if(err) throw err;
                console.log("Update du lieu thanh cong....");
                console.log(res);
            })
    //     // update nhieu du lieu
            // dbo.collection("Person").updateMany(oleValue,newValueObj,(err,res)=>{
            //     if(err) throw err;
            //     console.log("Update du lieu thanh cong....");
            //     console.log(res);
            // })

    // delete du lieu mongodb
    // var query = {name:"Hung"}
    //     // chi xoa 1 obj dau tien co query
    //     dbo.collection("Person").deleteOne(query,(err,res)=>{
    //         if(err) throw err;
    //         console.log("Xoa thanh cong!!!");
    //     })
    //     // xoa toan bo obj co query
    //     dbo.collection("Person").deleteMany(query,(err,res)=>{
    //         if(err) throw err;
    //         console.log("Xoa thanh cong!!!");
    //     })
})