import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './features/login/login';
import Dashboard from './features/dashboard/dashboard';
import Chat from './features/chat/chat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
