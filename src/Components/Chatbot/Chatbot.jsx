import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const newUserMessage = { role: "User", text: input.trim() };
    setMessages(prev => [...prev, newUserMessage]);
    setInput("");
    setIsLoading(true);

    const context = messages
      .concat(newUserMessage)
      .map(m => `${m.role}: ${m.text}`)
      .join("\n");

    try {
      const response = await axios.post("http://localhost:5000/chat", {
        context,
        question: input.trim(),
      });

      setMessages(prev => [
        ...prev,
        { role: "AI", text: response.data.response }
      ]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { 
          role: "AI", 
          text: "I apologize, but I encountered an error. Please try again.",
          isError: true 
        }
      ]);
      console.error("API Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 z-50 p-4 rounded-full bg-green-500 text-white shadow-lg 
          hover:bg-green-600 transition-all duration-300 transform ${isOpen ? 'rotate-45' : 'hover:scale-110'}`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <span className="text-xl">{isOpen ? "✖" : "💬"}</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 bg-white shadow-xl rounded-lg overflow-hidden z-40 
          transition-all duration-300 ease-in-out transform animate-slide-up">
          <div className="flex flex-col h-[32rem]">
            <div className="bg-green-500 text-white p-4">
              <h2 className="text-lg font-semibold">Grobot</h2>
            </div>

            {/* Messages container with hidden scrollbar */}
            <div className="flex-1 p-4 space-y-4 bg-gray-50 overflow-y-auto scrollbar-hide">
              <style>
                {`
                  .scrollbar-hide {
                    -ms-overflow-style: none;  /* Internet Explorer and Edge */
                    scrollbar-width: none;     /* Firefox */
                  }
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;             /* Chrome, Safari and Opera */
                  }
                `}
              </style>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "User" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.role === "User"
                        ? "bg-green-500 text-white"
                        : msg.isError
                        ? "bg-red-100 text-red-700"
                        : "bg-white shadow-md"
                    }`}
                  >
                    <div className="text-sm whitespace-pre-wrap">{msg.text}</div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 p-3 rounded-lg animate-pulse">
                    Thinking...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t">
              <div className="flex items-center space-x-2">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 
                    focus:ring-green-400 max-h-32"
                  rows={1}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 
                    transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;