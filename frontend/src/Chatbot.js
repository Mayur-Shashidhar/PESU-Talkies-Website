import React, { useState, useRef, useEffect } from 'react';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './Chatbot.css';

// Chatbot: AI assistant for PESU Talkies website with unlimited free messages
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      message: 'Hello! Welcome to PESU Talkies! 🎬 I\'m your virtual assistant. Ask me about our projects, domains, how to join, or anything else!',
      timestamp: new Date().toISOString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Send message to backend chatbot API
  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');

    // Add user message to chat
    const newUserMessage = {
      type: 'user',
      message: userMessage,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setIsTyping(true);

    try {
      // Call backend chatbot API - Updated URL for development
      const response = await fetch('http://localhost:5000/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          userId: 'web-user-' + Date.now() // Simple user ID for analytics
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Simulate typing delay for better UX
      setTimeout(() => {
        if (data.success) {
          const botMessage = {
            type: 'bot',
            message: data.response,
            timestamp: data.timestamp
          };
          setMessages(prev => [...prev, botMessage]);
        } else {
          const errorMessage = {
            type: 'bot',
            message: 'Sorry, I\'m having trouble right now. Please try again or contact us directly! 😊',
            timestamp: new Date().toISOString()
          };
          setMessages(prev => [...prev, errorMessage]);
        }
        setIsTyping(false);
      }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds

    } catch (error) {
      console.error('Chatbot error:', error);
      setTimeout(() => {
        const errorMessage = {
          type: 'bot',
          message: 'I\'m currently offline! 🔧 Please make sure the backend server is running on port 5000, or contact us directly through our website forms. You can also visit our Projects, Domains, or Heads pages for information!',
          timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
      }, 1000);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Quick suggestion buttons
  const quickSuggestions = [
    'About PESU Talkies',
    'Our Projects',
    'How to Join',
    'Contact Info'
  ];

  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion);
    // Auto-send after a short delay
    setTimeout(() => {
      sendMessage();
    }, 100);
  };

  // Format timestamp for display
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="chatbot-container">
      {/* Chat Toggle Button */}
      <button
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
        {!isOpen && <span className="chatbot-badge">AI</span>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <img 
                src={process.env.PUBLIC_URL + '/pesu-talkies-logo.png'} 
                alt="PESU Talkies Logo" 
                className="chatbot-avatar"
              />
              <div>
                <h4>Talkies' Bot</h4>
                <span className="chatbot-status">Online</span>
              </div>
            </div>
            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${msg.type === 'user' ? 'user' : 'bot'}`}
              >
                <div className="message-content">
                  {msg.message}
                </div>
                <div className="message-time">
                  {formatTime(msg.timestamp)}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="chatbot-message bot">
                <div className="message-content typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            {/* Quick Suggestions (show only at start) */}
            {messages.length === 1 && !isTyping && (
              <div className="quick-suggestions">
                <p>Quick questions:</p>
                {quickSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="suggestion-btn"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="chatbot-input">
            <div className="input-container">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about PESU Talkies..."
                disabled={isTyping}
                maxLength={500}
              />
              <button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="send-btn"
                aria-label="Send message"
              >
                <FaPaperPlane />
              </button>
            </div>
            <div className="chatbot-footer">
              <span>🤖 AI Assistant • Powered by PESU Talkies</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
