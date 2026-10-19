# Rentry Engineering storefront

Next.js customer storefront and admin UI. The separate backend handles `/api/*`; this app proxies API requests to preserve same-origin sessions and Google OAuth.

## Local
1. Run `npm ci`.
2. Copy `.env.example` to `.env.local` and set `BACKEND_API_URL` to the backend.
3. Run `npm run dev`.

## Vercel
Import `Kenshitawa/Rentry_Frontend` as a Next.js project. Set `BACKEND_API_URL` to the Render backend URL (the production default is `https://rentry-backend.onrender.com`) and `NEXT_PUBLIC_WHATSAPP_NUMBER` if needed. Register the Google callback as `https://<frontend-host>/api/auth/google/callback` and set the Daraja callback to `https://<frontend-host>/api/payments/mpesa/callback`; the frontend proxy forwards both to the backend.
