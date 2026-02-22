import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, company, message } = await req.json();

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Inquiry</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          }
          .header {
            background-color: #0ea5e9;
            color: white;
            padding: 30px 40px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            letter-spacing: 0.5px;
          }
          .content {
            padding: 40px;
          }
          .details-grid {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 15px;
            margin-bottom: 30px;
          }
          .label {
            font-weight: 600;
            color: #666;
            font-size: 14px;
            text-transform: uppercase;
          }
          .value {
            color: #111;
            font-size: 16px;
          }
          .message-box {
            background-color: #f8fafc;
            border-left: 4px solid #0ea5e9;
            padding: 20px;
            margin-top: 10px;
            border-radius: 4px;
          }
          .footer {
            background-color: #f1f5f9;
            color: #64748b;
            padding: 20px;
            text-align: center;
            font-size: 12px;
          }
          .footer p {
            margin: 5px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Project Inquiry</h1>
          </div>
          <div class="content">
            <p style="font-size: 18px; margin-bottom: 25px;">You have received a new message through the <strong>HeliosTech</strong> contact form.</p>
            
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="120" style="padding-bottom: 15px; font-weight: 600; color: #666; font-size: 14px; text-transform: uppercase;">Name:</td>
                <td style="padding-bottom: 15px; color: #111; font-size: 16px;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td width="120" style="padding-bottom: 15px; font-weight: 600; color: #666; font-size: 14px; text-transform: uppercase;">Email:</td>
                <td style="padding-bottom: 15px; color: #111; font-size: 16px;"><a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td width="120" style="padding-bottom: 15px; font-weight: 600; color: #666; font-size: 14px; text-transform: uppercase;">Company:</td>
                <td style="padding-bottom: 15px; color: #111; font-size: 16px;">${company || 'N/A'}</td>
              </tr>
            </table>

            <p style="font-weight: 600; color: #666; font-size: 14px; text-transform: uppercase; margin-top: 25px; margin-bottom: 10px;">Message:</p>
            <div class="message-box">
              ${message.replace(/\n/g, '<br/>')}
            </div>
          </div>
          <div class="footer">
            <p>&copy; 2024 HeliosTech Solutions. This is an automated notification.</p>
            <p>San Francisco &bull; Hanoi &bull; Worldwide</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send the email
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`, // Recommended to send from your own address to avoid SPF/DMARC issues
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New Project Inquiry from ${firstName} ${lastName}`,
      html: emailTemplate,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
