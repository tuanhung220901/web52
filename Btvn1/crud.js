const fs = require('fs');
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
// tim kiem theo key
const findid = async (key) => {
    var list = await fs.promises.readFile(`student.json`,'utf8');
    list = JSON.parse(list);
    console.log(list);
    for(var i = 0; i < list.length; i++) {
        console.log(list[i].name);
        // if(data[i].name === key) {
        //     console.log("tim thay data");
        //     return true;
        // }
    }
    console.log("không tìm thấy data");
    // return false;
}
const find = async (key) =>{
    var data = await fs.promises.readFile(`student.json`,'utf8');
    console.log(data);
    var list = JSON.parse(data);
    const found = list.filter((data) => JSON.parse(data).id.includes(key))
    console.log(found);
    if(found.length > 0){
        console.log("tim thay data");
        return true;
    }
    else {
        console.log("Khong tim thay");
        return false;
    }    
}
// const updateFile = async (key,obj) =>{
//     var data = await fs.promises.readFile('student.json','utf8');
//     data = data.map((data) =>{
//         if(find(key) === true){

//         }
//     });
// }
const main = async () =>{
    // await creatFile();
    // await readAll();
    findid();
    // updatestudentbyName("Trai Việt Nam", {
    //   id: "",
    //   name: "Củ khoai tây",
    //   age: "5",
    //   gender: "vô tính",
    //   department: "củ",
    // });
}
main();