import ContextWrapper from '@/components/ContextWrapper';
import '@/styles/globals.css';

export const metadata = {
  title: 'Adriel Santos - Desenvolvedor Fullstack',
  description: 'Conheça meu trabalho como desenvolvedor web',
  themeColor: '#1d4ed8',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body>
        <ContextWrapper>{children}</ContextWrapper>
      </body>
    </html>
  );
}
