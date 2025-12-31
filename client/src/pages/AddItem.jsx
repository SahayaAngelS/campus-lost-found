import { useState } from 'react';
export default function AddItem({
  onNavigate,
  form,
  setForm,
  API_BASE,
  fetchItems,
  userName,
})

 {const [imageFile, setImageFile] = useState(null);
const [imagePreview, setImagePreview] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Submit clicked, imageFile =', imageFile);

  try {
    let imageUrl = '';

    // 1) Upload to Cloudinary if a file is selected
    if (imageFile) {
      console.log('Uploading to Cloudinary...');
      const data = new FormData();
      data.append('file', imageFile);
      data.append('upload_preset', 'lostfound_unsigned'); // your unsigned preset
      data.append('cloud_name', 'dafz3wlay');             // your cloud name

      const res = await fetch('https://api.cloudinary.com/v1_1/dafz3wlay/image/upload', {
        method: 'POST',
        body: data,
      });

      const json = await res.json();
      console.log('Cloudinary response:', json);
      imageUrl = json.secure_url || '';
    }

    // 2) Send item to backend with imageUrl
    const itemBody = {
      itemName: form.itemName,
      description: form.description,
      location: form.location,
      status: form.status,
      category: form.category,
      imageUrl,
    };

    console.log('Sending itemBody to backend:', itemBody);

    await fetch(`${API_BASE}/api/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(itemBody),
    });

    // 3) Reset form + image
    setForm({
      itemName: '',
      description: '',
      location: '',
      status: 'found',
      category: '',
    });
    setImageFile(null);
    setImagePreview('');
    if (fetchItems) fetchItems();
    alert('Item added successfully');
  } catch (err) {
    console.error('Error in handleSubmit:', err);
    alert('Error adding item');
  }
};



  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Navbar */}
      <header
        style={{
          padding: '16px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #e5e5e5',
          backgroundColor: '#ffffff',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      ><div>
  
</div>

        <div style={{ fontSize: 20, fontWeight: 700, color: '#b91c1c' }}>
          LF Campus
        </div>
        <button
          onClick={() => onNavigate('dashboard')}
          style={{
            fontSize: 14,
            color: '#2563eb',
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
          }}
        >
          ← Back to Dashboard
        </button>
      </header>

      {/* Main Content */}
      <main style={{ padding: '40px 32px', maxWidth: 700, margin: '0 auto' }}>
        <h1 style={{ fontSize: 32, marginBottom: 8 }}>Report Found Item</h1>
        <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 32 }}>
          Help reunite belongings with their owners. Fill in the details below.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: '#ffffff',
            padding: 32,
            borderRadius: 12,
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            display: 'grid',
            gap: 20,
          }}
        >
          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 500, marginBottom: 6 }}>
              Item Name *
            </label>
            <input
              type="text"
              name="itemName"
              value={form.itemName}
              onChange={handleChange}
              placeholder="e.g. Black wallet, iPhone"
              required
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: 6,
                fontSize: 14,
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 500, marginBottom: 6 }}>
              Description *
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the item in detail (color, brand, condition, etc.)"
              rows={4}
              required
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: 6,
                fontSize: 14,
                outline: 'none',
                resize: 'vertical',
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 500, marginBottom: 6 }}>
                Location Found *
              </label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g. Library, Gate 3"
                required
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: 6,
                  fontSize: 14,
                  outline: 'none',
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 500, marginBottom: 6 }}>
                Status *
              </label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: 6,
                  fontSize: 14,
                  outline: 'none',
                  backgroundColor: '#ffffff',
                }}
              >
                <option value="found">Found</option>
                <option value="lost">Lost</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 500, marginBottom: 6 }}>
              Category
            </label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="e.g. Electronics, Documents, Accessories"
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: 6,
                fontSize: 14,
                outline: 'none',
              }}
            />
          </div>
{/* Image upload */}
<div style={{ marginBottom: 16 }}>
  <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6 }}>
    Item photo (optional)
  </label>
  <input
    type="file"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files[0];
      if (!file) return;
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }}
  />
  {imagePreview && (
    <div style={{ marginTop: 8 }}>
      <p style={{ fontSize: 12, color: '#64748b', marginBottom: 4 }}>Preview:</p>
      <img
        src={imagePreview}
        alt="Preview"
        style={{ width: 160, height: 120, objectFit: 'cover', borderRadius: 8, border: '1px solid #e2e8f0' }}
      />
    </div>
  )}
</div>

          <button
            type="submit"
            style={{
              padding: '12px 16px',
              backgroundColor: '#b91c1c',
              color: '#ffffff',
              border: 'none',
              borderRadius: 6,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: 8,
            }}
          >
            Submit Report
          </button>
        </form>
      </main>
    </div>
  );
}
