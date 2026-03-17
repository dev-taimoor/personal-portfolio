import { Html, Head, Body, Container, Section, Text, Button, Hr } from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export default function ContactEmail({ name, email, message, timestamp }: ContactEmailProps) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4' }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff' }}>
          <Section style={{ backgroundColor: '#1f2937', padding: '20px', textAlign: 'center' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '20px', fontWeight: 'bold' }}>
              {initials}
            </div>
            <Text style={{ color: '#ffffff', fontSize: '24px', margin: '10px 0' }}>New Message from {name}</Text>
          </Section>
          <Section style={{ padding: '20px' }}>
            <Text><strong>From:</strong> {name} ({email})</Text>
            <Text><strong>Timestamp:</strong> {timestamp}</Text>
            <Hr />
            <Text style={{ whiteSpace: 'pre-wrap' }}>{message}</Text>
            <Button href={`mailto:${email}`} style={{ backgroundColor: '#3b82f6', color: '#ffffff', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px', display: 'inline-block', marginTop: '20px' }}>Reply to Sender</Button>
          </Section>
          <Section style={{ backgroundColor: '#f4f4f4', padding: '10px', textAlign: 'center' }}>
            <Text style={{ fontSize: '12px', color: '#666666' }}>Sent from Taimoor Ahmad's Portfolio</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}