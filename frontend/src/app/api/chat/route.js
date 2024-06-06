import { NextResponse } from 'next/server';
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY });

export async function POST(req) {

  if (req.method === 'POST') {
    try {
      const { message } = await req.json();
      console.log(message);

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { "role": "system", "content": "You are a helpful assistant." },
          { "role": "user", "content": "Who won the world series in 2020?" },
          { "role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020." },
          { "role": "user", "content": "Where was it played?" }
        ],
      });

      console.log(response.choices[0]);
      return NextResponse.json({ success: true, response: response.choices[0] }, { status: 200 });

    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }
}
