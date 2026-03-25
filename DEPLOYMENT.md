# Capila.ai Deployment Guide

## Quick Deploy to Vercel

### 1. Create Vercel Project
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### 2. Environment Variables
Add these in Vercel Dashboard → Project Settings → Environment Variables:

- `OPENAI_API_KEY` — Required for AI Konzultant

### 3. Custom Domain
In Vercel Dashboard → Domains:
- Add `capila.ai`
- Follow DNS configuration instructions

## Manual Deploy

1. Push code to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy

## Post-Deploy Checklist

- [ ] Test AI Konzultant chat
- [ ] Test workshop booking form
- [ ] Test CRM dashboard
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Set up custom domain
- [ ] Configure analytics (PostHog/Plausible)

## Next Steps (Phase 2)

1. **Supabase Integration**
   - Create project
   - Set up tables: `leads`, `conversations`
   - Migrate from in-memory storage

2. **Email Automation**
   - Resend account
   - Set up templates: welcome, reminder, follow-up
   - Configure sending domains

3. **Content**
   - Finish remaining 40 use cases in kniha.md
   - Add more case studies
   - Create blog posts

4. **Marketing**
   - LinkedIn campaign
   - SEO optimization
   - Google Ads setup
