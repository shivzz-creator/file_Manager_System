const fs = require('fs')
const path = require('path')

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
        "docx",
        "doc",
        "pdf",
        "xlsx",
        "xls",
        "odt",
        "ods",
        "odp",
        "odg",
        "odf",
        "txt",
        "ps",
        "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"]
};

function orgFn(srcPath){
    // 1.valid input
    // console.log(srcPath)
    let destPath
    if(srcPath==undefined){
        // console.log("Please provide a path")
        destPath = path.join(process.cwd(),"organized_files")
            if(!fs.existsSync(destPath)){
                fs.mkdirSync(destPath)
            }
        // return
    }else{
        //2. valid dir
        let isValid = fs.existsSync(srcPath) && fs.lstatSync(srcPath).isDirectory();
        if(isValid){
            destPath = path.join(srcPath,"organized_files")
            if(!fs.existsSync(destPath)){
                fs.mkdirSync(destPath)
            }
        }else{
            console.log("Please provide a valid path")
            return
        }
    }
    orgHelper(srcPath,destPath);
}

function orgHelper(srcPath,destPath){
    //3. Identify all children
    let childNames = fs.readdirSync(srcPath)
    // console.log(childNames);
    for(let i=0;i<childNames.length;i++){
        let childPath = path.join(srcPath,childNames[i])
        let check = fs.lstatSync(childPath).isFile();
        // console.log(childNames[i]+"=>"+check)

        //4. Identify types of all children 
        if(check){
            let category = getType(childNames[i]);
            // console.log(childNames[i]+"=> "+type);
            //5. Copy/Cut files
            sendFile(childPath,destPath,category)
        }
    }
}

function sendFile(childPath,destDirPath,category){
    let destFolderPath = path.join(destDirPath,category)
    let fileName = path.basename(childPath)
    if(fs.existsSync(destFolderPath)==false){
        fs.mkdirSync(destFolderPath)
    }

    //Copy File
    let destFilePath = path.join(destFolderPath,fileName);
    fs.copyFileSync(childPath,destFilePath); 
    // fs.unlinkSync(childPath)
    console.log(fileName+" copied!");
}

function getType(fileName){
    // console.log(fileName)
    let ext = path.extname(fileName)
    ext = ext.slice(1)
    // console.log(ext)

    for(let type in types){ //loop on object
        let typeArray = types[type]
        for(let i=0;i<typeArray.length;i++){
            if(ext == typeArray[i]){
                return type
            }
        }
    }

    return "others"
}

module.exports = {
    organize : orgFn
}