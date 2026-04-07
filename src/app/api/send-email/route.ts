import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  // 1. Проверяем ключ ВНУТРИ функции
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Błąd: Brak klucza API Resend");
    return NextResponse.json({ success: false, error: "Missing API Key" }, { status: 500 });
  }

  // 2. Инициализируем только если ключ есть
  const resend = new Resend(apiKey);

  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: 'SolSafe Form <onboarding@resend.dev>', 
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