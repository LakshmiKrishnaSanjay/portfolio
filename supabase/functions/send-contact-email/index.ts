// import { Resend } from "npm:resend"

// const corsHeaders = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
//   "Access-Control-Allow-Methods": "POST, OPTIONS",
// }

// Deno.serve(async (req: { method: string; json: () => any }) => {
//   if (req.method === "OPTIONS") {
//     return new Response("ok", { headers: corsHeaders })
//   }

//   try {
//     if (req.method !== "POST") {
//       return new Response(
//         JSON.stringify({ error: "Method not allowed" }),
//         {
//           status: 405,
//           headers: {
//             ...corsHeaders,
//             "Content-Type": "application/json",
//           },
//         }
//       )
//     }

//     const body = await req.json()
//     console.log("Incoming body:", body)

//     const { name, email, message } = body

//     if (!name || !email || !message) {
//       return new Response(
//         JSON.stringify({ error: "Missing required fields", body }),
//         {
//           status: 400,
//           headers: {
//             ...corsHeaders,
//             "Content-Type": "application/json",
//           },
//         }
//       )
//     }

//     const resendApiKey = Deno.env.get("RESEND_API_KEY")
//     const contactEmail = Deno.env.get("CONTACT_EMAIL")

//     console.log("Has RESEND_API_KEY:", !!resendApiKey)
//     console.log("Has CONTACT_EMAIL:", !!contactEmail)

//     if (!resendApiKey || !contactEmail) {
//       return new Response(
//         JSON.stringify({
//           error: "Missing server configuration",
//           hasResendKey: !!resendApiKey,
//           hasContactEmail: !!contactEmail,
//         }),
//         {
//           status: 500,
//           headers: {
//             ...corsHeaders,
//             "Content-Type": "application/json",
//           },
//         }
//       )
//     }

//     const resend = new Resend(resendApiKey)

//     const result = await resend.emails.send({
//       from: "Portfolio <no-reply@resend.dev>",
//       to: [contactEmail],
//       replyTo: email,
//       subject: "New portfolio inquiry",
//       html: `
//         <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
//           <h2>New Contact Form Submission</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Message:</strong></p>
//           <p>${String(message).replace(/\n/g, "<br>")}</p>
//         </div>
//       `,
//     })

//     console.log("Resend result:", JSON.stringify(result))

//     if (result.error) {
//       return new Response(
//         JSON.stringify({
//           error: result.error.message || "Failed to send email",
//           details: result.error,
//         }),
//         {
//           status: 500,
//           headers: {
//             ...corsHeaders,
//             "Content-Type": "application/json",
//           },
//         }
//       )
//     }

//     return new Response(
//       JSON.stringify({
//         success: true,
//         data: result.data,
//       }),
//       {
//         status: 200,
//         headers: {
//           ...corsHeaders,
//           "Content-Type": "application/json",
//         },
//       }
//     )
//   } catch (err) {
//     console.error("Function crash:", err)

//     return new Response(
//       JSON.stringify({
//         error: err instanceof Error ? err.message : "Unexpected error",
//       }),
//       {
//         status: 500,
//         headers: {
//           ...corsHeaders,
//           "Content-Type": "application/json",
//         },
//       }
//     )
//   }
// })


import { Resend } from "npm:resend"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        {
          status: 405,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      )
    }

    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      )
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY")
    const contactEmail = Deno.env.get("CONTACT_EMAIL")

    if (!resendApiKey || !contactEmail) {
      return new Response(
        JSON.stringify({
          error: "Missing server configuration",
          hasResendKey: !!resendApiKey,
          hasContactEmail: !!contactEmail,
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      )
    }

    const resend = new Resend(resendApiKey)

    const result = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email,
      subject: "New portfolio inquiry",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${String(message).replace(/\n/g, "<br>")}</p>
        </div>
      `,
    })

    if (result.error) {
      return new Response(
        JSON.stringify({
          error: result.error.message || "Failed to send email",
          details: result.error,
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      )
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: result.data,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    )
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: err instanceof Error ? err.message : "Unexpected error",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    )
  }
})