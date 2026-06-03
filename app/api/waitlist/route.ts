import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const SUPABASE_URL  = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_KEY  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const FROM_EMAIL    = 'VitLoop <hello@vitloop.com>'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 })
    }

    // 1. Add to Supabase waitlist
    const dbRes = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({ email }),
    })

    if (dbRes.status === 409) {
      return NextResponse.json({ error: 'already_on_waitlist' }, { status: 409 })
    }

    if (!dbRes.ok) {
      return NextResponse.json({ error: 'Database error.' }, { status: 500 })
    }

    // 2. Send confirmation email via Resend
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "You're on the VitLoop waitlist ✅",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body style="margin:0;padding:0;background:#060608;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#060608;padding:40px 20px;">
              <tr>
                <td align="center">
                  <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

                    <!-- Logo -->
                    <tr>
                      <td align="center" style="padding-bottom:32px;">
                        <div style="display:inline-block;background:#060608;border:1px solid rgba(0,255,135,0.2);border-radius:14px;padding:12px 20px;">
                          <span style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">
                            Vit<span style="color:#00FF87;">Loop</span>
                          </span>
                        </div>
                      </td>
                    </tr>

                    <!-- Card -->
                    <tr>
                      <td style="background:#0c0c10;border:1px solid rgba(255,255,255,0.06);border-radius:20px;padding:40px 36px;">

                        <!-- Green check -->
                        <div style="text-align:center;margin-bottom:24px;">
                          <div style="display:inline-block;width:56px;height:56px;background:rgba(0,255,135,0.1);border:1px solid rgba(0,255,135,0.25);border-radius:16px;line-height:56px;font-size:24px;">
                            ✅
                          </div>
                        </div>

                        <!-- Headline -->
                        <h1 style="margin:0 0 12px;font-size:28px;font-weight:800;color:#ffffff;text-align:center;letter-spacing:-0.5px;">
                          You're in.
                        </h1>

                        <p style="margin:0 0 24px;font-size:15px;color:#a1a1aa;text-align:center;line-height:1.6;">
                          Welcome to the VitLoop waitlist. You'll be among the first to get access when we launch.
                        </p>

                        <!-- Divider -->
                        <div style="height:1px;background:rgba(255,255,255,0.05);margin:0 0 28px;"></div>

                        <!-- What is VitLoop -->
                        <h2 style="margin:0 0 12px;font-size:13px;font-weight:700;color:#00FF87;letter-spacing:2px;text-transform:uppercase;">
                          What is VitLoop?
                        </h2>
                        <p style="margin:0 0 24px;font-size:14px;color:#a1a1aa;line-height:1.7;">
                          VitLoop is an AI fitness coach that connects what you eat to how you train — automatically.
                          Snap your lunch, and your evening workout updates. No manual input. No guesswork.
                          One coach that knows your full day.
                        </p>

                        <!-- What to expect -->
                        <h2 style="margin:0 0 12px;font-size:13px;font-weight:700;color:#00FF87;letter-spacing:2px;text-transform:uppercase;">
                          What happens next?
                        </h2>
                        <table cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                          ${[
                            ['🚀', 'Early access', 'You\'ll get the app before anyone else'],
                            ['💰', 'Founding member pricing', 'Special rate locked in forever'],
                            ['📬', 'Zero spam', 'We only email when it matters'],
                          ].map(([icon, title, desc]) => `
                            <tr>
                              <td style="padding:6px 12px 6px 0;vertical-align:top;font-size:18px;">${icon}</td>
                              <td style="padding:6px 0;">
                                <span style="font-size:14px;font-weight:600;color:#ffffff;">${title}</span>
                                <span style="font-size:13px;color:#71717a;"> — ${desc}</span>
                              </td>
                            </tr>
                          `).join('')}
                        </table>

                        <!-- CTA Button -->
                        <div style="text-align:center;margin-bottom:8px;">
                          <a href="https://vitloop.com" style="display:inline-block;background:#00FF87;color:#060608;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:100px;">
                            Visit vitloop.com →
                          </a>
                        </div>

                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td align="center" style="padding-top:28px;">
                        <p style="margin:0;font-size:12px;color:#3f3f46;">
                          You're receiving this because you joined the VitLoop waitlist.<br/>
                          <a href="https://vitloop.com" style="color:#52525b;text-decoration:none;">vitloop.com</a>
                        </p>
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (err) {
    console.error('Waitlist error:', err)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
