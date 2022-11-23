const EventEmitter = require('events');

const myEmitter = new EventEmitter()

myEmitter.on('newSale', () => {
    console.log('A new sale occur')
})

myEmitter.emit('newSale')



myEmitter.on('newSale2', (price) => {
    console.log(`A new sale occur total of: ${price}`)
})

myEmitter.emit('newSale2', 599.99)