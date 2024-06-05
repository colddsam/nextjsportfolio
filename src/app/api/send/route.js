import { Resend } from 'resend';
import { FeedbackEmail } from '@/templates/email/contact-form';
import { ThankYouEmail } from '@/templates/email/thanks-email';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { first, second, email, designation, feedback } = body;

    const { data, error } = await resend.emails.send({
      from: `New Feedback <noreply@${process.env.NEXT_PUBLIC_SEND_EMAIL}>`,
      to: [process.env.NEXT_PUBLIC_DELIVER_EMAIL],
      subject: '🎉 New feedback from your portfolio',
      react: FeedbackEmail({ first: first,second: second,email:email,designation:designation,feedback:feedback}),
    });
      
    const { fed, federr } = await resend.emails.send({
      from: `Feedback Accepted <noreply@${process.env.NEXT_PUBLIC_SEND_EMAIL}>`,
      to: [email],
      subject: '🎉 Thanks for visiting my profile',
      react: ThankYouEmail({ first: first}),
    });

      
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    const rawBody = await req.text();
    console.error('Error parsing JSON:', rawBody);
    console.error('Error details:', error);

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
