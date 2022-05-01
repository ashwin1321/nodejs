// os modules
// path module
// fs module
// http module

const os = require('os');

// info about current user
const user =  os.userInfo();
console.log(user);

// method returns the system uptime in seconds.
const uptime = os.uptime();
console.log(`the system is up for ${uptime} seconds`);

const currentOs = {
    name: os.type(),
    release : os.release(),
    totalMemory: os.totalmem(),
    freememory: os.freemem(),
    platform: os.platform()
}
console.log(currentOs);
