import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

// CORS 設定，允許前端網址連線
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "ten-game-client.netlify.app", // <- 改成你 Netlify 前端網址
    methods: ["GET", "POST"],
  },
});

// ===== Socket.IO 遊戲邏輯 =====
io.on("connection", (socket) => {
  console.log("Player connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Player disconnected:", socket.id);
  });

  // 你原本 Ten 遊戲事件，像是 move、nextTurn 等
});
// =============================

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
