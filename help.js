function help_function(){

    console.log(
        `   node main.js help --list all commands and their use
        node main.js organize <Path> organizes the file structure according to their file extension
        node main.js tree <Path>  displays file structures in tree form
        node main.js copy <Src path of file > <Destination > path ;
        node main.js copy <Src path of file > <Destination > path ;
        `
    )
}

module.exports ={
    "help_function" : help_function 
}