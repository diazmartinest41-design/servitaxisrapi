export default function Home() {
  return (
    <main className="container">
      <div className="hero">
        <h1>Servitaxis API</h1>
        <p className="description">
          API for Servitaxis service with real-time GPS tracking, geolocation, and ride matching
        </p>
      </div>

      <section className="features">
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🚕 Real-time GPS Tracking</h3>
            <p>Users can track their rides in real-time with accurate GPS positioning.</p>
          </div>
          
          <div className="feature-card">
            <h3>📍 Geolocation</h3>
            <p>Advanced geolocation services to match riders with nearby drivers.</p>
          </div>
          
          <div className="feature-card">
            <h3>🤝 Ride Matching</h3>
            <p>Efficient algorithms for pairing riders and drivers optimally.</p>
          </div>
          
          <div className="feature-card">
            <h3>💳 Payments</h3>
            <p>Seamless payment gateway integration for secure transactions.</p>
          </div>
          
          <div className="feature-card">
            <h3>📊 Admin Dashboard</h3>
            <p>Comprehensive dashboard for managing rides, users, and drivers.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
