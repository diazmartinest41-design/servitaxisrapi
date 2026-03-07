import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    service: 'Servitaxis API',
    version: '1.0.0',
    status: 'operational',
    features: [
      'Real-time GPS Tracking',
      'Geolocation',
      'Ride Matching',
      'Payments',
      'Admin Dashboard'
    ]
  });
}
