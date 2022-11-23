const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res) => {
    // No need to load the entire file to memory
    // fs.readFile('data.txt', (err, data) => {
    //    if (err) console.log(err)
    //    res.end(data);
    // })

    // Create a Readable Streams
    const readable = fs.createReadStream('test-text.txt')

    // Pipe the Stream chunk to a writable Stream
    readable.pipe(res);
    // The readable.pipe() method attaches a "writeable" Stream to the "readable", which automatically switches it to
    // fluid mode and transfers all of its data to the attached "writable".
})