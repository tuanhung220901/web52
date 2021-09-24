const fs = require('fs');
const path = require('path')
// const student2 = {
//     ID: 2,
//     name: "Bach",
//     age: 18,
//     gender: "male",
//     department: "TaTa",
// };
// const student1 = {
//     ID: 1,
//     name: "Tan",
//     age: 25,
//     gender: "female",
//     department: "Bass",
// };
// write
const writeFile = async(data) =>{
    await fs.promises.writeFile(path.resolve(__dirname,'student.json'),JSON.stringify(data),(err) => {
        if (err) {
            throw err;
        }
    });
}
// creat
const creatFile = async () => {
    const isexist = await fs.existsSync(`student.json`)
    if (!isexist) {
        await fs.promises.writeFile(`student.json`,JSON.stringify([""]),(err) => {
            if (err) {
                throw err;
                console.log("Không tạo được file");
            }
        });
        console.log("Đã khởi tạo tệp thành công");
    } else console.log("Tệp đã tồn tại");
};
// read
const readAll = async () =>{
    try{
        let data = await fs.promises.readFile(path.resolve(__dirname,'student.json'),'utf8');
        data = JSON.parse(data);
        return data;
    }
    catch(err){
        console.log("Không đọc được dữ liệu");
        throw err
    }
}
// update
const updateFile = async (key,obj) =>{
    var data =  await fs.promises.readFile(path.resolve(__dirname,'student.json'),'utf8');
    data = JSON.parse(data);
    console.log("data",data);
    for(var i = 0; i < data.length; i++) {
        if(data[i].ID == key){
            console.log("tim thay data");
            data[i] = obj;
        }
    }
    data.sort(function(a,b){
        return a.ID - b.ID
    });
    writeFile(data);
    
}
const updateEachPart = async (id,obj) =>{
    var data =  await fs.promises.readFile(path.resolve(__dirname,'student.json'),'utf8');
    data = JSON.parse(data);
    const newData = data.map(i => {
        if (i.ID == id) {
            return {
                ...i,
                ...obj,
            }
        }
        else return i;
    });
    data.sort(function(a,b){
        return a.ID - b.ID
    });
    writeFile(newData);
    
}
// add 
const addFile = async (obj) =>{
    const read = await fs.promises.readFile(path.resolve(__dirname,'student.json'),'utf8');
    let list = JSON.parse(read);
    // khoi tao mot mang luu id

    // khong tim thay id do thi moi add vao, khong add trùng
   // console.log("obj",obj);
        list.push(obj);
        // sort ID
        list.sort(function(a,b){
            return a.ID - b.ID
        });
        writeFile(list);
        console.log("add thanh cong");
}
// delete 
const deleteFile = async (key) => {
    var data = await fs.promises.readFile(path.resolve(__dirname,'student.json'),'utf8');
         data = JSON.parse(data);
         console.log(data);
        for (var i = 0; i < data.length; i++) {
            if (data[i].ID == key) {
            data.splice(data.indexOf(data[i]), 1);
            }
        }
        writeFile(data);
        return 1;
};
const searchFile = async (obj) => {
    try{
        let data = await readAll();
        console.log("obj", obj);
        const dataConvert = data.filter(user =>{
            if(user.name){
                console.log(obj.age);
                if(user.age == obj.age) console.log("yes");
                return(user.name == obj.name || user.age == obj.age);
            }
            else{
                return (user.age == obj.age);  
            } 
        })
        return dataConvert;

    }catch(err){
        throw err;
    }
}
module.exports ={
    readAll,
    searchFile,
    addFile,
    deleteFile,
    updateFile,
    updateEachPart,
}