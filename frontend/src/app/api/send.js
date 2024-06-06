import { Resend } from 'resend';
import { FeedbackEmail } from '@/templates/email/contact-form';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async function handler(req, res) {
    console.log('a');
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
    console.log('b');
  try {
    const { first, second, email, designation, feedback } = JSON.parse(req.body);
    console.log('c');
    const data = await resend.sendEmail({
      from: email,
      to: process.env.NEXT_PUBLIC_DELIVER_EMAIL,
      subject: "🎉 New feedback from your portfolio!",
      html: "", 
      react: FeedbackEmail({ first, second, email, designation, feedback }),
    });
    console.log('d');
    res.status(200).json(data);
      console.log('e');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
