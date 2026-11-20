# Nexbook — Client Booking Website Template

A reusable React + Vite appointment-booking frontend maintained by Nexbot Solutions. Use this as the master project, then create a separate copy for each client and configure the business details before deployment.

## Quick start

```bash
npm install
cp .env.example .env
npm run dev
```

## Customize a client

Most client-facing business information lives in `src/config.js`:

- `brand`, `tagline`, `location`, `phone`, `instagram`
- `accent`, `accentSoft`, `accentDark` for the brand palette
- `services` for service names, durations and prices
- `workingHours` and `slotIntervalMinutes` for the schedule

Update the page title and SEO description in `index.html`. Replace any client-specific copy, imagery or sections in `src/pages/LandingPage.jsx` when the project requires it.

## Booking API requirement

This repository contains the React frontend. Booking and availability requests are sent to the API configured by `VITE_API_BASE` in `src/api/bookings.js`. A compatible backend must provide:

- `GET /slots/:serviceId/:date`
- `POST /bookings`
- `GET /bookings/:bookingId`
- `POST /waitlist`

Set `VITE_API_BASE` to the backend URL for each client deployment. The frontend alone does not persist bookings or provide a production-ready booking database.

## Admin area

The project includes `/admin`, `/admin/forgot` and `/admin/dashboard` routes. Review `src/api/admin.js`, the admin authentication flow and the backend implementation before enabling the admin dashboard for a paying client. Do not deploy with demo or development credentials.

## Build

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` directory to your preferred static hosting provider. Configure the correct `VITE_API_BASE` environment variable at build time.

## Suggested client workflow

1. Keep this repository as the untouched master.
2. Duplicate it into a new client project.
3. Update `src/config.js`, `index.html` and client-specific content.
4. Connect and test that client's booking API.
5. Test mobile layouts, booking, confirmation, cancellation/rescheduling requirements and admin access.
6. Deploy the client copy separately.
