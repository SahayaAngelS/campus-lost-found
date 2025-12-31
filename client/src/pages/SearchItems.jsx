import { useState } from 'react';

export default function SearchItems({ 
  onNavigate, 
  items = [], 
  searchTerm, 
  setSearchTerm, 
  API_BASE = 'http://localhost:5000',
  fetchItems,
  editingItem,
  setEditingItem,
  editForm,
  setEditForm 
}) {
  const [claimingItem, setClaimingItem] = useState(null);
  const [claimForm, setClaimForm] = useState({
    name: '',
    contact: '',
    message: '',
  });

  const filteredItems = items.filter(item =>
    item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSaveEdit = async () => {
    await fetch(`${API_BASE}/api/items/${editingItem?._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editForm)
    });
    setEditingItem(null);
    fetchItems();
  };

  const handleSubmitClaim = async () => {
    if (!claimingItem) return;
    await fetch(`${API_BASE}/api/items/${claimingItem._id}/claims`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(claimForm),
    });
    setClaimForm({ name: '', contact: '', message: '' });
    setClaimingItem(null);
    fetchItems && fetchItems();
    alert('Claim submitted');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e0f2fe, #f9fafb)',
        display: 'flex',
        justifyContent: 'center',
        padding: '32px 16px'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 900,
          background: '#ffffff',
          borderRadius: 24,
          padding: 24,
          boxShadow: '0 20px 60px rgba(15,23,42,0.12)'
        }}
      >
        {/* TOP BAR */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search lost/found items..."
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 999,
              border: '1px solid #cbd5e1',
              fontSize: 14
            }}
          />
          <button
            onClick={() => onNavigate('dashboard')}
            style={{
              padding: '10px 18px',
              borderRadius: 999,
              border: 'none',
              background: '#0f172a',
              color: '#f9fafb',
              fontSize: 13,
              cursor: 'pointer'
            }}
          >
            ← Back
          </button>
        </div>

        {/* CLAIM FORM */}
        {claimingItem && (
          <div
            style={{
              marginBottom: 20,
              padding: 16,
              borderRadius: 16,
              background: '#e0f2fe',
              border: '1px solid #bae6fd'
            }}
          >
            <h3 style={{ fontWeight: 600, marginBottom: 8 }}>
              Claim: {claimingItem.name || 'Unnamed item'}
            </h3>
            <input
              placeholder="Your name"
              value={claimForm.name}
              onChange={(e) =>
                setClaimForm({ ...claimForm, name: e.target.value })
              }
              style={{
                width: '100%',
                padding: 8,
                borderRadius: 8,
                border: '1px solid #cbd5e1',
                marginBottom: 8,
                fontSize: 14
              }}
            />
            <input
              placeholder="Contact (email or phone)"
              value={claimForm.contact}
              onChange={(e) =>
                setClaimForm({ ...claimForm, contact: e.target.value })
              }
              style={{
                width: '100%',
                padding: 8,
                borderRadius: 8,
                border: '1px solid #cbd5e1',
                marginBottom: 8,
                fontSize: 14
              }}
            />
            <textarea
              placeholder="Message to describe your claim"
              value={claimForm.message}
              onChange={(e) =>
                setClaimForm({ ...claimForm, message: e.target.value })
              }
              rows={3}
              style={{
                width: '100%',
                padding: 8,
                borderRadius: 8,
                border: '1px solid #cbd5e1',
                marginBottom: 8,
                fontSize: 14
              }}
            />
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={handleSubmitClaim}
                style={{
                  padding: '8px 14px',
                  borderRadius: 999,
                  border: 'none',
                  background: '#0ea5e9',
                  color: '#f9fafc',
                  fontSize: 13,
                  cursor: 'pointer'
                }}
              >
                Submit claim
              </button>
              <button
                onClick={() => {
                  setClaimingItem(null);
                  setClaimForm({ name: '', contact: '', message: '' });
                }}
                style={{
                  padding: '8px 14px',
                  borderRadius: 999,
                  border: '1px solid #cbd5e1',
                  background: '#ffffff',
                  color: '#0f172a',
                  fontSize: 13,
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* EDIT FORM */}
        {editingItem && (
          <div
            style={{
              padding: 16,
              borderRadius: 16,
              background: '#e0f2fe',
              border: '1px solid #bae6fd',
              marginBottom: 20
            }}
          >
            <h3 style={{ marginBottom: 8, fontWeight: 600 }}>Edit Item</h3>
            <input
              value={editForm.name || ''}
              onChange={(e) =>
                setEditForm({ ...editForm, name: e.target.value })
              }
              placeholder="Item name"
              style={{
                width: '100%',
                padding: 8,
                borderRadius: 8,
                border: '1px solid #cbd5e1',
                marginBottom: 8,
                fontSize: 14
              }}
            />
            <textarea
              value={editForm.description || ''}
              onChange={(e) =>
                setEditForm({ ...editForm, description: e.target.value })
              }
              placeholder="Description"
              rows={3}
              style={{
                width: '100%',
                padding: 8,
                borderRadius: 8,
                border: '1px solid #cbd5e1',
                marginBottom: 8,
                fontSize: 14
              }}
            />
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={handleSaveEdit}
                style={{
                  padding: '8px 14px',
                  borderRadius: 999,
                  border: 'none',
                  background: '#0284c7',
                  color: '#f9fafb',
                  fontSize: 13,
                  cursor: 'pointer'
                }}
              >
                Save Changes
              </button>
              <button
                onClick={() => setEditingItem(null)}
                style={{
                  padding: '8px 14px',
                  borderRadius: 999,
                  border: '1px solid #cbd5e1',
                  background: '#ffffff',
                  color: '#0f172a',
                  fontSize: 13,
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* ITEMS LIST */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {filteredItems.map((item) => (
            <div
              key={item._id}
              style={{
                background: '#f8fafc',
                borderRadius: 16,
                padding: 14,
                border: '1px solid #e2e8f0'
              }}
            >
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{
                    width: 160,
                    height: 120,
                    objectFit: 'cover',
                    borderRadius: 8,
                    marginBottom: 8
                  }}
                />
              )}

              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>
                {item.name || 'Unnamed item'}
              </h3>
              <p style={{ fontSize: 13, color: '#475569', marginBottom: 4 }}>
                {item.description || 'No description provided'}
              </p>
              <p style={{ fontSize: 12, color: '#64748b', marginBottom: 8 }}>
                📍 {item.location || 'Campus'} • {item.status || 'found'}
              </p>
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  onClick={() => setEditingItem(item)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 999,
                    border: 'none',
                    background: '#2563eb',
                    color: '#f8fafc',
                    fontSize: 12,
                    cursor: 'pointer'
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={async () => {
                    if (confirm('Delete this item permanently?')) {
                      await fetch(`${API_BASE}/api/items/${item._id}`, {
                        method: 'DELETE'
                      });
                      fetchItems();
                    }
                  }}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 999,
                    border: 'none',
                    background: '#ef4444',
                    color: '#f8fafc',
                    fontSize: 12,
                    cursor: 'pointer'
                  }}
                >
                  Delete
                </button>
                {item.status === 'found' && (
                  <button
                    onClick={() => setClaimingItem(item)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: 999,
                      border: 'none',
                      background: '#0ea5e9',
                      color: '#f8fafc',
                      fontSize: 12,
                      cursor: 'pointer'
                    }}
                  >
                    Claim
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p
            style={{
              marginTop: 24,
              textAlign: 'center',
              fontSize: 13,
              color: '#94a3b8'
            }}
          >
            No items match "{searchTerm}"
          </p>
        )}
      </div>
    </div>
  );
}
