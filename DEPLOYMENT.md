# Deploying Kottster Admin Panel

**⚠️ Important:** Kottster requires a persistent Node.js server. Vercel's serverless architecture is not ideal for Kottster applications. Use Railway, Render, or DigitalOcean instead for best results.

## Recommended: Deploy to Railway

Railway is perfect for Kottster applications with zero configuration needed.

### Quick Deploy to Railway

1. **Sign up** at https://railway.app
2. **Create new project** → Deploy from GitHub repo
3. **Select** `qkeluna/lunaxcode-admin-panel`
4. **Add environment variables:**
   ```
   DATABASE_URL=your_neon_connection_string
   ```
5. Railway will auto-detect and deploy!

Your app will be live at: `https://your-app.up.railway.app`

---

## Alternative: Deploy to Render

Render offers free tier and is great for Node.js apps.

### Deploy to Render

1. **Sign up** at https://render.com
2. **New** → Web Service
3. **Connect** your GitHub repo: `qkeluna/lunaxcode-admin-panel`
4. **Configure:**
   - **Build Command:** `pnpm install && pnpm build`
   - **Start Command:** `pnpm start`
   - **Environment:** Node
5. **Add environment variables** (same as above)
6. **Create Web Service**

---

## Alternative: DigitalOcean App Platform

### Deploy to DigitalOcean

1. **Sign up** at https://www.digitalocean.com
2. **Create App** → GitHub
3. **Select repo:** `qkeluna/lunaxcode-admin-panel`
4. **Configure:**
   - **Type:** Web Service
   - **Build Command:** `pnpm install && pnpm build`
   - **Run Command:** `pnpm start`
5. **Add environment variables**
6. **Launch**

---

## Environment Variables (All Platforms)

Add these environment variables to your deployment platform:

```env
# Required
DATABASE_URL=postgresql://neondb_owner:...@ep-noisy-unit...neon.tech/neondb?sslmode=require

# Optional (will use defaults from app/_server/app.ts if not set)
KOTTSTER_SECRET_KEY=x0yFcOk2uOM9paYsxUWutW7ekBUwjD56
KOTTSTER_API_TOKEN=jgnVNZkN0tIV7X1KYhwR2pAE5QbaxpSa
KOTTSTER_JWT_SECRET_SALT=U2rvjmvnhJnVpGUM
```

**⚠️ For production:** Generate new secure random values:
```bash
openssl rand -hex 16  # For 32-char keys
openssl rand -hex 8   # For 16-char salt
```

---

## Why Not Vercel?

Vercel is optimized for:
- Static sites
- Serverless functions
- Edge computing

Kottster needs:
- Persistent Node.js process
- WebSocket support
- Stateful connections
- SQLite database (for identity provider)

**Result:** Vercel's serverless architecture causes:
- 404 errors on API endpoints
- SQLite database lost between requests
- Poor performance

**Solution:** Use Railway, Render, or DigitalOcean which run persistent Node.js servers.

---

## Verifying Deployment

After deployment on any platform:

1. Visit your deployment URL
2. Login with credentials:
   - **Username:** `admin`
   - **Password:** `Ymerick102728`
3. Verify:
   - All model pages load
   - Database connections work
   - CRUD operations function

---

## Troubleshooting

### Database Connection Issues

**Symptom:** "Connection refused" or "Database not found"

**Solution:**
1. Verify `DATABASE_URL` is correctly set
2. Check Neon database is active
3. Ensure SSL mode: `?sslmode=require`

### Build Failures

**Symptom:** "Module not found" or compilation errors

**Solution:**
1. Ensure Node.js version ≥20
2. Clear build cache and redeploy
3. Check `package.json` dependencies

### SQLite Errors

**Symptom:** "better-sqlite3" errors

**Solution:**
- The identity provider uses SQLite for user management
- Most platforms handle this automatically
- If issues persist, the database will be recreated on startup

---

## Custom Domain

All platforms support custom domains:

**Railway:**
- Settings → Domains → Add Custom Domain

**Render:**
- Settings → Custom Domains → Add

**DigitalOcean:**
- Settings → Domains → Add Domain

---

## Recommended: Railway

**Why Railway?**
- ✅ Zero configuration
- ✅ Auto-detects Node.js
- ✅ Free tier available
- ✅ Built-in PostgreSQL if needed
- ✅ Automatic HTTPS
- ✅ Easy rollbacks

**Perfect for Kottster applications!**

Deploy now: https://railway.app

---

## Support

- **Kottster:** https://kottster.app/docs/
- **Railway:** https://docs.railway.app
- **Render:** https://render.com/docs
- **Neon:** https://neon.tech/docs
