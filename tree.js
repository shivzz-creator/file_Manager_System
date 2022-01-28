const fs = require('fs')
const path = require('path')

function treeFn(srcPath){
    // let destPath
    if(srcPath==undefined){
        treeHelper(process.cwd(),"")
        // console.log("Please provide a path")
        return
    }else{
        //2. valid dir
        let isValid = fs.existsSync(srcPath) //valid dir or file
        if(isValid){
            treeHelper(srcPath,"") // ""  to provide an indent
        }else{
            console.log("Please provide a valid path")
            return
        }
    }
    // orgHelper(srcPath,destPath);
}


function treeHelper(srcPath,indent){
    // console.log(srcPath)
    let isFile = fs.lstatSync(srcPath).isFile()
    if(isFile){
        let fileName = path.basename(srcPath);
        console.log(indent+"├──"+fileName);
    }else{
        let dirName = path.basename(srcPath);
        console.log(indent+"└──"+dirName);
        let children = fs.readdirSync(srcPath);
        for(let i=0;i<children.length;i++){
            let updatedPath = path.join(srcPath,children[i]);
            treeHelper(updatedPath,indent+"\t"); // making recursive calls
        }
    }
}

module.exports = {
    tree : treeFn
}