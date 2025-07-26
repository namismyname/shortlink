import { useState } from 'react';
import { nanoid } from 'nanoid';
import { saveLink } from '../lib/store';

export default function Home() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = nanoid(6);
    saveLink(id, originalUrl);
    setShortUrl(\`\${window.location.origin}/\${id}\`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>🔗 Simple Shortlink</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="https://example.com"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          required
          style={{ padding: '10px', width: '300px' }}
        />
        <button style={{ padding: '10px 20px', marginLeft: '10px' }}>Shorten</button>
      </form>
      {shortUrl && (
        <p style={{ marginTop: '20px' }}>
          ✅ Your shortlink: <a href={shortUrl}>{shortUrl}</a>
        </p>
      )}
    </div>
  );
}
