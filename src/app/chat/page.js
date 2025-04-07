'use client';
import { useState } from 'react';
import Header from '../../components/Header.js';
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
        <div className={styles.chatContainer}>
            <Header />
            <h2 className={styles.title}>Chat with Tutor</h2>
            <div className={styles.chatBox}>
                {messages.map((msg, index) => (
                    <div key={index} className={`${styles.message} ${msg.sender}`}>
                        <span className="font-bold">{msg.sender}: </span>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    className={styles.input}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button
                    className={styles.contactButton}
                    onClick={handleSendMessage}
                >
                    Send
                </button>
            </div>
            <button 
                className={styles.startVideoCall} 
                onClick={() => alert('Starting Video Call...')}
            >
                Start Video Call
            </button>
        </div>
    );
};

export default ChatScreen;