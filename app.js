const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',() => {
    consonle.log(`data received`)
})

customEmitter.emit('response')