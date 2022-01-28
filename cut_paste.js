const fs = require("fs") ;
const path = require("path") ;


function cut(childPath , destFolderPath){
    let fileName = path.basename(childPath)
    if(destFolderPath==undefined || destFolderPath==''){
        console.error("provide a valid path")
    }

    //Copy File
    let destFilePath = path.join(destFolderPath,fileName);
    fs.copyFileSync(childPath,destFilePath); 
    fs.unlinkSync(childPath)
    console.log(fileName+" copied!");

}
module.exports ={
    cut_paste : cut 
}