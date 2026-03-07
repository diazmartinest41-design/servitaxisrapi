import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.title}>🚕 Servitaxis</h1>
        <p style={styles.subtitle}>
          Your reliable taxi-sharing service with real-time tracking
        </p>
        
        <div style={styles.features}>
          <div style={styles.feature}>
            <h3>📍 Real-time GPS Tracking</h3>
            <p>Track your rides in real-time with accurate GPS positioning</p>
          </div>
          
          <div style={styles.feature}>
            <h3>🌍 Geolocation</h3>
            <p>Advanced geolocation services to match riders with drivers</p>
          </div>
          
          <div style={styles.feature}>
            <h3>🤝 Ride Matching</h3>
            <p>Efficient algorithms for optimal rider-driver pairing</p>
          </div>
          
          <div style={styles.feature}>
            <h3>💳 Payments</h3>
            <p>Seamless transactions with integrated payment gateways</p>
          </div>
          
          <div style={styles.feature}>
            <h3>📊 Admin Dashboard</h3>
            <p>Comprehensive dashboard for managing rides, users, and drivers</p>
          </div>
        </div>

        <div style={styles.nav}>
          <Link href="/about" style={styles.link}>
            About Us
          </Link>
          <Link href="/dashboard" style={styles.link}>
            Dashboard
          </Link>
        </div>

        <div style={styles.analytics}>
          <p style={styles.analyticsNote}>
            ✅ Vercel Web Analytics is enabled on this site
          </p>
          <p style={styles.analyticsInfo}>
            Page views and visitor data are being tracked automatically
          </p>
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "20px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: "bold",
    color: "white",
    textAlign: "center" as const,
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.5rem",
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "center" as const,
    marginBottom: "60px",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    marginBottom: "60px",
  },
  feature: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "12px",
    padding: "30px",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "40px",
  },
  link: {
    padding: "12px 30px",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    borderRadius: "8px",
    color: "white",
    fontWeight: "500" as const,
    border: "1px solid rgba(255, 255, 255, 0.3)",
    transition: "all 0.3s ease",
  },
  analytics: {
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    borderRadius: "12px",
    padding: "30px",
    textAlign: "center" as const,
    border: "2px solid rgba(255, 255, 255, 0.3)",
  },
  analyticsNote: {
    fontSize: "1.2rem",
    fontWeight: "600" as const,
    color: "white",
    marginBottom: "10px",
  },
  analyticsInfo: {
    fontSize: "1rem",
    color: "rgba(255, 255, 255, 0.9)",
  },
};
