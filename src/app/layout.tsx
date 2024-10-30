import './globals.css';
  // Corrected import path
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        
        <main className="container mx-auto py-6">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
