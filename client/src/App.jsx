import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddItem from './pages/AddItem';
import SearchItems from './pages/SearchItems';

const API_BASE = 'http://localhost:5000';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [currentUser, setCurrentUser] = useState(null); // { email, name, role, token }

  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [editForm, setEditForm] = useState({});

  const [form, setForm] = useState({
    itemName: '',
    description: '',
    location: '',
    status: 'found',
    category: '',
  });

  // Fetch items from backend
  const fetchItems = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/items`);
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error('Failed to fetch items:', err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    if (editingItem) {
      setEditForm({ name: editingItem.name, description: editingItem.description });
    }
  }, [editingItem]);

  // Navigation handler
  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  // NEW: Login handler that receives full userData from backend
  const handleLogin = (userData) => {
    setCurrentUser(userData);              
    setIsLoggedIn(true);
    setUserName(userData.name || userData.email.split('@')[0]);
  };

  // Logout handler
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setCurrentUser(null);
  };

  // Render pages based on current page
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;

      case 'login':
        return (
          <Login
            onLogin={handleLogin}
            onNavigate={handleNavigate}
          />
        );

      case 'dashboard':
        return isLoggedIn ? (
          <Dashboard
            userName={userName}
            onNavigate={handleNavigate}
            onLogout={handleLogout}
          />
        ) : (
          <Login
            onNavigate={handleNavigate}
            onLogin={handleLogin}
          />
        );

      case 'add':
        return isLoggedIn ? (
          <AddItem
            onNavigate={handleNavigate}
            form={form}
            setForm={setForm}
            API_BASE={API_BASE}
            fetchItems={fetchItems}
            userName={userName}
          />
        ) : (
          <Login
            onNavigate={handleNavigate}
            onLogin={handleLogin}
          />
        );

      case 'search':
        return (
          <SearchItems
            onNavigate={handleNavigate}
            items={items}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            API_BASE={API_BASE}
            fetchItems={fetchItems}
            editingItem={editingItem}
            setEditingItem={setEditingItem}
            editForm={editForm}
            setEditForm={setEditForm}
          />
        );

      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;
