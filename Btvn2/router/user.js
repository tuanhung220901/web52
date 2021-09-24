const express = require('express');
let userRouter = express.Router();
const {readAll,searchFile,addFile,deleteFile,updateFile,updateEachPart}  = require('../model/crud');
userRouter.get('/',async (req,res) =>{
    // res.send("hihi");
    try{
        const {name = '',age = ''} = req.query;
        if(!name && !age){
            console.log("query"+res.query);
            const data  = await readAll();
            res.json(data);
            return 1;
        }
        else {
            const data = await searchFile({name,age});
            res.json(data);
            return 1;
        }
        
    }catch(err){
        console.log("err",err);
        res.status(500).json({
            msg: err
        })

    }
})
userRouter.post('/',async (req,res) =>{
    try{
        const body = req.body;
        console.log("body",body);
        await addFile(body);
        res.json("add thành công");
    }catch(err){
        console.log("err",err);
        res.status(500).json({
            msg: err
        })
    }
})
userRouter.delete('/:userID',async (req,res) =>{
    try{
        const id = req.params.userID;
        console.log(id);
        await deleteFile(id);
        res.json({
            msg:`delete thanh cong userId: ${id}`
        })
    }catch(err){
        console.log("err",err);
        res.status(500).json({
            msg: err
        })
    }
})
userRouter.put('/:userID',async (req,res) =>{
    try{
        const id = req.params.userID;
        const body = req.body;
        console.log("body",body);
        await updateFile(id,body);
        res.json("uppdate thành công");
    }catch(err){
        console.log("err",err);
        res.status(500).json({
            msg: err
        })
    }
})
userRouter.patch('/:userID',async (req,res) =>{
    try{
        const id = req.params.userID;
        const body = req.body;
        console.log("body",body);
        await updateEachPart(id,body);
        res.json("uppdate thành công");
    }catch(err){
        console.log("err",err);
        res.status(500).json({
            msg: err
        })
    }
})
module.exports = userRouter;