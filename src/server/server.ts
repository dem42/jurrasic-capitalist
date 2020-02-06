import express from 'express'
import { createServer } from 'http'
import socketio from 'socket.io'
import path from 'path'

const app = express()
const http = createServer(app)
const io = socketio(http)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'html', 'index.html'))
})

app.get('/dist/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'dist', 'bundle.js'))
})

io.on('connection', socket => {
    console.log('a user connected')
})

const port = 3000
http.listen(port, () => {
    console.log(`listening on *:${port}`)
})