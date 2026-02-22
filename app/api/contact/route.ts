import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!process.env.RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Missing API key" }),
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "thirisha97@gmail.com",
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    })

    return Response.json({ success: true, data })
  } catch (error) {
    console.error(error)
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      { status: 500 }
    )
  }
}