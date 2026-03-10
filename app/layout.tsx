import "./globals.css";

export const metadata = {
  title: "Shruti's Portfolio",
  description: "I make things :)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}