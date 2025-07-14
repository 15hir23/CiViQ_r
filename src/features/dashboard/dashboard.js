"use client";

import React, { useState, useEffect } from 'react';
import "./dashboard.css";

import { Home, MessageCircle, FileText, Settings, LogOut, Moon, Sun, Bell, TrendingUp, AlertTriangle, FileCheck, Database, Menu, X, ChevronRight, Search, Filter, Calendar, Activity, Users, BarChart3, Bot } from 'lucide-react';

const CivIQDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userName] = useState('Alex');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [{ id: 'dashboard', label: 'Dashboard', icon: Home, badge: null }, { id: 'analytics', label: 'Analytics', icon: BarChart3, badge: null }, { id: 'ai-assistant', label: 'AI Assistant', icon: Bot, badge: '✨' }, { id: 'team', label: 'Team', icon: Users, badge: null }, { id: 'settings', label: 'Settings', icon: Settings, badge: null }];

  const quickActions = [{ id: 'new-report', label: 'Generate Report', icon: FileText, color: 'bg-gradient-to-r from-blue-500 to-blue-600' }, { id: 'analyze-risk', label: 'Risk Analysis', icon: AlertTriangle, color: 'bg-gradient-to-r from-amber-500 to-orange-500' }, { id: 'sync-data', label: 'Sync Data', icon: Database, color: 'bg-gradient-to-r from-green-500 to-emerald-500' }, { id: 'schedule', label: 'Schedule Meeting', icon: Calendar, color: 'bg-gradient-to-r from-purple-500 to-indigo-500' }];

  const statsCards = [{
    title: 'Active Risks',
    value: '4',
    change: '+2 from last week',
    changeType: 'increase',
    icon: AlertTriangle,
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50 dark:bg-red-900/10',
    progress: 75
  }, {
    title: 'Completed Reports',
    value: '12',
    change: '+3 this month',
    changeType: 'increase',
    icon: FileCheck,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/10',
    progress: 90
  }, {
    title: 'Data Sources',
    value: '8',
    change: '2 recently synced',
    changeType: 'neutral',
    icon: Database,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/10',
    progress: 60
  }, {
    title: 'Team Activity',
    value: '24',
    change: '+5 this week',
    changeType: 'increase',
    icon: Activity,
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/10',
    progress: 85
  }];

  const recentActivities = [{
    id: 1,
    user: 'Sarah Chen',
    action: 'completed risk assessment for downtown development',
    time: '2 hours ago',
    type: 'success',
    avatar: 'SC'
  }, {
    id: 2,
    user: 'Mike Johnson',
    action: 'generated operational plan for Q4',
    time: '4 hours ago',
    type: 'info',
    avatar: 'MJ'
  }, {
    id: 3,
    user: 'Emma Davis',
    action: 'synced Google Drive data sources',
    time: '6 hours ago',
    type: 'warning',
    avatar: 'ED'
  }, {
    id: 4,
    user: 'Alex Rodriguez',
    action: 'updated team permissions',
    time: '8 hours ago',
    type: 'neutral',
    avatar: 'AR'
  }];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    alert('Logging out...');
  };

  const handleNavClick = itemId => {
    if (itemId === 'ai-assistant') {
      // Navigate to /chat
      window.location.href = '/chat';
    } else {
      setActiveTab(itemId);
      setSidebarOpen(false);
    }
  };

  const formatTime = date => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  if (loading) {
    return React.createElement(
      "div",
      { className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center" },
      React.createElement(
        "div",
        { className: "text-center" },
        React.createElement(
          "div",
          { className: "relative" },
          React.createElement("div", { className: "animate-spin rounded-full h-16 w-16 border-4 border-slate-200 dark:border-slate-700 mx-auto mb-6" }),
          React.createElement("div", { className: "animate-spin rounded-full h-16 w-16 border-4 border-t-teal-500 border-r-transparent border-b-transparent border-l-transparent absolute top-0 left-1/2 transform -translate-x-1/2" })
        ),
        React.createElement(
          "div",
          { className: "space-y-2" },
          React.createElement(
            "h3",
            { className: "text-lg font-semibold text-slate-700 dark:text-slate-300" },
            "Loading CivIQ"
          ),
          React.createElement(
            "p",
            { className: "text-slate-500 dark:text-slate-400" },
            "Preparing your civic intelligence dashboard..."
          )
        )
      )
    );
  }

  return React.createElement(
    "div",
    { className: `dashboard-container${darkMode ? ' dark' : ''}` },
    sidebarOpen && React.createElement("div", {
      className: "sidebar-overlay",
      onClick: () => setSidebarOpen(false)
    }),
    React.createElement(
      "div",
      { className: `sidebar ${sidebarOpen ? 'sidebar-open' : ''}` },
      React.createElement(
        "div",
        { className: "sidebar-header" },
        React.createElement(
          "div",
          { className: "logo" },
          React.createElement(
            "div",
            { className: "logo-icon" },
            "CQ"
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "span",
              { className: "logo-text" },
              "CivIQ"
            ),
            React.createElement(
              "div",
              { className: "logo-subtitle" },
              "Civic Intelligence"
            )
          )
        )
      ),
      React.createElement(
        "nav",
        { className: "nav" },
        navItems.map(item => {
          const Icon = item.icon;
          return React.createElement(
            "button",
            {
              key: item.id,
              onClick: () => handleNavClick(item.id),
              className: `nav-item${activeTab === item.id ? ' active' : ''}`
            },
            React.createElement(
              "div",
              { className: "nav-item-content" },
              React.createElement(Icon, { size: 20 }),
              React.createElement(
                "span",
                null,
                item.label
              )
            ),
            item.badge && React.createElement(
              "span",
              { className: "nav-badge" },
              item.badge
            )
          );
        })
      ),
      React.createElement(
        "div",
        { className: "user-profile" },
        React.createElement(
          "div",
          { className: "user-info" },
          React.createElement(
            "div",
            { className: "user-avatar" },
            userName.charAt(0).toUpperCase()
          ),
          React.createElement(
            "div",
            { className: "user-details" },
            React.createElement(
              "h4",
              null,
              userName
            ),
            React.createElement(
              "p",
              null,
              "Administrator"
            )
          )
        ),
        React.createElement(
          "button",
          { onClick: handleLogout, className: "logout-btn" },
          React.createElement(LogOut, { size: 20 }),
          React.createElement(
            "span",
            null,
            "Logout"
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "main-content" },
      React.createElement(
        "header",
        { className: "header" },
        React.createElement(
          "div",
          { className: "header-content" },
          React.createElement(
            "div",
            { className: "header-left" },
            React.createElement(
              "button",
              {
                onClick: () => setSidebarOpen(true),
                className: "menu-toggle",
                style: {
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '12px',
                  color: 'inherit',
                  transition: 'background-color 0.2s'
                },
                onMouseEnter: e => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)',
                onMouseLeave: e => e.target.style.backgroundColor = 'transparent'
              },
              React.createElement(Menu, { size: 20 })
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                "div",
                { className: "page-title" },
                activeTab
              ),
              React.createElement(
                "div",
                { className: "page-subtitle" },
                formatTime(currentTime)
              )
            )
          ),
          React.createElement(
            "div",
            { className: "header-right" },
            React.createElement(
              "div",
              { className: "search-box" },
              React.createElement(Search, { size: 18, className: "search-icon" }),
              React.createElement("input", {
                type: "text",
                placeholder: "Search...",
                className: "search-input"
              })
            ),
            React.createElement(
              "button",
              { className: "notification-btn" },
              React.createElement(Bell, { size: 20 }),
              React.createElement("span", { className: "notification-badge" })
            ),
            React.createElement(
              "button",
              {
                onClick: toggleDarkMode,
                className: "theme-toggle"
              },
              darkMode ? React.createElement(Sun, { size: 20 }) : React.createElement(Moon, { size: 20 })
            )
          )
        )
      ),
      React.createElement(
        "main",
        { className: "dashboard-content" },
        activeTab === 'dashboard' && React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            { className: "welcome-section" },
            React.createElement(
              "div",
              { className: "welcome-content" },
              React.createElement(
                "div",
                { className: "welcome-text" },
                React.createElement(
                  "h1",
                  null,
                  getGreeting(),
                  ", ",
                  userName,
                  "! \uD83D\uDC4B"
                ),
                React.createElement(
                  "p",
                  null,
                  "Ready to dive into your civic intelligence dashboard"
                )
              ),
              React.createElement(
                "div",
                { className: "welcome-icon" },
                React.createElement(Activity, { size: 40 })
              )
            )
          ),
          React.createElement(
            "div",
            { className: "stats-grid" },
            statsCards.map((card, index) => {
              const Icon = card.icon;
              return React.createElement(
                "div",
                { key: index, className: "stat-card" },
                React.createElement(
                  "div",
                  { className: "stat-header" },
                  React.createElement(
                    "div",
                    { className: "stat-icon", style: { background: `linear-gradient(135deg, var(--${card.color}))` } },
                    React.createElement(Icon, { size: 24 })
                  ),
                  React.createElement(
                    "div",
                    { className: "stat-value" },
                    card.value
                  )
                ),
                React.createElement(
                  "div",
                  { className: "stat-body" },
                  React.createElement(
                    "h3",
                    null,
                    card.title
                  ),
                  React.createElement(
                    "div",
                    { className: `stat-change ${card.changeType}` },
                    card.change
                  ),
                  React.createElement(
                    "div",
                    { className: "progress-bar" },
                    React.createElement("div", {
                      className: "progress-fill",
                      style: { width: `${card.progress}%`, background: `linear-gradient(135deg, var(--${card.color}))` }
                    })
                  )
                )
              );
            })
          ),
          React.createElement(
            "div",
            { className: "quick-actions-section" },
            React.createElement(
              "div",
              { className: "section-title" },
              "Quick Actions"
            ),
            React.createElement(
              "div",
              { className: "quick-actions-grid" },
              quickActions.map(action => {
                const Icon = action.icon;
                return React.createElement(
                  "button",
                  {
                    key: action.id,
                    className: "quick-action-btn",
                    style: { background: `linear-gradient(135deg, var(--${action.color.split(' ')[1].replace('from-', '')}), var(--${action.color.split(' ')[2].replace('to-', '')})` }
                  },
                  React.createElement(Icon, { size: 24 }),
                  React.createElement(
                    "span",
                    null,
                    action.label
                  )
                );
              })
            )
          ),
          React.createElement(
            "div",
            { className: "activity-section" },
            React.createElement(
              "div",
              { className: "activity-header" },
              React.createElement(
                "div",
                { className: "section-title" },
                "Recent Activity"
              ),
              React.createElement(
                "button",
                { className: "view-all-btn" },
                "View All ",
                React.createElement(ChevronRight, { size: 16 })
              )
            ),
            React.createElement(
              "div",
              { className: "activity-list" },
              recentActivities.map(activity => React.createElement(
                "div",
                { key: activity.id, className: "activity-item" },
                React.createElement(
                  "div",
                  { className: "activity-avatar" },
                  activity.avatar
                ),
                React.createElement(
                  "div",
                  { className: "activity-content" },
                  React.createElement(
                    "div",
                    { className: "activity-text" },
                    React.createElement(
                      "span",
                      { className: "activity-user" },
                      activity.user
                    ),
                    " ",
                    activity.action
                  ),
                  React.createElement(
                    "div",
                    { className: "activity-time" },
                    activity.time
                  )
                ),
                React.createElement("div", { className: `activity-status ${activity.type}` })
              ))
            )
          )
        ),
        activeTab !== 'dashboard' && React.createElement(
          "div",
          { className: "coming-soon" },
          React.createElement(
            "div",
            { className: "coming-soon-icon" },
            "\uD83D\uDE80"
          ),
          React.createElement(
            "h3",
            null,
            activeTab.charAt(0).toUpperCase() + activeTab.slice(1),
            " Coming Soon"
          ),
          React.createElement(
            "p",
            null,
            "We're working hard to bring you this feature. Stay tuned for updates and new capabilities!"
          )
        )
      )
    ),
    React.createElement(
      "button",
      {
        onClick: () => setShowChatbot(!showChatbot),
        className: "floating-chat-btn"
      },
      React.createElement(MessageCircle, { size: 24 })
    ),
    showChatbot && React.createElement(
      "div",
      { className: "chat-modal" },
      React.createElement(
        "div",
        { className: "chat-modal-content" },
        React.createElement(
          "div",
          { className: "chat-header" },
          React.createElement(
            "div",
            { className: "chat-header-info" },
            React.createElement(
              "div",
              { className: "chat-avatar" },
              React.createElement(MessageCircle, { size: 20 })
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                "div",
                { className: "chat-title" },
                "CivIQ Assistant"
              ),
              React.createElement(
                "div",
                { className: "chat-status" },
                "Online"
              )
            )
          ),
          React.createElement(
            "button",
            {
              onClick: () => setShowChatbot(false),
              className: "chat-close-btn"
            },
            React.createElement(X, { size: 20 })
          )
        ),
        React.createElement(
          "div",
          { className: "chat-body" },
          React.createElement(
            "div",
            { className: "chat-message" },
            "\uD83D\uDC4B Hi ",
            userName,
            "! I'm your CivIQ assistant. I can help you with risk analysis, report generation, and data insights. What would you like to explore?"
          ),
          React.createElement(
            "div",
            null,
            ['📊 Analyze current risk patterns', '📄 Generate quarterly report', '🔄 Check sync status', '📈 Show performance metrics'].map((suggestion, index) => React.createElement(
              "button",
              {
                key: index,
                className: "chat-suggestion-btn"
              },
              suggestion
            ))
          )
        ),
        React.createElement(
          "div",
          { className: "chat-footer" },
          React.createElement("input", {
            type: "text",
            placeholder: "Type your message...",
            className: "chat-input"
          }),
          React.createElement(
            "button",
            { className: "chat-send-btn" },
            "Send"
          )
        )
      )
    )
  );
};

export default CivIQDashboard;

