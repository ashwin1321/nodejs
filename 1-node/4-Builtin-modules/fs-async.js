// fs = file system

const {readFile,writeFile} = require('fs');

console.log('start');
readFile('../content/first.txt','utf8',(err,result)=>{ // readFile(path,callback)
    if(err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('../content/second.txt','utf8',(err,result)=>{
        if(err) {
            console.log(err);
            return
        }
        const seconf = result;
        writeFile('../content/result-async.txt',`Here is the result: \n${first}\n${seconf}`,(err,result)=>{
            if(err) {
                console.log(err);
                return
            }
            console.log('done with this task');


        });
    });
    // console.log(result);

    });

    console.log("Starting the next task");
