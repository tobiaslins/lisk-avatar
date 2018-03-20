const micro = require('micro')
const index = require('./build/main.js')

const port = process.env.PORT || 8080
const server = micro(index)
server.listen(port)

console.log('Listening on port ' + port)
