# Make the lesson scheduler real

This demo’s calendar is **front-end only**: slots are hard-coded, clicks open a dialog, nothing is stored or emailed.

Use this guide when a client wants **live booking**. Pick the lightest option that matches their budget.

---

## Option 1 — Embed Cal.com or Calendly (fastest)

**Best for:** Pro package without custom backend cost.

1. Create a Cal.com (or Calendly) account for the studio.
2. Define event types: Guitar 30m, Piano 30m, Vocals 45m, Rehearsal 1h.
3. Set availability per teacher / room.
4. Replace the demo `#schedule` section with their embed snippet, e.g.:

```html
<!-- Cal.com example -->
<iframe
  src="https://cal.com/your-studio/guitar-30"
  class="h-[700px] w-full rounded-2xl border-0"
></iframe>
```

5. Optional: add webhook → Zapier/Make → Google Calendar or email.

**Hosting impact:** Still mostly static. Embed loads third-party JS. Usually fine on Vercel Hobby for demos; production businesses should use a commercial hosting plan and a custom domain.

**Pros:** Days not weeks; payments/deposits available via their marketplace.  
**Cons:** Less brand control; monthly SaaS fee.

---

## Option 2 — Custom slots (Astro API / Vercel Function + DB)

**Best for:** Studios that need owned data, multi-teacher rules, or Aussie invoicing later.

### Architecture

```text
Browser → POST /api/book → Vercel Function
                         → Postgres (Neon/Supabase): slots + bookings
                         → Email (Resend) confirmation
                         → Optional Stripe PaymentIntent for deposit
```

### Suggested steps

1. **Data model**
   - `teachers`, `lesson_types`, `availability_rules`, `bookings`
2. **API**
   - `GET /api/slots?from=&to=&lesson=` — free slots
   - `POST /api/book` — create booking (validate conflicts)
3. **Astro**
   - Switch project to hybrid/server output **or** keep static site + separate `/api` Functions
4. **Auth (optional)**
   - Magic link for returning students; admin dashboard for staff
5. **Payments (optional)**
   - Stripe Checkout for first-lesson deposit; refund policy in FAQ

### Env vars (examples)

```bash
DATABASE_URL=
RESEND_API_KEY=
STRIPE_SECRET_KEY=
PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

**Hosting impact:** Needs serverless runtime + secrets. This is the main reason **Pro** hosting/cost is higher than Starter/Growth static sites. Prefer **Vercel Pro** (or equivalent) for production so usage isn’t capped like Hobby personal projects.

**Pros:** Full control, white-label UX.  
**Cons:** More build + maintenance; you own uptime and conflict logic.

---

## Option 3 — Hybrid

Static marketing site (this repo’s design) + **Cal.com for booking only** + custom pages for teachers/pricing. Often the sweet spot for Melbourne music teachers on a budget.

---

## What to quote clients

| Approach | Ballpark build add-on | Ongoing |
|---|---|---|
| Cal.com / Calendly embed | Low (hours–few days) | Their SaaS fee |
| Custom booking + email | Medium–high | Hosting + DB + email |
| Custom + Stripe deposits | High | Hosting + Stripe fees |

Always document: cancellation policy, who owns the Cal/Stripe accounts, and who updates availability weekly.

---

## Replacing this demo UI

1. Keep the visual design of `#schedule`.
2. Delete the hard-coded `open` map in `Scheduler.astro`.
3. Either paste an embed **or** fetch `/api/slots` and render buttons from JSON.
4. On confirm, `POST /api/book` instead of `dialog.showModal()` only.
