const fs = require('fs')

module.exports.writeDatabase = (data) => {
    return new Promise((resolve,reject) => {
        try{
            fs.writeFile(`../config/database.json`, JSON.stringify(data), (error) => {
                if(error){
                    reject(error);
                    return;
                }
    
                resolve(true);
          });
        }
        catch(error){
            console.log(error);
            reject(error);
        }
    });
}
module.exports.readDatabase = () => {
    return new Promise((resolve,reject) => {
        try{
            fs.readFile('../config/database.json', "utf8", function (error,data) {
                if(error){
                    reject(error);
                    return;
                }
    
                resolve(JSON.parse(data));
          });
        }
        catch(error){
            console.log(error);
            reject(error);
        }
    });
}
