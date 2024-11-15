import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, username, confirmationLink } = body;

    if (!email || !confirmationLink) {
      console.log(email, confirmationLink, username);
      return NextResponse.json({ error: 'Email ou lien de confirmation manquant' }, { status: 402 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"RJinformatique" <PlanningJs>`,
      to: email,
      subject: 'Confirmation de votre inscription',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              padding: 0;
              margin: 0;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
              background-color: #007bff;
              color: white;
              text-align: center;
              padding: 10px;
              border-radius: 8px 8px 0 0;
            }
            .content {
              padding: 20px;
              text-align: left;
            }
            .button {
              border: 1px solid #007bff;
              display: inline-block;
              padding: 10px 20px;
              background-color: white;
              color: #007bff;
              text-decoration: none;
              border-radius: 5px;
              text-align: center;
              margin-top: 10px;
            }
            .footer {
              text-align: center;
              font-size: 12px;
              color: #888;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Bienvenue, ${username} !</h1>
            </div>
            <div class="content">
              <p>Merci de vous être inscrit sur notre site. Veuillez confirmer votre adresse email en cliquant sur le bouton ci-dessous :</p>
              <a href="${confirmationLink}" class="button">Confirmer mon email</a>
              <p>Si vous n'avez pas demandé cette inscription, vous pouvez ignorer cet email.</p>
            </div>
            <div class="footer">
              © 2024 RJinformatique. Tous droits réservés.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ error: 'Email de confirmation envoyé' }, { status: 200 });
    
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi de l\'email' }, { status: 500 });
  }
}
