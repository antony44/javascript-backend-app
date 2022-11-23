const fs = require('fs')

console.log('First task started')

fs.readFile('./data/products.json', 'utf8', (err, data) => {
    console.log(data)
    console.log('First task ended')
})

console.log('Second task started')



console.log('First')

setTimeout(() => {
    console.log('Second')
}, 0)

console.log('Third')


const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Home page</h1>')
    } else if (req.url === '/about') {
        res.end('<h1>About page</h1>')

        let i = 0
        do {
            i++
        } while (i < 10000000000)

    } else {
        res.end('page not found')
    }
})

server.listen(5001, 'localhost', () => {
    console.log('Server is listening at localhost on port 5000')
})