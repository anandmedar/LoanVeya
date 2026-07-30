# LoanVeya Credit Connect

A responsive React + Vite static site for independent loan facilitation and advisory enquiries.

## Run locally

1. Install Node.js 18 or newer.
2. Run `npm install`.
3. Start the site with `npm run dev`.
4. Create a production build with `npm run build`.

## Before launch

- In `src/main.jsx`, replace `YOUR_EMAIL@example.com` in `FORMSUBMIT_EMAIL` and footer contact information. FormSubmit requires the recipient to activate the email address on first use.
- Replace `WHATSAPP_NUMBER` if the advisor number changes. Use country code without `+` or spaces.
- Replace advisor placeholders for city and years of experience, add a real privacy policy URL, and add only verified testimonials.
- Review all content, contact consent wording, and regulatory obligations for your business before publishing.

## Deploy

Run `npm run build`, then deploy the generated `dist` folder to Netlify or Vercel. Both services can also detect Vite automatically from the repository; use `npm run build` as the build command and `dist` as the publish directory.
