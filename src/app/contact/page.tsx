import type { Metadata } from 'next';
import { ContactForm } from '../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — CloudTask',
  description: 'Get in touch with the CloudTask team.',
};

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ textAlign: 'center', padding: '100px 24px 60px', maxWidth: '780px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '52px', fontWeight: 800, letterSpacing: '-2px', margin: '0 0 20px' }}>
          Contact us
        </h1>
        <p style={{ fontSize: '18px', color: '#888', margin: '0 auto 40px' }}>
          We usually reply within one business day.
        </p>
        <ContactForm />
      </section>
    </div>
  );
}
