import express from "express"
import http from "http"
import { Server } from "socket.io"
import cors from "cors"

const app = express()
app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "*"
  }
})

/* ====== Socket.IO 遊戲邏輯（你現有的保留） ====== */

io.on("connection", (socket) => {
  console.log("Player connected:", socket.id)

  socket.on("disconnect", () => {
    console.log("Player disconnected:", socket.id)
  })

  // 你原本的 Ten 遊戲事件
})

/* ====== 必須這樣寫 ====== */
const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
