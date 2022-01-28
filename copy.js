const fs = require("fs") ;
const path = require("path") ;


function copy(childPath , destFolderPath){
    let fileName = path.basename(childPath)

    //Copy File
    let destFilePath = path.join(destFolderPath,fileName);
    fs.copyFileSync(childPath,destFilePath); 
    // fs.unlinkSync(childPath)
    console.log(fileName+" copied!");

}
module.exports ={
    "make_copy" : copy 
}





