export default function Dashboard() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.title}>📊 Admin Dashboard</h1>
        
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Active Rides</h3>
            <p style={styles.stat}>142</p>
          </div>
          
          <div style={styles.card}>
            <h3>Total Drivers</h3>
            <p style={styles.stat}>487</p>
          </div>
          
          <div style={styles.card}>
            <h3>Total Users</h3>
            <p style={styles.stat}>2,341</p>
          </div>
          
          <div style={styles.card}>
            <h3>Today&apos;s Revenue</h3>
            <p style={styles.stat}>$8,742</p>
          </div>
        </div>

        <div style={styles.info}>
          <h2>Analytics Integration</h2>
          <p>
            This dashboard benefits from Vercel Web Analytics, tracking:
          </p>
          <ul>
            <li>Page views and visitor counts</li>
            <li>User navigation patterns</li>
            <li>Performance metrics</li>
            <li>Device and browser statistics</li>
          </ul>
          <p style={styles.note}>
            💡 All data is collected with respect to user privacy and GDPR compliance.
          </p>
        </div>

        <a href="/" style={styles.backLink}>
          ← Back to Home
        </a>
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
    fontSize: "3rem",
    fontWeight: "bold",
    color: "white",
    textAlign: "center" as const,
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },
  card: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "12px",
    padding: "30px",
    textAlign: "center" as const,
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  stat: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    margin: "10px 0 0 0",
  },
  info: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "12px",
    padding: "30px",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    marginBottom: "30px",
  },
  note: {
    marginTop: "20px",
    fontStyle: "italic" as const,
    opacity: 0.9,
  },
  backLink: {
    display: "inline-block",
    padding: "12px 30px",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    borderRadius: "8px",
    color: "white",
    fontWeight: "500" as const,
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
};
