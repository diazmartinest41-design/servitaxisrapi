# Servitaxis

A modern taxi-sharing application built with Next.js, featuring real-time GPS tracking, geolocation, ride matching, and an admin dashboard.

## 🚀 Features

- **Real-time GPS Tracking**: Users can track their rides in real-time
- **Geolocation**: Advanced geolocation services to match riders with drivers
- **Ride Matching**: Efficient algorithms for pairing riders and drivers
- **Payments**: Integrates with payment gateways for seamless transactions
- **Admin Dashboard**: A dashboard for managing rides, users, and drivers
- **📊 Vercel Web Analytics**: Integrated analytics for tracking visitor data and performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS
- **Analytics**: Vercel Web Analytics
- **Deployment**: Vercel

## 📦 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/diazmartinest41-design/servitaxisrapi.git
cd servitaxisrapi
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📊 Analytics

This project uses **Vercel Web Analytics** for privacy-friendly visitor tracking. The analytics are automatically enabled and will start collecting data once deployed to Vercel.

For more details, see [ANALYTICS.md](./ANALYTICS.md).

## 🏗️ Project Structure

```
servitaxisrapi/
│
├── app/
│   ├── layout.tsx          # Root layout with Analytics
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   └── dashboard/
│       └── page.tsx        # Dashboard page
│
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
├── ANALYTICS.md            # Analytics documentation
└── README.md               # This file
```

## 🚢 Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new):

```bash
vercel deploy
```

Or connect your Git repository for automatic deployments on every push.

### Enable Analytics

1. Go to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. Click **Enable** to activate Web Analytics

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**diazmartinest41-design**

---

Built with ❤️ using [Next.js](https://nextjs.org/) and [Vercel](https://vercel.com/)