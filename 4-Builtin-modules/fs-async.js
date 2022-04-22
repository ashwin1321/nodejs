// fs = file system

const {readFile,writeFile} = require('fs');

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
            console.log('result');

        });
    });
    // console.log(result);

    });
