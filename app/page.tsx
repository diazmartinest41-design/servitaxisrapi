export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Servitaxis API</h1>
      <p>
        This repository contains a taxi-sharing application with features such as real-time GPS tracking, 
        geolocation, ride matching, and an admin dashboard.
      </p>
      
      <h2>Overview</h2>
      <ul>
        <li><strong>Real-time GPS Tracking</strong>: Users can track their rides in real-time.</li>
        <li><strong>Geolocation</strong>: The application uses geolocation services to match riders with drivers.</li>
        <li><strong>Ride Matching</strong>: Efficient algorithms for pairing riders and drivers.</li>
        <li><strong>Payments</strong>: Integrates with payment gateways for seamless transactions.</li>
        <li><strong>Admin Dashboard</strong>: A dashboard for managing rides, users, and drivers.</li>
      </ul>
      
      <h2>Features</h2>
      <p>
        With Vercel Web Analytics enabled, this application now tracks visitor data and page views 
        to help understand user behavior and optimize the service.
      </p>
    </main>
  );
}
