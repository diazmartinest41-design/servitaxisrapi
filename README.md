# Servitaxis API

This repository contains a taxi-sharing application with features such as real-time GPS tracking, geolocation, ride matching, and an admin dashboard.

## Overview

- **Real-time GPS Tracking**: Users can track their rides in real-time.
- **Geolocation**: The application uses geolocation services to match riders with drivers.
- **Ride Matching**: Efficient algorithms for pairing riders and drivers.
- **Payments**: Integrates with payment gateways for seamless transactions.
- **Admin Dashboard**: A dashboard for managing rides, users, and drivers.

## Features

This application is built with Next.js 14 (App Router) and includes:
- **Vercel Web Analytics**: Track visitor data and page views automatically
- **TypeScript**: Type-safe development
- **Server Components**: Optimized performance with React Server Components

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Vercel Web Analytics

This project includes Vercel Web Analytics integration. The `@vercel/analytics` package is already installed and configured in `app/layout.tsx`.

To enable analytics on Vercel:
1. Deploy your project to Vercel
2. Go to your project dashboard
3. Navigate to the **Analytics** tab
4. Click **Enable**

Once enabled, the application will automatically track page views and visitor data.

## Project Structure

```
servitaxisrapi/
│
├── app/
│   ├── layout.tsx     # Root layout with Analytics component
│   └── page.tsx       # Home page
│
├── .gitignore
├── .eslintrc.json
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```