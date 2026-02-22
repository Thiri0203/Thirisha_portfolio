import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json()

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ error: "Missing fields" }),
                { status: 400 }
            )
        }

        const data = await resend.emails.send({
            from: "onboarding@resend.dev", // ⚠ EXACTLY this (no Portfolio name)
            to: "thirisha97@gmail.com",   // ⚠ must be your Resend account email
            subject: `New Portfolio Message from ${name}`,
            replyTo: email,
            html: `
    <h2>New Portfolio Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
        })

        return new Response(JSON.stringify({ success: true, data }), {
            status: 200,
        })
    } catch (error) {
        console.error("EMAIL ERROR:", error)
        return new Response(
            JSON.stringify({ error: "Failed to send email" }),
            { status: 500 }
        )
    }
}