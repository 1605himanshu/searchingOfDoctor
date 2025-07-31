import '../app/globals.css';

export const metadata = {
  title: 'Doctor Search App',
  description: 'Find and book doctors near you',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
         {children}
      </body>
    </html>
  );
}

