# Deploying Kottster Admin Panel to Vercel

This guide will help you deploy your Kottster admin panel to Vercel.

## Prerequisites

1. A Vercel account (sign up at https://vercel.com)
2. Vercel CLI installed: `npm i -g vercel`
3. Your Neon PostgreSQL database connection string
4. Admin credentials

## Step 1: Prepare Environment Variables

Your admin panel needs the following environment variables:

```env
DATABASE_URL=your_neon_postgres_connection_string
KOTTSTER_SECRET_KEY=your_secret_key
KOTTSTER_API_TOKEN=your_api_token
KOTTSTER_JWT_SECRET_SALT=your_jwt_salt
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password
```

**Important:** Generate new secure values for production:
- `KOTTSTER_SECRET_KEY`: 32-character random string
- `KOTTSTER_API_TOKEN`: 32-character random string
- `KOTTSTER_JWT_SECRET_SALT`: 16-character random string
- `ADMIN_PASSWORD`: Strong password

You can generate secure random strings using:
```bash
openssl rand -hex 16  # For 32-character hex string
openssl rand -hex 8   # For 16-character hex string
```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel CLI

1. Login to Vercel:
   ```bash
   vercel login
   ```

2. Deploy the project:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No
   - Project name: `lunaxcode-admin-panel` (or your choice)
   - Directory: `./` (current directory)
   - Override settings: No

4. Add environment variables:
   ```bash
   vercel env add DATABASE_URL
   vercel env add KOTTSTER_SECRET_KEY
   vercel env add KOTTSTER_API_TOKEN
   vercel env add KOTTSTER_JWT_SECRET_SALT
   vercel env add ADMIN_USERNAME
   vercel env add ADMIN_PASSWORD
   ```

5. Deploy to production:
   ```bash
   vercel --prod
   ```

### Option B: Deploy via Vercel Dashboard

1. Go to https://vercel.com/new

2. Import your Git repository (GitHub, GitLab, or Bitbucket)

3. Configure the project:
   - **Framework Preset:** Other
   - **Build Command:** `pnpm install && pnpm build`
   - **Output Directory:** `dist/client`
   - **Install Command:** `pnpm install`

4. Add Environment Variables in the dashboard:
   - Go to Settings → Environment Variables
   - Add all the variables listed above
   - Make sure to add them for Production, Preview, and Development

5. Click "Deploy"

## Step 3: Verify Deployment

1. Once deployed, Vercel will provide you with a URL like: `https://your-project.vercel.app`

2. Visit the URL and login with your admin credentials

3. Verify that:
   - All pages load correctly
   - Database connections work
   - CRUD operations function properly

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version matches (`>=20`)

### Database Connection Issues

If database connection fails:

1. Verify `DATABASE_URL` is correctly set
2. Check Neon database is accessible from Vercel's IP ranges
3. Ensure SSL mode is enabled in connection string: `?sslmode=require`

### SQLite Issues

The app uses `better-sqlite3` for local identity provider. If you encounter issues:

1. The SQLite database (`app.db`) will be created in the serverless function
2. Note: Vercel functions are stateless, so consider using an external authentication provider for production

### Environment Variables Not Working

1. Go to Vercel Dashboard → Settings → Environment Variables
2. Ensure variables are added for the correct environment (Production/Preview/Development)
3. Redeploy after adding/changing environment variables

## Security Recommendations

1. **Never commit** `.env` files to Git
2. **Rotate secrets** regularly
3. **Use strong passwords** for admin accounts
4. **Enable 2FA** on your Vercel account
5. **Restrict database access** to only necessary IP ranges

## Updating Your Deployment

To update your deployment:

```bash
# Make your changes
git add .
git commit -m "Your changes"
git push

# Vercel will automatically deploy
# Or manually deploy:
vercel --prod
```

## Custom Domain

To add a custom domain:

1. Go to Vercel Dashboard → Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Wait for DNS propagation (up to 48 hours)

## Performance Tips

1. **Enable caching** for static assets
2. **Use connection pooling** for database (Neon provides this)
3. **Monitor function execution time** in Vercel dashboard
4. **Consider Edge Functions** for faster response times

## Support

- Kottster Documentation: https://kottster.app/docs/
- Vercel Documentation: https://vercel.com/docs
- Neon Documentation: https://neon.tech/docs
