'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

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

  return (
    <>
      <div className={`chat-window ${isActive ? 'active' : ''}`} id="chatWindow">
        <button className="close-btn" id="closeChat" onClick={closeChat}>
          &times;
        </button>
        <h4>Ask Algobasket AI</h4>
        <div id="chatMessages" style={{ height: '476px', overflowY: 'auto', padding: '10px' }}>
          {messages.map((msg, index) => (
            <p key={index}>
              <strong>{msg.sender}:</strong> {msg.message}
            </p>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <input
          type="text"
          className="form-control"
          id="userInput"
          placeholder="Ask me anything.."
          style={{ borderRadius: 0, margin: '5px 0 0 0' }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <p className="text-center" style={{ fontSize: '12px', marginTop: '1px' }}>
          Powered by Google Dialogflow AI
        </p>
      </div>

      {!isActive && (
        <div
          style={{ position: 'fixed', bottom: '-35px', right: '5px', cursor: 'pointer' }}
          id="toggleChat"
          onClick={toggleChat}
        >
          <img src="/assets/ask-chat-logo.png" alt="Chat" style={{ width: '200px' }} />
        </div>
      )}
    </>
  )
}

