# Rentry Engineering storefront

Next.js customer storefront and admin UI. The separate backend handles `/api/*`; this app proxies API requests to preserve same-origin sessions and Google OAuth.

## Local
1. Run `npm ci`.
2. Copy `.env.example` to `.env.local` and set `BACKEND_API_URL` to the backend.
3. Run `npm run dev`.

## Render
Deploy from `render.yaml`. If you change the backend service name, update `BACKEND_API_URL` and rebuild. Register the Google callback as `https://<frontend-host>/api/auth/google/callback` and the M-Pesa callback as `https://<frontend-host>/api/payments/mpesa/callback`; the frontend proxy forwards both to the backend.
