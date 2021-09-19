const fs = require('fs');
const student2 = {
    ID: 2,
    name: "Bach",
    age: 18,
    gender: "male",
    department: "TaTa",
};
const student1 = {
    ID: 1,
    name: "Tan",
    age: 25,
    gender: "female",
    department: "Bass",
};
// write
const writeFile = async(data) =>{
    await fs.promises.writeFile(`student.json`,JSON.stringify(data),(err) => {
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
        const data = await fs.promises.readFile(`student.json`,'utf8');
        console.log(JSON.parse(data));
    }
    catch(err){
        console.log("Không đọc được dữ liệu");
        throw err
    }
}
// update
const updateFile = async (key,obj) =>{
    var data = await fs.promises.readFile('student.json','utf8');
    data = JSON.parse(data);
    for(var i = 0; i < data.length; i++) {
        if(data[i].ID === key){
            console.log(data[i]);
            console.log("tim thay data");
            data[i] = obj;
        }
    }
    list.sort(function(a,b){
        return a.ID - b.ID
    });
    writeFile(data);
    
}
// add 
const addFile = async (obj) =>{
    const read = await fs.promises.readFile("student.json", "utf8");
    let list = JSON.parse(read);
    // khoi tao mot mang luu id
    let idList = list.map((e) => e.ID);
    // khong tim thay id do thi moi add vao, khong add trùng
    if (idList.indexOf(obj.ID) < 0) {
        list.push(obj);
        // sort ID
        list.sort(function(a,b){
            return a.ID - b.ID
        });
        writeFile(list);
        console.log("add thanh cong");
    } else {
        console.log("add khong thanh cong");
    }
}
// delete 
const deleteFile = async (key) => {
    var data = await fs.promises.readFile("student.json", "utf8");
         data = JSON.parse(data);
        for (var i = 0; i < data.length; i++) {
            if (data[i].ID === key) {
            data.splice(data.indexOf(data[i]), 1);
            console.log("delete thanh cong");
            }
        }
        writeFile(data);
};
const main = async () =>{
    await deleteFile(1);
    //await addFile(student1)
    
}
main();