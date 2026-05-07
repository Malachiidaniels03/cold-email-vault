// ───────────────────────────────────────────────────────────────────────────
// COLD EMAIL VAULT — STRIPE CONFIG
// ───────────────────────────────────────────────────────────────────────────
//
// To activate paid checkout:
//   1. Sign in to Stripe → https://dashboard.stripe.com
//   2. Products → "+ Add product"
//        Name: The Cold Email Vault
//        Price: $19 USD, one-time
//   3. After saving, click "Create payment link" on the product
//   4. In the Payment Link settings:
//        Confirmation page → "Don't show confirmation page"
//        After payment → Redirect to:
//          https://<YOUR-PAGES-URL>/success.html
//   5. Copy the Payment Link URL Stripe gives you (looks like https://buy.stripe.com/xxx)
//   6. Paste it below, between the quotes, replacing the empty string
//   7. Commit + push — site auto-deploys via GitHub Pages
//
// Until this is set, the buy button gracefully shows an email fallback
// instead of breaking. The site stays live and indexable either way.
// ───────────────────────────────────────────────────────────────────────────

window.COLD_EMAIL_VAULT_CONFIG = {
  STRIPE_PAYMENT_LINK: ""
};
