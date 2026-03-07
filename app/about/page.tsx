export default function About() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.title}>About Servitaxis</h1>
        
        <div style={styles.content}>
          <section style={styles.section}>
            <h2>Our Mission</h2>
            <p>
              Servitaxis is dedicated to providing a seamless, efficient, and safe 
              taxi-sharing experience. We leverage cutting-edge technology to connect 
              riders with drivers, ensuring quick pickups and comfortable journeys.
            </p>
          </section>

          <section style={styles.section}>
            <h2>Key Features</h2>
            <ul style={styles.list}>
              <li>Real-time GPS tracking for all rides</li>
              <li>Advanced geolocation matching algorithms</li>
              <li>Secure payment processing</li>
              <li>24/7 customer support</li>
              <li>Comprehensive admin dashboard</li>
              <li>Ride history and analytics</li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2>Technology Stack</h2>
            <p>
              Built with modern web technologies including Next.js, React, and 
              integrated with Vercel Web Analytics for real-time visitor insights 
              and performance monitoring.
            </p>
          </section>

          <a href="/" style={styles.backLink}>
            ← Back to Home
          </a>
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
    maxWidth: "900px",
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
  content: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "12px",
    padding: "40px",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  section: {
    marginBottom: "30px",
  },
  list: {
    lineHeight: "1.8",
  },
  backLink: {
    display: "inline-block",
    marginTop: "20px",
    padding: "12px 30px",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    borderRadius: "8px",
    color: "white",
    fontWeight: "500" as const,
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
};
