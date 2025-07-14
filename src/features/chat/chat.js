"use client";

import React, { useEffect, useRef, useState } from "react";
import "./chat.css";

function Chat() {
  const textareaRef = useRef(null);
  const sendBtnRef = useRef(null);
  const chatAreaRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const addMessage = (content, isUser = false) => {
    const chatArea = chatAreaRef.current;
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${isUser ? "user" : ""}`;

    const avatar = document.createElement("div");
    avatar.className = `message-avatar ${isUser ? "user-avatar" : "ai-avatar"}`;
    avatar.textContent = isUser ? "U" : "CQ";

    const messageContent = document.createElement("div");
    messageContent.className = "message-content";
    messageContent.innerHTML = content;

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(messageContent);
    chatArea.appendChild(messageDiv);
    chatArea.scrollTop = chatArea.scrollHeight;
  };

  const addTypingIndicator = () => {
    const chatArea = chatAreaRef.current;
    const messageDiv = document.createElement("div");
    messageDiv.className = "message";
    messageDiv.id = "typingIndicator";

    const avatar = document.createElement("div");
    avatar.className = "message-avatar ai-avatar";
    avatar.textContent = "CQ";

    const typingDiv = document.createElement("div");
    typingDiv.className = "message-content typing-indicator";
    typingDiv.innerHTML =
      '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(typingDiv);
    chatArea.appendChild(messageDiv);
    chatArea.scrollTop = chatArea.scrollHeight;
  };

  const removeTypingIndicator = () => {
    const typingIndicator = document.getElementById("typingIndicator");
    if (typingIndicator) typingIndicator.remove();
  };

  const simulateAIResponse = (userMessage) => {
    const responses = [
      "Analyzing your request. Pulling insights...",
      "Fetching data from connected sources...",
      "Here’s what your data reveals...",
      "Processing your input, one moment...",
      "Key patterns found! Displaying results..."
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    addTypingIndicator();
    setIsTyping(true);

    setTimeout(() => {
      removeTypingIndicator();
      addMessage(randomResponse);
      setIsTyping(false);
      if (sendBtnRef.current) sendBtnRef.current.disabled = false;
    }, Math.random() * 2000 + 2000);
  };

  const sendMessage = () => {
    const textarea = textareaRef.current;
    const sendBtn = sendBtnRef.current;
    const input = textarea.value.trim();
    if (input && !isTyping) {
      addMessage(input, true);
      textarea.value = "";
      textarea.style.height = "auto";
      sendBtn.disabled = true;
      simulateAIResponse(input);
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.className = !isDark ? "dark" : "light";
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.addEventListener("input", () => {
      textarea.style.height = "auto";
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + "px";
    });

    textarea.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  }, [isTyping]);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement("div", { className: "container" },
      React.createElement("div", { className: "sidebar" },
        React.createElement("div", { className: "logo" },
          React.createElement("div", { className: "logo-icon" }, "CQ"),
          React.createElement("div", { className: "logo-text" }, "CiViQ")
        ),
        React.createElement("div", { className: "sidebar-section" },
          React.createElement("div", { className: "section-title" }, "Quick Actions"),
          React.createElement("div", { className: "quick-actions" },
            ["\ud83d\udcca Summarize Data", "\ud83d\udea8 Show Alerts", "\ud83d\udccb Draft Plan", "\ud83d\udcc8 Generate Report"].map((action, i) =>
              React.createElement("button", {
                key: i,
                className: "action-btn",
                onClick: () => {
                  textareaRef.current.value = `Please ${action.split(" ")[1].toLowerCase()}`;
                  textareaRef.current.focus();
                }
              }, action)
            )
          )
        ),
        React.createElement("div", { className: "sidebar-section" },
          React.createElement("div", { className: "section-title" }, "Recent Reports"),
          [["Q4 Performance Summary", "2 hours ago • Google Sheets"],
           ["Risk Assessment Alert", "5 hours ago • Slack Integration"],
           ["Weekly Team Insights", "1 day ago • Notion"],
           ["Budget Analysis", "2 days ago • Google Drive"]].map(([title, meta], i) =>
            React.createElement("div", { className: "report-item", key: i },
              React.createElement("div", { className: "report-title" }, title),
              React.createElement("div", { className: "report-meta" }, meta)
            )
          )
        )
      ),
      React.createElement("div", { className: "main-content" },
        React.createElement("div", { className: "header" },
          React.createElement("div", { className: "header-left" },
            React.createElement("div", { className: "status-indicator" },
              React.createElement("div", { className: "status-dot" }),
              "All Systems Online"
            )
          ),
          React.createElement("div", { className: "header-right" },
            React.createElement("button", { className: "theme-toggle", onClick: toggleTheme }, isDark ? "\u2600\ufe0f" : "\ud83c\udf19")
          )
        ),
        React.createElement("div", { className: "chat-area", ref: chatAreaRef, id: "chatArea" },
          React.createElement("div", { className: "floating-info" }, "Connected: Google Drive, Slack, Notion, Sheets"),
          React.createElement("div", { className: "message" },
            React.createElement("div", { className: "message-avatar ai-avatar" }, "CQ"),
            React.createElement("div", { className: "message-content" },
              "Welcome to CiViQ Copilot! I'm your AI business assistant, ready to help you with operational insights, risk monitoring, and data analysis.",
              React.createElement("br"),
              "I've detected 3 new alerts that require your attention and have fresh data from your connected sources. How can I assist you today?"
            )
          )
        ),
        React.createElement("div", { className: "input-area" },
          React.createElement("div", { className: "input-container" },
            React.createElement("div", { className: "suggestions" },
              ["\ud83d\udcca Weekly summary", "\ud83d\udea8 Check alerts", "\ud83d\udcc8 Revenue analysis", "\ud83d\udccb Create action plan"].map((sug, i) =>
                React.createElement("button", {
                  key: i,
                  className: "suggestion-chip",
                  onClick: () => {
                    textareaRef.current.value = sug.slice(2);
                    textareaRef.current.focus();
                  }
                }, sug)
              )
            ),
            React.createElement("div", { className: "input-wrapper" },
              React.createElement("textarea", {
                className: "message-input",
                id: "messageInput",
                placeholder: "Ask me about your business data, request insights, or create reports...",
                rows: 1,
                ref: textareaRef
              }),
              React.createElement("button", {
                className: "send-btn",
                id: "sendBtn",
                ref: sendBtnRef,
                onClick: sendMessage
              }, "\u2197")
            )
          )
        )
      )
    )
  );
}

export default Chat;