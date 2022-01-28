// Here we will be creating script commands which would be helpful in managing the Files and directories 
let command  = process.argv[2] ;
let src_path = process.argv[3] ;
let specified_dest_path = process.argv[4] ;
const help = require("./help")
const org = require("./organize")
const tree = require("./tree")
const cpy = require("./copy")
const ct  = require("./cut_paste")

switch(command){
        case "help" : help.help_function()
        break ;
        case "organize" : org.organize(src_path)
        break ;
        case "tree" : tree.tree()
        break ;
        case "copy" : cpy.make_copy(src_path,specified_dest_path)
        break ;
        case"cut-paste" : ct.cut_paste(src_path,specified_dest_path)
        break ;
        default :
        console.warn(`Please enter a valid command
                Get started with node main.js helpto see all commands`) ;

}