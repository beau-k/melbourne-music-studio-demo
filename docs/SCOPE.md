# Scope — Pro package (music studio demo)

This repo is the **Pro** portfolio demo: a Melbourne music lesson studio with an interactive (demo-only) scheduler.

## Included in this demo

- Marketing sections: hero, lesson packages, teachers, FAQ
- Interactive week-grid scheduler (client-side only)
- Confirmation dialog explaining demo mode
- Sample “Pro package” footer
- Docs for making booking real (`MAKE-IT-REAL-BOOKING.md`)

## Pro vs other packages

| | Starter | Growth | **Pro (this site)** |
|---|---|---|---|
| Main conversion | Call / quote | Booking request form | Slot picker / live booking path |
| Interactivity | Low | Forms | Calendar UI (+ real booking when upgraded) |
| Hosting story | Static | Static | Static demo; production booking often needs Functions + SaaS/DB |

## Typical client deliverable (Pro)

Everything in Growth, plus one of:

- Cal.com / Calendly (or similar) embedded and branded, **or**
- Custom availability API + email confirmations (quoted separately)

## Not included in the public demo

- Persisted bookings
- Email / SMS
- Payments
- Staff admin panel
