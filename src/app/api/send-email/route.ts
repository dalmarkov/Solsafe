import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // Читаем данные из формы (просто чтобы убедиться, что они приходят)
    const data = await req.json();
    console.log("Получены данные из формы:", data);

    // Имитируем задержку сети (1.5 секунды), чтобы увидеть анимацию кнопки
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Возвращаем успех без реальной отправки через SMTP
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 });
  }
}