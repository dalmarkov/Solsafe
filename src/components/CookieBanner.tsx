'use client';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, 
      background: '#000', color: '#fff', padding: '20px', 
      textAlign: 'center', zIndex: 9999, borderTop: '2px solid #fff'
    }}>
      <p style={{ margin: '0 0 10px 0' }}>
        Używamy plików cookie, aby poprawić jakość korzystania z naszej witryny. 
        Kontynuując korzystanie z serwisu, wyrażasz zgodę na naszą 
        <a href="/privacy-policy" style={{ color: '#fff', marginLeft: '5px', textDecoration: 'underline' }}>Politykę prywatności</a>.
      </p>
      <button 
        onClick={acceptCookies}
        style={{
          background: '#fff', color: '#000', border: 'none', 
          padding: '10px 25px', cursor: 'pointer', fontWeight: 'bold', borderRadius: '4px'
        }}
      >
        Akceptuję
      </button>
    </div>
  );
}