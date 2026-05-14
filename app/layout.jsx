
import "./globals.css";



export const metadata = {
  title: "Nasir Nawaz | MERN Stack Developer",
  description: "Professional portfolio for Nasir Nawaz, MERN Stack Developer specializing in React, Next.js, Node.js, Express.js, and MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
