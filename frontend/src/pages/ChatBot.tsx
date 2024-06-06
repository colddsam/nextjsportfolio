// pages/index.tsx
import { useState, ChangeEvent, KeyboardEvent } from 'react';
import axios from 'axios';

interface Message {
  sender: 'user' | 'assistant';
  text: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;
    const userMessage: Message = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await axios.post('/api/chat', { message: input });
      const botMessage: Message = { sender: 'assistant', text: response.data.reply };
      setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if ( e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Chatbot</h1>
      <div style={{ border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        style={{ width: 'calc(100% - 22px)', padding: '10px', marginTop: '10px' }}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage} style={{ display: 'none' }}>Send</button>
    </div>
  );
}
