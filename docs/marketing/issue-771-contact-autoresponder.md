# Marketing Strategy & Implementation: Inbound Autoresponder & Community Referral Loop

**Target Issue:** [zeduchat/zedu-fe#771](https://github.com/zeduchat/zedu-fe/issues/771)  
**Author:** Raji Habeeb Ayinde (`habeebraji`), Team Vulcan  
**Target:** Transform "Reach out to us" into an automated acquisition funnel & viral referral loop  
**Deliverable Ref:** `MKT-771-AUTORESPONDER`

---

## 1. Executive Strategy & Funnel Architecture

### The Problem

Prospective cohort organizers, bootcamp managers, and students who reach out via `zedu.chat` currently experience a 12–24 hour "dead zone" waiting for a human reply. At peak interest, there is zero interactive momentum.

### The Growth Loop Mechanism

```text
[Visitor submits "Reach out to us"]
               │
               ▼
[Immediate Branded Autoresponder (< 60s)]
       ├── 1. Instant Assurance & SLA ("We received your note, reply within 24h")
       ├── 2. Primary Frictionless Activation -> "Explore Interactive Workspace Demo"
       └── 3. Organic Growth Loop -> "Setting up a cohort? Share instant invite with co-leads"
               │
               ▼
[Recipient tests demo OR forwards invite to team / cohort leads]
               │
               ▼
[Traffic lands on zedu.chat with UTM tracking -> New Workspace Sign-ups]
```

### Funnel KPIs & Benchmarks

- **Delivery Speed:** < 60 seconds from form submit.
- **Target Open Rate:** > 65% (transactional confirmation expectation).
- **Target Click-Through Rate (CTR):** > 22% on the Primary Demo CTA.
- **Referral Forward / Share Rate:** > 8% of educators sharing with co-leads.

---

## 2. Email Copy & Content Strategy

### Subject Line Variations (A/B Test)

- **Variant A (Benefit & Curiosity - Recommended):** `We received your note! While you wait, explore Zedu live 🚀`
- **Variant B (Direct & Professional):** `Thanks for reaching out to Zedu — Explore our live workspace inside`
- **Variant C (Urgency / Active Trial):** `Your inquiry is confirmed: Here is instant access to Zedu`

### Preheader Text

> _Your message is in good hands. Jump straight into an active Zedu workspace while we review your note._

### Full Body Copy

```text
Hi there,

Thank you for reaching out to the Zedu team! We’ve received your message and our team is already reviewing it. You can expect a personal response from us within 24 hours.

In the meantime, why wait?

We built Zedu to eliminate the chaos of running cohorts across WhatsApp, Zoom, and scattered drives. You can jump directly into a live interactive demo workspace right now — no credit card or setup required:

[ Button: Explore the Live Workspace Demo → ]
URL: https://zedu.chat/?utm_source=reachout_email&utm_medium=email&utm_campaign=autoresponder_lead_capture&utm_content=primary_demo_cta

-------------------------------------------------------

💡 Setting up a cohort or learning community?
Don’t plan alone. If you're coordinating with instructors, co-founders, or TAs, forward them this fast-track invite link so they can test the workspace with you:

👉 Instant Team Invite Link:
https://zedu.chat/invite?ref=contact_autoresponder&utm_source=reachout_email&utm_medium=email&utm_campaign=referral_loop

-------------------------------------------------------

If you have additional details to add to your request, simply reply directly to this email.

Warm regards,
The Zedu Team
Building the unified learning platform for bootcamps and modern educators.

Zedu Technologies Inc. | https://zedu.chat
GitHub: https://github.com/zeduchat/zedu-fe | Community: https://zedu.chat/community
To adjust preferences or unsubscribe: https://zedu.chat/settings/notifications
```

---

## 3. Production Responsive HTML Email Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>We received your note! While you wait, explore Zedu live</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #f4f3fb;
        font-family:
          -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
          Arial, sans-serif;
        color: #15123d;
      }
      .wrapper {
        width: 100%;
        table-layout: fixed;
        background-color: #f4f3fb;
        padding: 40px 0;
      }
      .main {
        background-color: #ffffff;
        margin: 0 auto;
        width: 100%;
        max-width: 600px;
        border-radius: 16px;
        border: 1px solid #e5e3f3;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(29, 20, 120, 0.06);
      }
      .header {
        background: linear-gradient(135deg, #2a1d9c, #1d1478);
        padding: 32px 36px;
        text-align: left;
      }
      .header h1 {
        color: #ffffff;
        font-size: 24px;
        font-weight: 800;
        margin: 0;
      }
      .header p {
        color: #c9c3ff;
        font-size: 14px;
        margin: 6px 0 0;
      }
      .content {
        padding: 36px;
        line-height: 1.6;
        font-size: 15px;
      }
      .badge {
        display: inline-block;
        background-color: #ece8ff;
        color: #5b3fd6;
        padding: 4px 12px;
        border-radius: 99px;
        font-size: 12px;
        font-weight: 700;
        margin-bottom: 16px;
      }
      .btn {
        display: inline-block;
        background-color: #7b6cf2;
        color: #ffffff !important;
        text-decoration: none;
        padding: 14px 28px;
        border-radius: 99px;
        font-weight: 700;
        font-size: 15px;
        text-align: center;
        margin: 20px 0;
      }
      .referral-box {
        background-color: #f7f6fd;
        border: 1px solid #e2def8;
        border-radius: 12px;
        padding: 20px 24px;
        margin: 28px 0 16px;
      }
      .referral-box h3 {
        margin: 0 0 8px;
        font-size: 16px;
        color: #1d1478;
      }
      .link-pill {
        display: block;
        background: #ffffff;
        border: 1px dashed #7b6cf2;
        padding: 10px 14px;
        border-radius: 8px;
        color: #5b3fd6;
        text-decoration: none;
        word-break: break-all;
        font-family: monospace;
        font-size: 13px;
        margin-top: 10px;
      }
      .footer {
        background-color: #f4f3fb;
        padding: 24px 36px;
        font-size: 12px;
        color: #65638b;
        text-align: center;
        border-top: 1px solid #e5e3f3;
      }
      .footer a {
        color: #7b6cf2;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <table class="main" role="presentation" cellpadding="0" cellspacing="0">
        <tr>
          <td class="header">
            <h1>Zedu</h1>
            <p>The unified communication & learning hub for modern bootcamps</p>
          </td>
        </tr>
        <tr>
          <td class="content">
            <span class="badge">Inquiry Confirmed</span>
            <p><strong>Hi there,</strong></p>
            <p>
              Thank you for reaching out to us! We’ve received your note and our
              team is already reviewing it. You can expect a dedicated personal
              reply within <strong>24 hours</strong>.
            </p>
            <p>
              In the meantime, why wait? You can explore an active Zedu
              workspace right now — test cohort channels, live Buzz classrooms,
              and automated file hubs with zero friction:
            </p>

            <div style="text-align: center;">
              <a
                href="https://zedu.chat/?utm_source=reachout_email&utm_medium=email&utm_campaign=autoresponder_lead_capture&utm_content=primary_demo_cta"
                class="btn"
                target="_blank"
              >
                Explore the Live Workspace Demo →
              </a>
            </div>

            <div class="referral-box">
              <h3>👥 Setting up a cohort or community?</h3>
              <p style="margin: 0; font-size: 14px; color: #49466e;">
                Don't plan your tech stack alone. Share this fast-track invite
                link with your co-organizers or instructors to test the
                workspace together:
              </p>
              <a
                href="https://zedu.chat/invite?ref=contact_autoresponder&utm_source=reachout_email&utm_medium=email&utm_campaign=referral_loop"
                class="link-pill"
                target="_blank"
              >
                https://zedu.chat/invite?ref=contact_autoresponder
              </a>
            </div>

            <p style="margin-top: 24px; font-size: 13px; color: #65638b;">
              Have more details or an urgent requirement? Just reply directly to
              this email to add notes to your inquiry.
            </p>
          </td>
        </tr>
        <tr>
          <td class="footer">
            <p>
              © 2026 Zedu Technologies. Built for structured learning, not
              noise.
            </p>
            <p>
              <a href="https://github.com/zeduchat/zedu-fe" target="_blank"
                >GitHub</a
              >
              ·
              <a href="https://zedu.chat/pricing" target="_blank">Pricing</a> ·
              <a href="https://zedu.chat/resources" target="_blank"
                >Help Center</a
              >
            </p>
            <p>
              You received this transactional confirmation because you contacted
              Zedu via zedu.chat.
            </p>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
```

---

## 4. UTM Tracking & Attribution Schema

| Link Placement           | Destination URL               | `utm_source`     | `utm_medium` | `utm_campaign`               | `utm_content`            |
| :----------------------- | :---------------------------- | :--------------- | :----------- | :--------------------------- | :----------------------- |
| **Primary Demo CTA**     | `https://zedu.chat/`          | `reachout_email` | `email`      | `autoresponder_lead_capture` | `primary_demo_cta`       |
| **Referral Invite Link** | `https://zedu.chat/invite`    | `reachout_email` | `email`      | `referral_loop`              | `co_lead_shareable_link` |
| **Pricing Link**         | `https://zedu.chat/pricing`   | `reachout_email` | `email`      | `inbound_footer`             | `pricing_text_link`      |
| **Help Center**          | `https://zedu.chat/resources` | `reachout_email` | `email`      | `inbound_footer`             | `help_center_link`       |
