const path = require('path')

products_path = '/data/products/products.json'
products_file = path.basename(products_path)


console.log(products_file) // products.json


data_folder = '/data/'
products_folder = '/products'
products_file = 'products.json'
const full_path = path.join(data_folder, products_folder, products_file)

console.log(full_path) // /data/products/products.json

const abs_path = path.resolve(__dirname, 'data', 'products', 'products.json')

console.log(abs_path)

const fs = require('fs')


// Reading file sync and async
const data = fs.readFileSync('test-text.txt', 'utf-8')
console.log(data) // file content
console.log('The file has been read')

fs.readFile('test-text.txt', 'utf-8', (err, data) => {
    console.log(data)
})
console.log('The file has been read')

// Writing file
const text = 'This is my Hello World file'

fs.writeFile('created-text-file.txt', text, 'utf-8', (err) => {
    console.log('File created')
})

fs.readFile('created-text-file.txt', 'utf-8', (err, data) => {
    console.log(data)
})

fs.readFile('ssss.txt', 'utf-8', (err, data) => {
    if (err)
        console.log(err)
    else
        console.log(data)
})

const fs2 = require('fs').promises

const start = async () => {
    const data = await fs2.readFile('test-text.txt', 'utf8')
    console.log(data)
}

start()

// Copy file
fs.copyFile('test-text.txt', 'test-text2.txt', (err) => {
    if (err) return console.error(err)
    console.log('File copied')
})

// Creating a folder
fs.mkdir('test-folder', (err) => {
    console.log('test-folder folder created')
})

// List files in a folder
fs.readdir('.', (err, files) => {
    console.log(files)
})

// Rename file
fs.rename('test-text.txt', 'test-text.txt', (err) => {
    if (err) return console.log(err)
    console.log('File renamed')
})