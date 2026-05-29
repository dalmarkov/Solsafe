import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Brak danych" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'SolSafe <kontakt@solsafe.pl>', 
      to: ['Solsafe@Solsafe.pl'],
      subject: `Nowa wiadomość od: ${name}`,
      replyTo: email, 
      text: `Imię: ${name}\nE-mail: ${email}\n\nWiadomość:\n${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}