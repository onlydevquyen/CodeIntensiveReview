import React, { useState, useRef, useEffect } from "react";
import { Input, Button, Card, Spin, Alert, List, Avatar } from "antd";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useAuth } from "../hooks";
const { user } = useAuth;
const { TextArea } = Input;

// Thay bằng API key của bạn (khuyến cáo dùng .env)
const API_KEY = import.meta.env.VITE_GEMINI_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// Khởi tạo chat session để giữ lịch sử cuộc trò chuyện
const chat = model.startChat({
  history: [
    {
      role: "model",
      parts: [{ text: `` }],
    },
  ],
  generationConfig: {
    maxOutputTokens: 1000, // Giới hạn token để tránh quá dài
  },
});

function GeminiChat() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]); // Lưu lịch sử: [{ role: 'user' | 'model', content: string }]
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null); // Để scroll xuống dưới cùng

  const handleSend = async () => {
    if (!prompt.trim()) return;

    // Thêm tin nhắn user vào lịch sử
    const newMessages = [...messages, { role: "user", content: prompt }];
    setMessages(newMessages);
    setPrompt(""); // Xóa input
    setLoading(true);
    setError("");

    try {
      // Gửi prompt mới đến chat session (tự động giữ context từ lịch sử)
      const result = await chat.sendMessage(prompt);
      const responseText = result.response.text();

      // Thêm phản hồi từ model vào lịch sử
      setMessages([...newMessages, { role: "model", content: responseText }]);
    } catch (err) {
      setError("Lỗi kết nối Gemini. Kiểm tra API key hoặc mạng.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Tự động scroll xuống dưới cùng khi có tin nhắn mới
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", padding: "0 16px" }}>
      <h2 style={{ textAlign: "center" }}>Chat với Gemini</h2>

      <Card style={{ height: "400px", overflowY: "auto", marginBottom: 16 }}>
        <List
          itemLayout="horizontal"
          dataSource={messages}
          renderItem={(msg) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar>{msg.role === "user" ? "U" : "G"}</Avatar>}
                title={msg.role === "user" ? "Bạn" : "Gemini"}
                description={
                  <div style={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
                    {msg.content}
                  </div>
                }
              />
            </List.Item>
          )}
        />
        <div ref={messagesEndRef} />
      </Card>

      {loading && (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <Spin tip="Đang xử lý..." />
        </div>
      )}

      {error && (
        <Alert
          message={error}
          type="error"
          showIcon
          style={{ marginBottom: 16 }}
        />
      )}

      <TextArea
        rows={3}
        placeholder="Nhập câu hỏi của bạn... (Enter để gửi)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        disabled={loading}
      />

      <div style={{ marginTop: 16, textAlign: "right" }}>
        <Button
          type="primary"
          size="large"
          onClick={handleSend}
          loading={loading}
          disabled={!prompt.trim()}
        >
          Gửi
        </Button>
      </div>
    </div>
  );
}

export default GeminiChat;
