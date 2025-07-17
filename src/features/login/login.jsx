"use client";

import React, { useState, useEffect } from 'react';
import './login.css';
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDV-OUYlIMVepJ_w2aOvngtPvyA8efebo8",
  authDomain: "civiq-87a5c.firebaseapp.com",
  projectId: "civiq-87a5c",
  storageBucket: "civiq-87a5c.firebasestorage.app",
  messagingSenderId: "797041812890",
  appId: "1:797041812890:web:484c3bbd6889ea44670623",
  measurementId: "G-XD50MT68CB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login = () => {
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginText, setLoginText] = useState("Sign In");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);

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

  const toggleMode = () => {
    setIsSignup(!isSignup);
    setLoginText(isSignup ? "Sign In" : "Sign Up");
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoginText(isSignup ? "Signing Up..." : "Signing In...");

    try {
      const userCred = isSignup
        ? await createUserWithEmailAndPassword(auth, email, password)
        : await signInWithEmailAndPassword(auth, email, password);

      console.log("User:", userCred.user);
      setLoginText("Success! Redirecting...");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);
    } catch (error) {
      console.error("Auth error:", error);
      alert(error.message || "Authentication failed.");
      setLoginText(isSignup ? "Sign Up" : "Sign In");
    }

    setLoading(false);
  };

  const socialLogin = async (providerName) => {
    if (providerName === "Google") {
      try {
        const result = await signInWithPopup(auth, provider);
        console.log("Google User:", result.user);
        setLoginText("Success! Redirecting...");
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1000);
      } catch (error) {
        console.error("Google sign-in error:", error);
        alert("Google sign-in failed");
      }
    } else {
      alert(`Social login with ${providerName} is not set up yet`);
    }
  };

  return (
    <>
      <div className="bg-animation" />
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDark ? "☀️" : "🌙"}
      </button>
      <div className="login-container">
        <div className="login-card">
          <div className="logo">
            <div className="logo-icon">CQ</div>
            <div className="logo-text">CiViQ</div>
          </div>
          <div className="welcome-text">
            <h1 className="welcome-title">{isSignup ? "Join CiViQ" : "Welcome Back"}</h1>
            <p className="welcome-subtitle">
              {isSignup ? "Create your AI Business Assistant account" : "Sign in to your AI Business Assistant"}
            </p>
          </div>
          <form className="login-form" onSubmit={handleAuth}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input
                className="form-input"
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input
                className="form-input"
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {!isSignup && (
              <div className="remember-forgot">
                <label className="remember-me">
                  <input type="checkbox" className="checkbox" id="remember" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>
            )}
            <button type="submit" className="login-btn" disabled={loading}>
              {loading && <div className="loading" />}
              <span>{loginText}</span>
            </button>
          </form>

          <div className="auth-toggle-text">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <span className="toggle-link" onClick={toggleMode}>
              {isSignup ? "Sign In" : "Sign Up"}
            </span>
          </div>

          <div className="divider">
            <div className="divider-line" />
            <span className="divider-text">OR</span>
            <div className="divider-line" />
          </div>

          <div className="social-login">
            <button className="social-btn" onClick={() => socialLogin("Google")}>
              <span>🔗</span> Google
            </button>
            <button className="social-btn" onClick={() => socialLogin("Microsoft")}>
              <span>🏢</span> Microsoft
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
