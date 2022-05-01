// Events -- heavily used in node

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on listens event
// emit omits event

customEmitter.on('response',(nmae,id)=>{
    console.log(`data recieved ${nmae} with id: ${id}`);
})

customEmitter.on('response',()=>{
    console.log(`some other logic here`);
})

customEmitter.emit('response','john',34)        // order ma garxa kaam. ek choti listen garesi omit garxa ani arko listen garxa

