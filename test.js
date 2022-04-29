const {readFile} = require('fs')


const getText = (path) =>{
    // promise has 2 parameters resolve and reject/
    return new Promise((resolve, reject)=> {
        readFile(path,'utf8', (err,data) =>{
            if(err){
                reject()
            }
            else{
                resolve(data)
            }
        })

    })
}

getText('./content/first.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err))


