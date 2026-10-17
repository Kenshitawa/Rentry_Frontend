# Google sign-in and M-Pesa setup

The store creates a customer account on first sign-in with a verified Google account. Google credentials and sessions are handled by the backend; keep Google secrets on the backend only. Register the frontend `/api/auth/google/callback` URL with Google OAuth.

## Google OAuth

1. Create a Web application OAuth client in Google Cloud Console.
2. Add `http://localhost:3000/api/auth/google/callback` for local development and the exact production frontend callback URL when deployed.
3. Set `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` and `FRONTEND_URL` in the backend environment.

## M-Pesa Daraja

1. Create a Daraja app and obtain the consumer key, consumer secret, shortcode and Lipa Na M-Pesa passkey.
2. Use `MPESA_ENVIRONMENT=sandbox` for simulator work. Use `production` only with live Safaricom credentials and a verified callback URL.
3. Set `MPESA_CALLBACK_URL` to the publicly reachable frontend URL ending in `/api/payments/mpesa/callback`; the same-origin proxy forwards it to the backend.
4. Configure all Daraja credentials in the backend environment. Do not put them in the frontend.

The backend reserves stock while STK Push is pending, verifies callbacks against Daraja, and restores stock if payment fails.

## Product images

The admin image finder uses Openverse search results filtered to permissive Creative Commons/public-domain licences. Check each source and licence before publishing. Product images can also be entered as an HTTPS URL.
