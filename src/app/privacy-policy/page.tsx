export default function PrivacyPolicy() {
  return (
    <main style={{ 
      padding: '120px 20px 60px 20px', // Увеличили верхний отступ (первое число)
      maxWidth: '800px', 
      margin: '0 auto', 
      fontFamily: 'sans-serif', 
      color: '#333',
      minHeight: '80vh' // Чтобы футер не подлетал вверх на коротких страницах
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Polityka prywatności</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '40px' }}>
        Ostatnia aktualizacja: 31 maja 2026 r.
      </p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px' }}>1. Wstęp</h2>
      <p>
        Dbałość o bezpieczeństwo Państwa danych osobowych jest dla nas priorytetem. 
        Niniejsza polityka wyjaśnia, w jaki sposób zbieramy, wykorzystujemy i chronimy informacje 
        podczas korzystania z serwisu SolSafe.pl.
      </p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px' }}>2. Jakie dane zbieramy?</h2>
      <p>
        Zbieramy tylko te dane, które są niezbędne do świadczenia usług, 
        takie jak adres e-mail lub numer telefonu, podane przez Państwa dobrowolnie w formularzu kontaktowym.
      </p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px' }}>3. Pliki Cookies</h2>
      <p>
        Nasza strona używa plików cookie w celu zapewnienia jej prawidłowego funkcjonowania 
        oraz do celów analitycznych. Mogą Państwo zarządzać zgodami na pliki cookie za pomocą 
        ustawień przeglądarki lub poprzez baner wyświetlany na naszej stronie.
      </p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px' }}>4. Kontakt</h2>
      <p>
        W przypadku jakichkolwiek pytań dotyczących niniejszej polityki, 
        prosimy o kontakt pod adresem: <a href="mailto:kontakt@solsafe.pl" style={{ color: '#000' }}>kontakt@solsafe.pl</a>.
      </p>
    </main>
  );
}