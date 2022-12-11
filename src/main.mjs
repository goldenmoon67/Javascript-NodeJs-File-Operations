
import * as read from "./funcs/read_file_from_source.js"
import * as write from "./funcs/write_file.js"


//read file
var jsonFile= read.readFile("src/data/first_file.json");
console.log(jsonFile);


//add a property to a json object
jsonFile["country"]="Turkey";
console.log(jsonFile);


//write a new json file
write.writeFile(jsonFile,"new_file","json");


//write a new txt file with new model
var list=[];//docs
for(var i=0;i<5;i++){
    var model={
        "name":`user${i}`,
        "age":i*16
    }

    list.push(model);
}
var newResponse={
    "docs":list
}
write.writeFile(newResponse,"new_txt_file","txt");


