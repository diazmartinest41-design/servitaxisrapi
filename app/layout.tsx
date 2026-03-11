import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servitaxis - Taxi Sharing Service",
  description: "Real-time GPS tracking, geolocation, and ride matching service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
