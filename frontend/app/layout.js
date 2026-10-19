import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Script from 'next/script';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });

export const metadata = {
  title: 'Petits Anges - Garderie',
  description: "Garderie d'enfants chaleureuse et sécurisée",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={nunito.className}>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}