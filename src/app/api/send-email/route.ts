import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Инициализируем Resend вашим API ключом
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Отправка письма
    const data = await resend.emails.send({
      from: 'SolSafe Form <onboarding@resend.dev>', // После настройки домена замените на contact@solsafe.pl
      to: ['Solsafe@Solsafe.pl'], // Куда должны приходить заявки
      subject: `Nowa wiadomość od: ${name}`,
      replyTo: email,
      text: `Imię: ${name}\nE-mail: ${email}\n\nWiadomość:\n${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}