'use client';
import { useState } from 'react';
import styles from './chat.module.css';

const ChatScreen = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            setMessages([...messages, { text: inputMessage, sender: 'Student' }]);
            setInputMessage('');
            // Here you can also send the message to the backend
        }
    };

    return (
        <div className="chat-container p-4">
            <h2 className="text-xl">Chat with Tutor</h2>
            <div className="chat-box border border-gray-300 rounded p-2 h-64 overflow-y-auto mb-2">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender === 'Student' ? 'text-right' : 'text-left'}`}>
                        <span className="font-bold">{msg.sender}: </span>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="input-container flex">
                <input
                    type="text"
                    className="border rounded p-2 flex-grow"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button
                    className="p-2 bg-blue-500 text-white rounded ml-2"
                    onClick={handleSendMessage}
                >
                    Send
                </button>
            </div>
            <button className="mt-4 p-2 bg-red-500 text-white rounded" onClick={() => alert('Starting Video Call...')}>
                Start Video Call
            </button>
        </div>
    );
};

export default ChatScreen;