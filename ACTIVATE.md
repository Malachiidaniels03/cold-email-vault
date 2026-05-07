# Cold Email Vault — Activation (read this once)

Your store is live. To start taking money you need to do **one** thing: connect Stripe. Nothing else is required.

---

## Step 1 — Connect Stripe (60 seconds)

1. Go to **https://dashboard.stripe.com** and sign in (or sign up — it's free, no monthly fees, takes 2 minutes if you don't have an account).
2. Top-left menu → **Products** → **+ Add product**.
   - Name: `The Cold Email Vault`
   - Description: `50 B2B cold email templates, 4 frameworks, 40 subject lines, 3 follow-up sequences. PDF, instant download.`
   - Image: optional, skip for now
   - Price: **$19.00 USD**, **One-time**
   - Save.
3. On the product page, click **"Create payment link"** (top right).
4. Configure the link:
   - **After payment** → **Don't show confirmation page** → **Redirect to URL**
   - Paste: `https://malachiidaniels03.github.io/cold-email-vault/success.html`
   - (If you set up a custom domain, replace with `https://yourdomain.com/success.html`.)
   - Save → Stripe gives you a URL like `https://buy.stripe.com/aBcDeFgHi`.
5. **Copy that URL.**
6. Open `site/config.js` in any text editor.
7. Paste the URL between the empty quotes:
   ```js
   STRIPE_PAYMENT_LINK: "https://buy.stripe.com/aBcDeFgHi"
   ```
8. Save the file. Run this in a terminal from the project folder:
   ```bash
   git add site/config.js
   git commit -m "wire stripe payment link"
   git push
   ```
9. GitHub Pages re-deploys in ~60 seconds. **You're now taking $19 payments.**

---

## Step 2 — Verify the flow once

1. Open the site in a browser.
2. Click **Buy the Vault**.
3. Use Stripe's test card: `4242 4242 4242 4242`, any future expiry, any CVC, any zip.
4. Confirm it lands you on the success page and the PDF downloads.
5. In Stripe dashboard → switch off "Test mode" so real cards work.

---

## Step 3 — Get traffic

Three free channels you can post to today. The exact copy is in `LAUNCH-COPY.md`. Posting is the only part that has to come from you (platforms require your account).

If you want paid traffic instead: open Meta Ads or Google Ads, add a card, paste the prewritten ad copy, set $10/day budget. Traffic starts within a few hours. Conversions depend on traffic volume — first sale typically lands within 1-3 days at $10/day on a $19 product if the audience is right.

---

## Where things live

- `site/` — the actual website (deployed to GitHub Pages)
- `site/cold-email-vault.pdf` — the product itself
- `site/config.js` — the **only file you ever edit**
- `product/vault.html` — the source HTML the PDF was built from (regenerate via `google-chrome --headless --print-to-pdf=...` if you ever update content)
- `LAUNCH-COPY.md` — pre-written posts for Reddit, X, HN, Product Hunt
- `ACTIVATE.md` — this file

---

## Refunds

Reply to the Stripe receipt with "refund" → in Stripe dashboard → Payments → click the payment → Refund. Takes 30 seconds. Promised in the FAQ as 14-day, no questions asked.

---

## If anything breaks

The site is static HTML on GitHub Pages — there's nothing server-side to crash. If the buy button stops working, it's almost always one of:
- Stripe link expired/disabled (check Stripe dashboard)
- `config.js` got reverted or the URL has a typo
- GitHub Pages is mid-deploy (wait 60 seconds)

That's it. Good luck.
