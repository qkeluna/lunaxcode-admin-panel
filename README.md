# LunaXCode Admin Panel

Admin panel built with [Kottster](https://kottster.app) connected to your Neon PostgreSQL database.

## Features

✅ **Complete CRUD Operations** for all database tables:
- Services
- Pricing Plans
- Add-ons
- Features
- Leads
- Contact Submissions
- Onboarding Submissions
- Onboarding Questions
- Company Info

✅ **Analytics Dashboard** with real-time metrics:
- Total leads, contacts, and onboarding submissions
- Lead breakdown by service type
- Onboarding status tracking
- Payment statistics
- Recent activity feed

✅ **User Management** with default admin credentials

## Quick Start

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Development Server
```bash
pnpm dev
```

The admin panel will be available at:
- **Frontend:** http://localhost:5480
- **API:** http://localhost:5481

### 3. Login
- **Username:** `admin`
- **Password:** `admin`

## Database Configuration

Your Neon PostgreSQL database is already configured in `app/_server/data-sources/neon.ts`.

For production, move the connection string to environment variables:

```env
DATABASE_URL=postgresql://your-connection-string
```

## Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Add a new data source (if needed)
pnpm dev:add-data-source
```

## Project Structure

```
lunaxcode-admin-panel/
├── app/
│   ├── _server/
│   │   ├── app.ts              # Main app configuration with analytics API
│   │   ├── server.ts           # Server entry point
│   │   └── data-sources/
│   │       └── neon.ts         # Neon PostgreSQL connection
│   ├── pages/
│   │   └── analytics/
│   │       └── index.tsx       # Analytics dashboard
│   └── main.tsx                # Frontend entry point
├── kottster-app.json           # Admin panel schema & models
└── package.json
```

## Database Tables

Your admin panel manages the following tables:

### Business Operations
- **Leads** - Customer inquiries with status tracking
- **Contact Submissions** - Contact form messages
- **Onboarding Submissions** - Client onboarding with payment tracking

### Content Management
- **Services** - Service offerings
- **Pricing Plans** - Pricing tiers
- **Add-ons** - Additional services
- **Features** - Feature listings

### Configuration
- **Onboarding Questions** - Service-specific questionnaires
- **Company Info** - Company details and settings

## Analytics API

Custom analytics endpoint available at `/api/analytics`:

```typescript
GET /api/analytics

Response:
{
  totalLeads: number,
  totalContacts: number,
  totalOnboarding: number,
  newLeads: number,
  pendingOnboarding: number,
  unreadContacts: number,
  leadsByServiceType: Array<{ service_type: string, count: number }>,
  onboardingByStatus: Array<{ status: string, count: number }>,
  paymentStats: { total_paid: number, total_unpaid: number },
  recentActivity: Array<{ type: string, description: string, timestamp: string }>
}
```

## Security Notes

⚠️ **Before deploying to production:**

1. Change the default admin credentials in `app/_server/app.ts`
2. Generate secure secret keys:
   ```typescript
   secretKey: process.env.KOTTSTER_SECRET_KEY,
   jwtSecretSalt: process.env.KOTTSTER_JWT_SALT,
   ```
3. Move all sensitive data to environment variables
4. Enable proper SSL/TLS encryption

## Customization

### Add New Models

Edit `kottster-app.json` to add new database tables to the admin panel:

```json
{
  "models": {
    "your_table": {
      "dataSource": "neon",
      "table": "your_table",
      "fields": { ... },
      "displayName": "Your Table",
      "icon": "table"
    }
  }
}
```

### Add Custom Pages

Create pages in `app/pages/` directory:

```tsx
// app/pages/custom-page/index.tsx
export default function CustomPage() {
  return <div>Your custom page</div>;
}

export const meta = {
  title: 'Custom Page',
  icon: 'settings',
  order: 10,
};
```

## Support

- [Kottster Documentation](https://kottster.app/docs)
- [Neon Documentation](https://neon.tech/docs)

## License

MIT
