"use client";

import React, { useState, useEffect } from 'react';
import './login.css';

const Login = () => {
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginText, setLoginText] = useState("Sign In");

  useEffect(() => {
    document.body.className = isDark ? 'dark' : 'light';
    const card = document.querySelector('.login-card');
    if (card) {
      card.style.transform = 'translateY(20px)';
      card.style.opacity = '0';
      setTimeout(() => {
        card.style.transition = 'all 0.6s ease';
        card.style.transform = 'translateY(0)';
        card.style.opacity = '1';
      }, 100);
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setLoginText("Signing In...");

    setTimeout(() => {
      setLoading(false);
      setLoginText("Success! Redirecting...");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);
    }, 2000);
  };

  const socialLogin = (provider) => {
    alert(`Social login with ${provider} would be implemented here`);
  };

  return React.createElement(
    React.Fragment,
    null,
    React.createElement("div", { className: "bg-animation" }),
    React.createElement(
      "button",
      { className: "theme-toggle", onClick: toggleTheme },
      isDark ? "☀️" : "🌙"
    ),
    React.createElement(
      "div",
      { className: "login-container" },
      React.createElement(
        "div",
        { className: "login-card" },
        React.createElement(
          "div",
          { className: "logo" },
          React.createElement("div", { className: "logo-icon" }, "CQ"),
          React.createElement("div", { className: "logo-text" }, "CiViQ")
        ),
        React.createElement(
          "div",
          { className: "welcome-text" },
          React.createElement("h1", { className: "welcome-title" }, "Welcome Back"),
          React.createElement("p", { className: "welcome-subtitle" }, "Sign in to your AI Business Assistant")
        ),
        React.createElement(
          "form",
          { className: "login-form", onSubmit: handleLogin },
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement("label", { className: "form-label", htmlFor: "email" }, "Email Address"),
            React.createElement("input", {
              className: "form-input",
              type: "email",
              id: "email",
              placeholder: "Enter your email",
              required: true,
            })
          ),
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement("label", { className: "form-label", htmlFor: "password" }, "Password"),
            React.createElement("input", {
              className: "form-input",
              type: "password",
              id: "password",
              placeholder: "Enter your password",
              required: true,
            })
          ),
          React.createElement(
            "div",
            { className: "remember-forgot" },
            React.createElement(
              "label",
              { className: "remember-me" },
              React.createElement("input", { type: "checkbox", className: "checkbox", id: "remember" }),
              React.createElement("span", null, "Remember me")
            ),
            React.createElement(
              "a",
              { href: "#", className: "forgot-password" },
              "Forgot password?"
            )
          ),
          React.createElement(
            "button",
            { type: "submit", className: "login-btn", disabled: loading },
            loading && React.createElement("div", { className: "loading" }),
            React.createElement("span", null, loginText)
          )
        ),
        React.createElement(
          "div",
          { className: "divider" },
          React.createElement("div", { className: "divider-line" }),
          React.createElement("span", { className: "divider-text" }, "OR"),
          React.createElement("div", { className: "divider-line" })
        ),
        React.createElement(
          "div",
          { className: "social-login" },
          React.createElement(
            "button",
            {
              className: "social-btn",
              onClick: () => socialLogin("Google"),
            },
            React.createElement("span", null, "🔗"),
            " Google"
          ),
          React.createElement(
            "button",
            {
              className: "social-btn",
              onClick: () => socialLogin("Microsoft"),
            },
            React.createElement("span", null, "🏢"),
            " Microsoft"
          )
        )
      )
    )
  );
};

export default Login;
