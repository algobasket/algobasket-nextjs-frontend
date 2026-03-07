'use client'

import { useState, useEffect, useRef } from 'react'

export default function Chat() {
  const [isActive, setIsActive] = useState(false)
  const [messages, setMessages] = useState<Array<{ sender: string; message: string }>>([
    { sender: 'AI', message: 'Welcome! How can I help you?' },
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const toggleChat = () => {
    setIsActive(true)
  }

  const closeChat = () => {
    setIsActive(false)
  }

  const addMessage = (sender: string, message: string) => {
    setMessages((prev) => [...prev, { sender, message }])
  }

  const sendMessageToAI = async (message: string) => {
    try {
      const response = await fetch('/api/chat-webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: message }),
      })

      const data = await response.json()
      return data.reply || "Sorry, I didn't understand that."
    } catch (error) {
      console.error('Error fetching AI response:', error)
      return 'Error: Unable to reach AI server.'
    }
  }

  const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      const message = inputValue.trim()
      if (message === '') return

      addMessage('Me', message)
      setInputValue('')

      const aiResponse = await sendMessageToAI(message)
      addMessage('AI', aiResponse)
    }
  }

  const handleSend = async () => {
    const message = inputValue.trim()
    if (message === '') return

    addMessage('Me', message)
    setInputValue('')

    const aiResponse = await sendMessageToAI(message)
    addMessage('AI', aiResponse)
  }

  return (
    <>
      <div className={`chat-window ${isActive ? 'active' : ''}`} id="chatWindow">
        <header className="chat-header">
          <h4 className="chat-title">Ask Algobasket AI</h4>
          <button className="chat-close-btn" id="closeChat" onClick={closeChat} aria-label="Close chat">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>
        </header>

        <div className="chat-messages" id="chatMessages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-bubble ${msg.sender === 'Me' ? 'chat-bubble-user' : 'chat-bubble-ai'}`}>
              <span className="chat-bubble-sender">{msg.sender}</span>
              <p className="chat-bubble-text">{msg.message}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-wrap">
          <input
            type="text"
            className="chat-input"
            id="userInput"
            placeholder="Ask me anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="chat-send-btn" onClick={handleSend} aria-label="Send message">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>

        <footer className="chat-footer">Powered by Algobasket AI</footer>
      </div>

      {!isActive && (
        <div className="chat-toggle" id="toggleChat" onClick={toggleChat}>
          <img src="/assets/ask-chat-logo.png" alt="Open chat" />
        </div>
      )}
    </>
  )
}

