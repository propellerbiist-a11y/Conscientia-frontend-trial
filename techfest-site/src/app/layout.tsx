// @ts-ignore: allow global CSS import in layout
import "./globals.css";

export const metadata = {
  title: "TechFest",
  description: "Future Begins Here",
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